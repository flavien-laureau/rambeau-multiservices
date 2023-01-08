import ServiceTitle from "../src/components/global/ServiceTitle";
import styles from "../styles/components/location/location.module.scss";
import assainissement from "/public/assets/photos/assainissement.jpg";
import terrassement from "/public/assets/photos/terrassement.jpg";
import Devis from "../src/components/global/Devis";
import Image from "next/image";
import Head from "next/head";

export default function Location() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Location de mini-pelle 1,8 tonne avec ou sans chauffeur, pour des prestations de terrassement et/ou travaux d'assainissement."
        />

        <title>Location - Rambeau Multiservices</title>
      </Head>
      <div className={`container`}>
        <ServiceTitle
          className={styles.rentServiceTitle}
          title="Location avec chauffeur"
        >
          Location de pelle 1,8 tonne <br />
          Pour travaux de terrassement
        </ServiceTitle>

        <div className={styles.description}>
          <p>
            Basée à Ménetreuil en Saône-et-Loire (71) à proximité de Louhans,
            l’entreprise RAMBEAU MULTISERVICES réalise des travaux
            d’assainissement individuels et collectifs, la pose de
            canalisations, les travaux de VRD (Voiries et Réseaux Divers), la
            viabilisation de terrains ou de lotissements, la réalisation de
            tranchées pour les raccordements VRD ( eau, gaz, électricité ) et de
            tout à l’égout pour les particuliers et les professionnels.
          </p>
          <p>
            En fonction de votre projet je vous conseillerais afin de vous
            apporter une solution grâce à mon expertise de terrassier.
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.sanitation}>
            <Image
              src={assainissement}
              alt="Assainissement et passage de réseaux secs"
            />
            <div>
              <h4 className={`orange`}>
                Prestations de travaux d’assainissement :
              </h4>
              <ul>
                <li>
                  Assainissement individuel ou collectif ( Maison, immeuble,
                  bâtiment industriel, pose de micro station, épandage )
                </li>
                <li>Raccordement au réseau du tout à l’égout</li>
                <li>
                  Drainage et récupération des eaux pluviales ( pose de drains )
                </li>
                <li>
                  Mise en conformité des fosses septiques ( remplacement et mise
                  aux normes )
                </li>
                <li>Installation de fosses septiques ( plastique, béton )</li>
                <li>Pose de micro stations d’épuration</li>
                <li>Pose de station de relevage</li>
                <li>Réalisation de puits perdus</li>
                <li>Débouchage de canalisation</li>
              </ul>
            </div>
          </div>
          <div className={styles.terracing}>
            <Image
              src={terrassement}
              alt="Mini-pelle effectuant du terrassement pour fondation de murs"
            />
            <div>
              <h4 className={`orange`}>Prestations de Terrassement :</h4>
              <ul>
                <li>
                  Nivellement de terrain (déssouchage, nettoyage, défrichage)
                </li>
                <li>
                  Remblaiement (mise en place de terre de remblais ou végétale)
                </li>
                <li>
                  Terrassement pour fondation de murs ou/et d'ouvrages maçonnés
                </li>
                <li>
                  Terrassement et passage de réseaux (électrique, eau,
                  assainissement…)
                </li>
                <li>Drainage ( pose de drains )</li>
                <li>
                  Création d’un trou de piscine (Terrassement et évacuation )
                </li>
                <li>
                  Aménagement de chemins d’accès (calcaire, béton concassé)
                </li>
                <li>Création d’allées de jardin (cailloux, enrobés)</li>
                <li>Enrochement</li>
              </ul>
              <em>
                Petits terrassements, travaux réalisables avec un engin de
                chantier de 1.8 tonne
              </em>
            </div>
          </div>

          <div className={styles.info}>
            <p>
              Toutes les prestations ci-dessus sont valables pour une location
              avec ou sans chauffeur.
            </p>
            <p>
              Professionnel titulaire du CACES R482 cat A conducteur d’engin.
            </p>
          </div>
        </div>

        <Devis>
          L’entreprise RAMBEAU MULTISERVICES vous propose la location d'une
          mini-pelle, avec ou sans chauffeur, pour des prestations de
          terrassement et/ou travaux d'assainissement à Ménetreuil (71) et
          alentours.
        </Devis>
      </div>
    </>
  );
}
