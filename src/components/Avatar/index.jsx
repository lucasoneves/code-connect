import Image from "next/image"

export const Avatar = ({name, imgSrc, altImg}) => {
  return <ul>
    <li>
      <h3>{name}</h3>
      <Image src={imgSrc} width={32} height={32} alt={altImg} />
    </li>
  </ul>
}