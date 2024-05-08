import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error("Ops...não conseguimos trazer os dados");
    return [];
  }

  logger.info("Posts obtidos com sucesso");

  return await response.json();
}

export default async function Home() {
  const {data: posts} = await getAllPosts(1);
  return (
    <main>
      <h2>Code Connect</h2>
      <div className="posts-container">
        {posts.map(post => {
          return <CardPost post={post} />
        })}
      </div>
    </main>
  );
}
