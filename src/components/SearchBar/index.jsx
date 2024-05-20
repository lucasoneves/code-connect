import { Button } from "../Button";
import styles from "./search-form.module.scss";
import Image from "next/image";

export const SearchForm = () => {
  return (
    <form className={styles["search-form"]} action={'/'}>
      <div className={styles['icon-wrapper']}>
        <Image className={styles['search-icon']} src='/images/search.svg' width={20} height={20} alt="ícone de pesquisar" />
      </div>
      <input type="text" placeholder="Digite o que você procura" name="q"/>
      <Button title="Buscar" />
    </form>
  );
};
