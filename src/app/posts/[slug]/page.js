import logger from "@/logger";

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error("Ops...não conseguimos trazer os dados");
    return {};
  }

  logger.info("Posts obtidos com sucesso");

  const data = await response.json();

  if (data.length === 0) {
    return {}
  }
  return data[0];
}

async function PostDetail({params}) {
  const post = await getPostBySlug(params.slug);

  console.log(post)

  return <h2>{post.title}</h2>;
};

export default PostDetail;
