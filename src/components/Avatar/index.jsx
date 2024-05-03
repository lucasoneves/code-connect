import Image from "next/image"
import styles from './avatar.module.scss'

export const Avatar = ({name, imgSrc, altImg}) => {
  return <ul className={styles['avatar']}>
    <li>
      <h3>{name}</h3>
      <Image src={imgSrc} width={32} height={32} alt={altImg} />
    </li>
  </ul>
}