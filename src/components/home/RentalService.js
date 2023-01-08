import styles from "../../../styles/components/home/rental-service.module.scss";
import ServiceTitle from "../global/ServiceTitle";
import Link from "next/link";

export default function RentalService() {
  return (
    <section id="location" className={styles.rentalService}>
      <div className={`container`}>
        <ServiceTitle
          className={styles.rentServiceTitle}
          title="Location avec chauffeur"
        >
          Location de pelle 1,8 tonne <br />
          Pour travaux de terrassement
        </ServiceTitle>

        <div className={styles.rentContainer}>
          <div className={styles.rentMain}>
            <ul>
              <li>
                Terrassement et installation de fosses, cuves et réservoirs
              </li>
              <li>
                Terrassement pour fondation de murs ou/et d'ouvrages maçonnés
              </li>
              <li>Terrassement pour piscines</li>
              <li>
                Terrassement pour aménagement espace vert (butte et fossé)
              </li>
              <li>
                Terrassement et passage de réseaux (électrique, eau,
                assainissement…)
              </li>
              <li>Et bien plus encore ...</li>
            </ul>

            <div className={styles.rentFooter}>
              <em>
                Faites appel à RAMBEAU MULTISERVICES pour réaliser les travaux
                d’assainissement à Ménetreuil (71) et alentours. Vous profiterez
                d’un interlocuteur unique tout au long de la réalisation du
                projet.
              </em>
              <Link className={styles.buttonCTA} href="/location">
                En savoir plus
              </Link>
            </div>
          </div>
          <img
            className={styles.img}
            src="/assets/photos/pelle.jpg"
            alt="Samuel Faudan procède à du terrassement sur la mini-pelle"
          />
        </div>
      </div>
    </section>
  );
}
