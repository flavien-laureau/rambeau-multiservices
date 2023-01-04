import styles from "../../../styles/components/global/gridService.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function GridService({ services }) {
  return (
    <>
      {services?.map((service) => (
        <Link
          className={styles.link}
          key={service.verb.toLowerCase()}
          href={`/services/${service.verb.toLowerCase()}`}
        >
          <Image
            className={styles.img}
            src={service.img}
            width="700"
            height="700"
            alt={`Service de bricolage : ${service.verb}`}
          />

          <div className={styles.moreContainer}>
            <div className={styles.more}>
              <p>En savoir plus</p>
            </div>
          </div>

          <div className={styles.subService}>
            <p>{service.verb}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
