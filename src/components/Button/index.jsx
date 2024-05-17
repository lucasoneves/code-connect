import styles from './button.module.scss';

export const Button = ({title}) => {
  return <button className={styles['button']}>{title}</button>
}