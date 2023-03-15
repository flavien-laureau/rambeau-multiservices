import styles from "../../../styles/components/layout/header.module.scss";
import outilsHexa from "/public/photos/outils-hexa.png";
import portraitHexa from "/public/photos/portrait-hexa.png";
import pelleHexa from "/public/photos/pelle-hexa.png";
import Image from "next/image";

export default function HeroPictures() {
  return (
    <div className={styles.heroPictures}>
      <Image src={outilsHexa} alt="Outils de bricolage" />
      <Image src={portraitHexa} alt="Samuel Faudan sur un chantier" priority />
      <Image src={pelleHexa} alt="Mini-pelle" />
    </div>
  );
}
