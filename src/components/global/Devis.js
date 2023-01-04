import styles from "../../../styles/components/global/devis.module.scss";
import Link from "next/link";

export default function Devis({ children }) {
  return (
    <div className={styles.devis}>
      <strong>
        <span></span>Vous souhaitez recevoir un devis ?<span></span>
      </strong>

      <p>{children}</p>
      <Link className={styles.btnDevisCta} href="/contact">
        DEMANDE DE RENSEIGNEMENTS ET DE DEVIS GRATUIT
      </Link>
    </div>
  );
}
