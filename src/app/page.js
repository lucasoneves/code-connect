import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true
      }
    });
    logger.info("Posts: " + posts)
    return { data: posts, prev: null, next: null}
  } catch (error) {
    logger.error('Falha ao obter posts', { error});
    return { data: [], prev: null, next: null};
  }
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main>
      <h2>Code Connect</h2>
      <div className="posts-container">
        {posts.map((post) => {
          return <CardPost post={post} />;
        })}
        {prev && <Link className="main-link" href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link className="main-link" href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
