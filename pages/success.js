import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/success/success.module.scss";
import enveloppe from "/assets/enveloppe.json";
import Lottie from "lottie-react";

export default function Success() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Message envoyé - Rambeau Multiservices</title>
      </Head>
      <div className={`container`}>
        <Lottie
          className={styles.lottie}
          loop={true}
          autoplay={true}
          animationData={enveloppe}
        />

        <div className={styles.mainText}>Votre message a bien été envoyé</div>

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
