"use client";
import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./card.module.scss";
import Link from "next/link";
import { incrementThumbsUp } from "@/actions";
import { ThumbsUpButton } from "./ThumbsUpButton";

export const CardPost = ({ post }) => {

  const submitThumbsUp = incrementThumbsUp.bind(null, post)

  return (
    <article className={styles["card-post"]}>
      <header className={styles["header"]}>
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
      <div className={styles["wrapper"]}>
        <section>
          <h2 className={styles["title"]}>{post.title}</h2>
          <p className={styles["description"]}>{post.body}</p>
          <Link className="main-link" href={`/posts/${post.slug}`}>
            Ver detalhes
          </Link>
        </section>
        <footer className={styles["footer"]}>
          <div className={styles['post-likes']}>
            <form action={submitThumbsUp}>
              <ThumbsUpButton />
            </form>
            <p>{post.likes}</p>
          </div>
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
