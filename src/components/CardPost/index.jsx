import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./card.module.scss";

export const CardPost = ({ post }) => {
  return (
    <article className={styles["card-post"]}>
      <header className={styles['header']}>
        <figure>
          <Image
            src={post.cover}
            width={450}
            height={180}
            alt={post.title}
            priority={true}
          />
        </figure>
      </header>
      <div className={styles['wrapper']}>
        <section>
          <h2 className={styles['title']}>{post.title}</h2>
          <p className={styles['description']}>{post.body}</p>
        </section>
        <footer className={styles['footer']}>
          <Avatar
            imgSrc={post.author.avatar}
            name={post.author.username}
            altImg={post.author.username}
          />
        </footer>
      </div>
    </article>
  );
};
