import styles from "./aside.module.scss";
import logo from './logo.png';
import Image from "next/image";

export const Aside = () => {
  return (
    <aside className={[styles['aside']]}>
      {/* <img src="/logo.png" alt="Code Connect" /> */}
      <Image src={logo} alt="Lodo da Code Connect" width={128} />
    </aside>
  );
};
