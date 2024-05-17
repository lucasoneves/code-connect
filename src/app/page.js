import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page) {
  try {

    const perPage = 6

    const skip = (page - 1) * perPage

    const totalItems = await db.post.count();

    const totalPages = Math.ceil(totalItems / perPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      orderBy:{
        created_at: "desc"
      },
      include: {
        author: true
      }
    });
    logger.info("Posts: " + posts)
    return { data: posts, prev, next}
  } catch (error) {
    logger.error('Falha ao obter posts', { error});
    return { data: [], prev: null, next: null};
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main>
      <h2>Code Connect</h2>
      <div className="posts-container">
        {posts.map((post) => {
          return <CardPost post={post} key={post.id} />;
        })}
        {prev && <Link className="main-link" href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link className="main-link" href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}