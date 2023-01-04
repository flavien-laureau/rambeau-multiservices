import styles from "../../../styles/components/home/handyman-service.module.scss";
import ServiceTitle from "../global/ServiceTitle";
import Services from "/public/services.json";
import GridService from "../global/GridService";
import Link from "next/link";

export default function HandymanService() {
  return (
    <section id="bricolage" className={styles.handymanService}>
      <div className={`container`}>
        <h2 className={styles.servicesTitle}>Mes services</h2>
        <ServiceTitle className={styles.handymanServiceTitle} title="Bricolage">
          Petit bricolage d'intérieur et d'extérieur <br />
          (hors espace vert)
        </ServiceTitle>

        <div className={styles.servicesGrid}>
          {Services ? <GridService services={Services} /> : null}
        </div>

        <div className={`main-line`}>
          Les services ci-dessus sont à titres d’exemples,{" "}
          <Link href="/contact">contactez-moi</Link> directement pour que nous
          puissions évaluer ensemble la nature de vos besoins.
        </div>
      </div>
    </section>
  );
}
