import styles from "../../../styles/components/home/hook1.module.scss";
import Link from "next/link";

export default function Hook1() {
  return (
    <section className={styles.hook1}>
      <div className={`container ${styles.container}`}>
        <div className={styles.subSection}>
          <div className={styles.subSectionContainer}>
            <h2 className={`orange`}>bricolage</h2>
            <p>
              Intérieur et extérieur <br />
              (hors espace vert)
            </p>
            <div className={styles.checklistGrid}>
              <p>
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.15326 17.2726C5.75371 17.529 8.41263 19.0164 10.9068 20.4774C11.0859 20.5823 11.3338 20.5459 11.4552 20.4014C15.1193 16.0404 28.03 -0.661706 31.7549 0.0202971C35.6033 0.72499 31.1811 4.64711 30.9419 4.89857C20.2946 16.0885 16.8806 31.4879 12.8815 35.2993C10.4377 37.6284 9.98659 33.5154 6.35095 28.0381C2.91722 22.865 1.14995 21.6737 0.684309 19.9247C0.309848 18.5181 2.07191 16.9391 4.15326 17.2726Z"
                    fill="#EA802A"
                  />
                </svg>
                Poser
              </p>
              <p>
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.15326 17.2726C5.75371 17.529 8.41263 19.0164 10.9068 20.4774C11.0859 20.5823 11.3338 20.5459 11.4552 20.4014C15.1193 16.0404 28.03 -0.661706 31.7549 0.0202971C35.6033 0.72499 31.1811 4.64711 30.9419 4.89857C20.2946 16.0885 16.8806 31.4879 12.8815 35.2993C10.4377 37.6284 9.98659 33.5154 6.35095 28.0381C2.91722 22.865 1.14995 21.6737 0.684309 19.9247C0.309848 18.5181 2.07191 16.9391 4.15326 17.2726Z"
                    fill="#EA802A"
                  />
                </svg>
                Réparer
              </p>
              <p>
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.15326 17.2726C5.75371 17.529 8.41263 19.0164 10.9068 20.4774C11.0859 20.5823 11.3338 20.5459 11.4552 20.4014C15.1193 16.0404 28.03 -0.661706 31.7549 0.0202971C35.6033 0.72499 31.1811 4.64711 30.9419 4.89857C20.2946 16.0885 16.8806 31.4879 12.8815 35.2993C10.4377 37.6284 9.98659 33.5154 6.35095 28.0381C2.91722 22.865 1.14995 21.6737 0.684309 19.9247C0.309848 18.5181 2.07191 16.9391 4.15326 17.2726Z"
                    fill="#EA802A"
                  />
                </svg>
                Monter
              </p>
              <p>
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.15326 17.2726C5.75371 17.529 8.41263 19.0164 10.9068 20.4774C11.0859 20.5823 11.3338 20.5459 11.4552 20.4014C15.1193 16.0404 28.03 -0.661706 31.7549 0.0202971C35.6033 0.72499 31.1811 4.64711 30.9419 4.89857C20.2946 16.0885 16.8806 31.4879 12.8815 35.2993C10.4377 37.6284 9.98659 33.5154 6.35095 28.0381C2.91722 22.865 1.14995 21.6737 0.684309 19.9247C0.309848 18.5181 2.07191 16.9391 4.15326 17.2726Z"
                    fill="#EA802A"
                  />
                </svg>
                Déboucher
              </p>
              <p>
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.15326 17.2726C5.75371 17.529 8.41263 19.0164 10.9068 20.4774C11.0859 20.5823 11.3338 20.5459 11.4552 20.4014C15.1193 16.0404 28.03 -0.661706 31.7549 0.0202971C35.6033 0.72499 31.1811 4.64711 30.9419 4.89857C20.2946 16.0885 16.8806 31.4879 12.8815 35.2993C10.4377 37.6284 9.98659 33.5154 6.35095 28.0381C2.91722 22.865 1.14995 21.6737 0.684309 19.9247C0.309848 18.5181 2.07191 16.9391 4.15326 17.2726Z"
                    fill="#EA802A"
                  />
                </svg>
                Installer
              </p>
              <p>
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.15326 17.2726C5.75371 17.529 8.41263 19.0164 10.9068 20.4774C11.0859 20.5823 11.3338 20.5459 11.4552 20.4014C15.1193 16.0404 28.03 -0.661706 31.7549 0.0202971C35.6033 0.72499 31.1811 4.64711 30.9419 4.89857C20.2946 16.0885 16.8806 31.4879 12.8815 35.2993C10.4377 37.6284 9.98659 33.5154 6.35095 28.0381C2.91722 22.865 1.14995 21.6737 0.684309 19.9247C0.309848 18.5181 2.07191 16.9391 4.15326 17.2726Z"
                    fill="#EA802A"
                  />
                </svg>
                Peindre
              </p>
            </div>
            <p className="orange more">Et bien plus encore ...</p>
          </div>
          <Link href="/#bricolage" scroll={false}>
            <svg
              className={styles.circleBtn}
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="55" cy="55" r="53.5" strokeWidth="3" />
              <path d="M41.5387 60.4788C41.9033 60.1113 42.3987 59.9034 42.9163 59.9006C43.4339 59.8978 43.9315 60.1005 44.3 60.4641L53.4102 69.5578L53.4102 34.9448C53.4102 34.429 53.6151 33.9344 53.9798 33.5696C54.3445 33.2049 54.8392 33 55.355 33C55.8708 33 56.3655 33.2049 56.7302 33.5696C57.0949 33.9344 57.2998 34.429 57.2998 34.9448L57.2998 69.543L66.4101 60.4494C66.7801 60.0889 67.2771 59.8884 67.7937 59.8911C68.3103 59.8939 68.8051 60.0997 69.1713 60.4641C69.5321 60.8292 69.7332 61.3225 69.7304 61.8358C69.7277 62.3491 69.5213 62.8402 69.1566 63.2014L56.7421 75.5349C56.5619 75.7029 56.3547 75.8392 56.1291 75.938C55.893 76.0389 55.6385 76.0897 55.3817 76.0871C54.8736 76.0874 54.3855 75.8892 54.0213 75.5349L41.6069 63.2014C41.4212 63.0286 41.2719 62.8204 41.1677 62.5891C41.0636 62.3578 41.0066 62.108 41.0003 61.8544C40.9939 61.6008 41.0383 61.3485 41.1308 61.1123C41.2232 60.8761 41.3619 60.6607 41.5387 60.4788Z" />
            </svg>
          </Link>
        </div>
        <hr className={styles.separator} />
        <div className={styles.subSection}>
          <div className={styles.subSectionContainer}>
            <h2 className={`orange`}>Location</h2>
            <p>
              Des travaux de terrassement <br />à réaliser ?
            </p>
            <strong className={`orange`}>N'attendez-plus !</strong>
            <p className={styles.locContent}>Location mini-pelle</p>
            <p className={styles.locContent}>1,8 tonne</p>
            <p className={styles.locContent}>Avec ou sans chauffeur</p>
            <p className={styles.locContent}>
              Terrassement, assainissement <br />
              et diverses canalisations
            </p>
          </div>
          <Link href="/#location" scroll={false}>
            <svg
              className={styles.circleBtn}
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="55"
                r="53.5"
                stroke="#EA802A"
                strokeWidth="3"
              />
              <path
                d="M41.5387 60.4788C41.9033 60.1113 42.3987 59.9034 42.9163 59.9006C43.4339 59.8978 43.9315 60.1005 44.3 60.4641L53.4102 69.5578L53.4102 34.9448C53.4102 34.429 53.6151 33.9344 53.9798 33.5696C54.3445 33.2049 54.8392 33 55.355 33C55.8708 33 56.3655 33.2049 56.7302 33.5696C57.0949 33.9344 57.2998 34.429 57.2998 34.9448L57.2998 69.543L66.4101 60.4494C66.7801 60.0889 67.2771 59.8884 67.7937 59.8911C68.3103 59.8939 68.8051 60.0997 69.1713 60.4641C69.5321 60.8292 69.7332 61.3225 69.7304 61.8358C69.7277 62.3491 69.5213 62.8402 69.1566 63.2014L56.7421 75.5349C56.5619 75.7029 56.3547 75.8392 56.1291 75.938C55.893 76.0389 55.6385 76.0897 55.3817 76.0871C54.8736 76.0874 54.3855 75.8892 54.0213 75.5349L41.6069 63.2014C41.4212 63.0286 41.2719 62.8204 41.1677 62.5891C41.0636 62.3578 41.0066 62.108 41.0003 61.8544C40.9939 61.6008 41.0383 61.3485 41.1308 61.1123C41.2232 60.8761 41.3619 60.6607 41.5387 60.4788Z"
                fill="#EA802A"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
