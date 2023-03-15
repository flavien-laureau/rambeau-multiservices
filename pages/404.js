import styles from "../styles/components/404/404.module.scss";
import digging from "/assets/digging.json";
import Lottie from "lottie-react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>404 - Rambeau Multiservices</title>
      </Head>
      <div className={`container`}>
        <Lottie
          className={styles.lottie}
          loop={true}
          autoplay={true}
          animationData={digging}
        />

        <div className={styles.mainText}>
          <p>404 not found</p>
          <p>La page demandée n'a pas été trouvée.</p>
        </div>

        <div className={styles.links}>
          <Link href="/">Retour à l'accueil</Link>
          <Link href="/#bricolage" scroll={false}>
            Voir mes services
          </Link>
        </div>
      </div>
    </>
  );
}
