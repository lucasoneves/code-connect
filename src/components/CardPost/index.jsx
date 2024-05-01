import Image from "next/image";
import { Avatar } from "../Avatar";

export const CardPost = ({ post }) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} width={450} height={180} alt={post.title} />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar imgSrc={post.author.avatar} name={post.author.username} altImg={post.author.userName} />
      </footer>
    </article>
  );
};
