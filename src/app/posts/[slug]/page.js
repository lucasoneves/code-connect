import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./postDetail.module.scss";
import Image from "next/image";
import { Avatar } from "@/components/Avatar";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";

async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      include: {
        author: true
      },
      where: {
        slug
      }
    })

    if (!post) {
      throw new Error(`Post com o slug ${slug} não encotrado`)
    }
  
    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
    
    post.markdown = contentHtml;
    return post;
  } catch (error) {
    logger.error('Falha ao obter o post com o slug: ', {
      slug, error
    })
  }

  redirect('/not-found');

}

async function PostDetail({ params }) {
  const post = await getPostBySlug(params.slug);

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
