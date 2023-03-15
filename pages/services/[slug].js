import styles from "../../styles/components/handyman/services.module.scss";
import Services from "/assets/services.json";
import ServiceTitle from "../../src/components/global/ServiceTitle";
import Devis from "../../src/components/global/Devis";
import GridService from "../../src/components/global/GridService";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Post = ({ servicesData }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [service] = servicesData.filter((s) => s.verb.toLowerCase() === slug);
  const otherService = servicesData.filter(
    (s) => s.verb.toLowerCase() !== slug
  );

  const title = `${service.verb} - Rambeau Multiservices`;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Le présent site, accessible à l’URL rambeau-multiservices.fr, est édité par : Samuel FAUDAN, de nationalité Française, né le 24/09/1971, inscrite au R.C.S. de DIJON sous le numéro RCS Chalon-sur-Saône 818 464 844,"
        />
        <title>{title}</title>
      </Head>

      <div className={`container`}>
        <ServiceTitle className={styles.handymanServiceTitle} title="Bricolage">
          Petit bricolage d'intérieur et d'extérieur <br />
          (hors espace vert)
        </ServiceTitle>

        <div>
          <div className={styles.content}>
            <Image
              className={styles.img}
              src={service.img}
              alt={`Service de bricolage : ${service.verb}`}
              width="700"
              height="700"
            />

            <div>
              <h4>{service.title}</h4>
              <ul>
                {service.services.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`main-line`}>
            Les services ci-dessus sont à titre d’exemple,{" "}
            <Link href={"/contact"}>contactez-moi</Link> directement pour que
            nous puissions évaluer ensemble la nature de vos besoins.
          </div>
        </div>

        <Devis>
          L’entreprise RAMBEAU MULTISERVICES intervient pour la réalisation de
          petits travaux à Ménetreuil (71) et alentours.
        </Devis>

        <div className={styles.seeAlso}>
          <p>Voir également :</p>
          <div className={styles.servicesGrid}>
            <GridService services={otherService} />
          </div>
        </div>
      </div>
    </>
  );
};

async function getData() {
  return Services;
}

export async function getStaticPaths() {
  return {
    paths: [
      "/services/poser",
      "/services/installer",
      "/services/monter",
      "/services/réparer",
      "/services/déboucher",
      "/services/peindre",
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  const servicesData = await getData();
  return {
    props: {
      servicesData,
    },
  };
}

export default Post;
