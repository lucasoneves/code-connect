import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./postDetail.module.scss";
import Image from "next/image";
import { Avatar } from "@/components/Avatar";

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
    return {};
  }
  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

async function PostDetail({ params }) {
  const post = await getPostBySlug(params.slug);

  console.log(post);

  return (
    <div className={styles["post-container"]}>
      <h2>{post.title}</h2>
        <Image
          className={styles['post-cover']}
          src={post.cover}
          width={600}
          height={150}
          alt={`Capa do post de titulo: ${post.title}`}
        />
        <Avatar name={post.author.name} imgSrc={post.author.avatar}  />
      <div
        className={styles["post-content"]}
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      ></div>
    </div>
  );
}

export default PostDetail;
