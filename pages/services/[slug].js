import { useRouter } from "next/router";
import styles from "../../styles/components/handyman/services.module.scss";
import ServiceTitle from "../../src/components/global/ServiceTitle";
import Devis from "../../src/components/global/Devis";
import Services from "/public/services.json";
import Image from "next/image";
import GridService from "../../src/components/global/GridService";
import Head from "next/head";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [service] = Services.filter((s) => s.verb.toLowerCase() === slug);
  const otherService = Services.filter((s) => s.verb.toLowerCase() !== slug);
  const title = `${service?.verb} - Rambeau Multiservices`;

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
            {service?.img ? (
              <Image
                className={styles.img}
                src={service.img}
                alt={`Service de bricolage : ${service.verb}`}
                width="700"
                height="700"
              />
            ) : null}

            <div>
              <h4>{service?.title}</h4>
              <ul>
                {service?.services.map((s, i) => (
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
          petit travaux à Ménetreuil (71) et alentours.
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

export default Post;
