import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/mentions/mentions.module.scss";

export default function Mentions() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Le présent site, accessible à l’URL rambeau-multiservices.fr, est édité par : Samuel FAUDAN, de nationalité Française, né le 24/09/1971, inscrite au R.C.S. de DIJON sous le numéro RCS Chalon-sur-Saône 818 464 844,"
        />
        <title>Mentions légales - Rambeau Multiservices</title>
      </Head>

      <div className={`container ${styles.mentions}`}>
        <Link href="/" className={`${styles.btnReturn} ${styles.btnTop}`}>
          Retour au site
        </Link>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l'économie numérique, il est précisé aux
          utilisateurs du site rambeau-multiservices.fr l'identité des
          différents intervenants dans le cadre de sa réalisation et de son
          suivi.
        </p>
        <p className={styles.mentionsTitle}>Edition du site</p>
        <p>
          Le présent site, accessible à l’URL rambeau-multiservices.fr
          (ci-après, le « Site »), est édité par :
        </p>
        <p>
          Samuel FAUDAN, de nationalité Française (France), né le 24/09/1971,
          inscrite au R.C.S. de DIJON sous le numéro RCS Chalon-sur-Saône 818
          464 844,
        </p>
        <p className={styles.mentionsTitle}>Hébergement</p>
        <p>
          Le Site est hébergé par Netlify, dont le siège social est situé 2325
          3rd Street, Suite 296, San Francisco, California 94107.
        </p>
        <p>L’hébergeur est joignable à l’adresse email support@netlify.com</p>
        <p className={styles.mentionsTitle}>Directeur de publication</p>
        <p>Le Directeur de la publication du Site est Samuel FAUDAN.</p>
        <p className={styles.mentionsTitle}>Nous contacter</p>
        <p>Par téléphone : 0385749136</p>
        <p>Par email : contact@rambeau-multiservices.fr</p>
        <p className={styles.mentionsTitle}>
          DONNÉES PERSONNELLES <br />
          POLITIQUE DE CONFIDENTIALITÉ
        </p>
        <p>
          Utilisation des données : <br />
          Les données que vous nous transmettez directement sont utilisées dans
          le but de vous re-contacter et/ou dans le cadre de la demande que vous
          nous faites. Les données « web analytics » sont collectées de forme
          anonyme (en enregistrant des adresses IP anonymes) par Google
          Analytics, et nous permettent de mesurer l'audience de notre site web,
          les consultations et les éventuelles erreurs afin d’améliorer
          constamment l’expérience des utilisateurs. Ces données sont utilisées
          par RAMBEAU MULTISERVICES, responsable du traitement des données, et
          ne seront jamais cédées à un tiers ni utilisées à d’autres fins que
          celles détaillées ci-dessus.
        </p>
        <p>
          Base légale : <br /> Les données personnelles ne sont collectées
          qu’après consentement obligatoire de l’utilisateur. Ce consentement
          est valablement recueilli (case à cocher), libre, clair et sans
          équivoque.
        </p>
        <p>
          Durée de conservation : <br />
          Les données seront sauvegardées durant une durée maximale de 3 ans.
        </p>
        <p className={styles.mentionsTitle}>PROPRIÉTÉ INTELLECTUELLE</p>
        <p>
          Le Site et l’ensemble de son contenu, y compris pour les documents
          téléchargeables, (en ce inclus notamment les sons, textes,
          informations, images, marques, logos, signes distinctifs, etc.)
          relèvent de la législation française et internationale sur le droit
          d’auteur et la propriété intellectuelle, et sont la propriété
          exclusive de Rambeau multiservices.
        </p>
        <p>
          Sauf autorisation préalable et expresse de Rambeau multiservices, la
          représentation ou la reproduction (en ce inclus notamment toute
          traduction, adaptation, transformation, arrangement, etc.), par
          quelque procédé que ce soit, de tout ou partie de ce Site ou des
          éléments qui le constituent est formellement interdite et
          constituerait, le cas échéant, un acte de contrefaçon sanctionnée
          notamment par les articles L.335-2 et suivants et L.716-1 et suivants
          du Code de la propriété intellectuelle.
        </p>
        <p>
          Les marques citées sur ce Site sont déposées par les sociétés qui en
          sont propriétaires.
        </p>
        <p>Crédits photographiques : Pixabay / unsplash</p>
        <p className={styles.mentionsTitle}>
          LOI APPLICABLE ET COMPÉTENCE JURIDICTIONNELLE
        </p>
        <p>
          Les présentes mentions légales et politique de confidentialité sont
          régies par la loi française. En cas de litige relatif à leur validité,
          leur interprétation et/ou leur application, attribution expresse de
          juridiction est donnée aux tribunaux compétents.
        </p>
        <p>
          Les formulations des présentes mentions légales sont valides et leur
          interprétation et/ou leur application, attribution expresse de
          juridiction est donnée aux tribunaux compétents, en cas de litige.
        </p>
        <p className={styles.mentionsTitle}>FONCTIONNEMENT</p>
        <p>
          Pour toute remarque sur le fonctionnement du Site, écrivez ou adressez
          un message au webmaster :
        </p>
        <p>Par téléphone : 0624769378</p>
        <p>Par mail : flavien.laureau@gmail.com</p>
        <Link href="/" className={`${styles.btnReturn} ${styles.btnTop}`}>
          Retour au site
        </Link>
      </div>
    </>
  );
}
