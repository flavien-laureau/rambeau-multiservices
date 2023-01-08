import styles from "../../../styles/components/home/about.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/photos/Samuel-Faudan.jpg"
            fill
            alt="Samuel Faudan"
          />
        </div>

        <div className={styles.aboutContainer}>
          <h2>À propos</h2>
          <p className="orange">
            Entrepreneur dans le service de petit bricolage à domicile, Samuel
            Faudan met à la disposition des particuliers plus de 15 ans
            d’expérience et de savoir-faire dans le bricolage et les métiers du
            terrassement.
          </p>
          <p className={styles.description}>
            Intervenant dans le secteur de Ménetreuil et dans les villages
            alentours, je garantis à chaque client un travail de qualité et un
            œil expert pour vous apporter conseils et satisfaction à chacune de
            mes interventions.
          </p>
          <ul>
            <li>Des petits travaux de peinture à réaliser ?</li>
            <li>Besoin d’aide pour fixer un lustre ?</li>
            <li>Un évier bouché ?</li>
            <li>Du terrassement à faire (piscine, fondations, ...) ?</li>
            <li>Des canalisations ou une cuve à installer ?</li>
          </ul>
          <p>
            Alors <Link href="/contact">contactez-moi</Link> dès maintenant !
          </p>
        </div>
        <div className={styles.aboutBtn}>
          <Link href="/#bricolage" scroll={false}>
            <svg
              className={styles.circleBtn}
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="55"
                r="53.5"
                stroke="#f2f3f5"
                strokeWidth="3"
              />
              <path
                d="M41.5387 60.4788C41.9033 60.1113 42.3987 59.9034 42.9163 59.9006C43.4339 59.8978 43.9315 60.1005 44.3 60.4641L53.4102 69.5578L53.4102 34.9448C53.4102 34.429 53.6151 33.9344 53.9798 33.5696C54.3445 33.2049 54.8392 33 55.355 33C55.8708 33 56.3655 33.2049 56.7302 33.5696C57.0949 33.9344 57.2998 34.429 57.2998 34.9448L57.2998 69.543L66.4101 60.4494C66.7801 60.0889 67.2771 59.8884 67.7937 59.8911C68.3103 59.8939 68.8051 60.0997 69.1713 60.4641C69.5321 60.8292 69.7332 61.3225 69.7304 61.8358C69.7277 62.3491 69.5213 62.8402 69.1566 63.2014L56.7421 75.5349C56.5619 75.7029 56.3547 75.8392 56.1291 75.938C55.893 76.0389 55.6385 76.0897 55.3817 76.0871C54.8736 76.0874 54.3855 75.8892 54.0213 75.5349L41.6069 63.2014C41.4212 63.0286 41.2719 62.8204 41.1677 62.5891C41.0636 62.3578 41.0066 62.108 41.0003 61.8544C40.9939 61.6008 41.0383 61.3485 41.1308 61.1123C41.2232 60.8761 41.3619 60.6607 41.5387 60.4788Z"
                fill="#f2f3f5"
              />
            </svg>
            <p>
              Mes <br />
              services
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
