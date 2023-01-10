import Link from "next/link";
import styles from "../../../styles/components/layout/footer.module.scss";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.footerContainer}>
          <div className={`${styles.one} ${styles.footerSection}`}>
            <h5 className={styles.footerTitle}>Mes coordonnées</h5>
            <strong>RAMBEAU MULTISERVICES</strong>
            <p>
              <a href="tel:+33385749136">Tél : 03.85.74.91.36</a>
            </p>
            <p>Mail : contact@rambeau-multiservices.fr</p>
          </div>

          <div className={`${styles.two} ${styles.footerSection}`}>
            <h5 className={styles.footerTitle}>Secteurs d’interventions</h5>
            <p>Louhans</p>
            <p>Lons-le-Saunier</p>
            <p>Chalon-sur-Saône</p>
            <p>Macôn</p>
          </div>

          <div className={`${styles.three} ${styles.footerSection}`}>
            <h5 className={styles.footerTitle}>Rubriques</h5>
            <Link href="/">Accueil</Link>
            <Link href="/#bricolage" scroll={false}>
              Bricolage
            </Link>
            <Link href="/#location" scroll={false}>
              Location avec chauffeur
            </Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <hr />

          <div>
            <Link href="/mentions">Mentions légales</Link>
            <p>Site web réalisé par Flavien Laureau</p>
          </div>
          <p>Copyright © {year} Rambeau Multiservices | Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
