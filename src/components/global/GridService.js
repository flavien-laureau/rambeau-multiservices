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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z" />
            </svg>
            <p>{service.verb}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z" />
            </svg>
          </div>
        </Link>
      ))}
    </>
  );
}
