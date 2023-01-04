import styles from "../../../styles/components/home/hook2.module.scss";

export default function Hook2() {
  return (
    <section className={styles.hook2}>
      <div className={`container`}>
        <h2 className={`orange`}>
          Offrez-vous du temps libre ! Je m'occupe de tout.
        </h2>
        <ul>
          <li>Un professionnel à votre écoute pour vous conseiller</li>
          <li>Devis gratuit</li>
          <li>Déplacement gratuit pour les travaux supérieurs à 2h</li>
        </ul>
        <div className={`main-line`}>
          Dès notre premier contact, nous déterminerons ensemble quels sont vos
          besoins et tenterons de les résoudre de la meilleure façon possible.
        </div>
      </div>
    </section>
  );
}
