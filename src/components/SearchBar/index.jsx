import { Button } from "../Button"
import styles from './search-sidebar.module.scss';

export const SearchSidebar = () => {
  return <div className={styles['search-sidebar']}><input type="text" placeholder="Digite o que você procura" /><Button title="Buscar" /></div>
}