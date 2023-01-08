import styles from "../../../styles/components/home/skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.skillsBox}>
      <div className={`container ${styles.skills}`}>
        <div className={styles.skillsContainer}>
          <div>
            <svg
              width="116"
              height="131"
              viewBox="0 0 116 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.5201 107.31C82.9856 107.31 104.44 85.8555 104.44 59.39C104.44 32.9245 82.9856 11.47 56.5201 11.47C30.0546 11.47 8.6001 32.9245 8.6001 59.39C8.6001 85.8555 30.0546 107.31 56.5201 107.31Z"
                stroke="#F2F3F5"
                strokeWidth="5"
              />
              <path
                d="M110.02 15.55L109.72 18.9C81.7201 39.63 66.7201 65.24 56.0601 87.19C49.6601 91.5 45.0901 97.25 42.3501 90.5C39.0001 81.66 31.6701 64.89 21.6201 61.5C25.8901 56.62 29.8501 55.4 34.7201 56.01C41.1301 56.93 46.9201 69.12 49.3601 74.6C62.5001 52.75 86.5501 27.75 110.02 15.55Z"
                fill="#EA802A"
              />
            </svg>
            Simplifiez-vous la vie
          </div>
          <div>
            <svg
              width="115"
              height="131"
              viewBox="0 0 115 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M102 38.89V38.84C100.282 35.6526 98.2092 32.6702 95.8198 29.95L98.8798 26.89C100.4 27.6031 102.124 27.7566 103.746 27.3234C105.369 26.8902 106.787 25.8981 107.749 24.5221C108.712 23.146 109.158 21.4742 109.009 19.8015C108.86 18.1287 108.125 16.5622 106.934 15.3782C105.743 14.1941 104.172 13.4685 102.499 13.3292C100.825 13.1899 99.1559 13.6459 97.7855 14.6167C96.4151 15.5876 95.4314 17.011 95.0078 18.6361C94.5842 20.2612 94.7478 21.9837 95.4698 23.5L92.4698 26.5C89.8606 24.0611 86.9976 21.9088 83.9298 20.08L83.8398 20.03C83.8398 20.03 83.7798 20.03 83.7498 19.98C77.0213 16.0204 69.4285 13.7618 61.6298 13.4V8.61H68.7298C69.3304 8.57092 69.8937 8.30476 70.3053 7.86553C70.7169 7.4263 70.9459 6.84693 70.9459 6.245C70.9459 5.64307 70.7169 5.0637 70.3053 4.62447C69.8937 4.18524 69.3304 3.91908 68.7298 3.88H49.7798C49.4563 3.85895 49.1319 3.9045 48.8267 4.01383C48.5215 4.12316 48.242 4.29394 48.0054 4.51561C47.7688 4.73729 47.5803 5.00514 47.4513 5.3026C47.3224 5.60006 47.2559 5.92081 47.2559 6.245C47.2559 6.56919 47.3224 6.88994 47.4513 7.1874C47.5803 7.48486 47.7688 7.75271 48.0054 7.97439C48.242 8.19606 48.5215 8.36684 48.8267 8.47617C49.1319 8.5855 49.4563 8.63105 49.7798 8.61H56.8798V13.41C54.3274 13.5427 51.7895 13.8771 49.2898 14.41C48.6954 14.5616 48.183 14.9377 47.8602 15.4593C47.5373 15.9809 47.4293 16.6073 47.5588 17.2068C47.6883 17.8064 48.0452 18.3324 48.5545 18.6743C49.0638 19.0162 49.6858 19.1472 50.2898 19.04C52.4715 18.59 54.6848 18.3092 56.9098 18.2V22.85C56.8887 23.1735 56.9343 23.4979 57.0436 23.8031C57.1529 24.1083 57.3237 24.3878 57.5454 24.6244C57.7671 24.861 58.0349 25.0495 58.3324 25.1784C58.6298 25.3074 58.9506 25.3739 59.2748 25.3739C59.599 25.3739 59.9197 25.3074 60.2172 25.1784C60.5147 25.0495 60.7825 24.861 61.0042 24.6244C61.2258 24.3878 61.3966 24.1083 61.506 23.8031C61.6153 23.4979 61.6608 23.1735 61.6398 22.85V18.15C67.8301 18.4721 73.8808 20.1084 79.3898 22.95L77.0198 26.95C76.7024 27.4912 76.6126 28.1363 76.7701 28.7436C76.9275 29.351 77.3194 29.8711 77.8598 30.19C78.2225 30.4068 78.6373 30.5208 79.0598 30.52C79.4652 30.5115 79.8618 30.3996 80.2118 30.1948C80.5618 29.9901 80.8537 29.6993 81.0598 29.35L83.4198 25.35C88.7729 28.8904 93.2826 33.564 96.6298 39.04L92.5198 41.26C92.0589 41.5117 91.6946 41.9094 91.4842 42.3906C91.2738 42.8718 91.2292 43.4092 91.3574 43.9185C91.4855 44.4278 91.7793 44.8801 92.1924 45.2044C92.6055 45.5286 93.1146 45.7065 93.6398 45.71C94.034 45.7038 94.4213 45.6044 94.7698 45.42L98.8798 43.21C101.29 48.3237 102.689 53.8552 103 59.5H98.3198C97.6912 59.5 97.0884 59.7497 96.6439 60.1942C96.1995 60.6386 95.9498 61.2414 95.9498 61.87C95.9498 62.4986 96.1995 63.1014 96.6439 63.5458C97.0884 63.9903 97.6912 64.24 98.3198 64.24H103C102.702 69.8853 101.316 75.42 98.9198 80.54L94.8098 78.32C94.2555 78.0163 93.6032 77.9453 92.9966 78.1225C92.3899 78.2997 91.8785 78.7107 91.5748 79.265C91.2711 79.8193 91.2001 80.4715 91.3773 81.0782C91.5545 81.6849 91.9655 82.1963 92.5198 82.5L96.6298 84.71C93.2836 90.1775 88.7817 94.8467 83.4398 98.39L81.0798 94.39C80.9619 94.0675 80.7753 93.7745 80.533 93.5312C80.2907 93.2879 79.9984 93.1002 79.6764 92.9811C79.3544 92.8619 79.0103 92.8141 78.668 92.8411C78.3257 92.868 77.9933 92.969 77.6939 93.1371C77.3945 93.3051 77.1351 93.5362 76.9338 93.8144C76.7325 94.0926 76.5941 94.4112 76.5281 94.7481C76.4621 95.0851 76.4701 95.4324 76.5515 95.7659C76.633 96.0995 76.7859 96.4114 76.9998 96.68C76.9967 96.7066 76.9967 96.7334 76.9998 96.76L79.3598 100.76C73.8562 103.609 67.8085 105.252 61.6198 105.58V100.9C61.6198 100.271 61.3701 99.6686 60.9256 99.2242C60.4812 98.7797 59.8783 98.53 59.2498 98.53C58.6212 98.53 58.0184 98.7797 57.5739 99.2242C57.1295 99.6686 56.8798 100.271 56.8798 100.9V105.57C54.6548 105.46 52.4416 105.179 50.2598 104.73C49.9511 104.651 49.6296 104.636 49.3147 104.684C48.9998 104.732 48.6978 104.844 48.4269 105.011C48.156 105.179 47.9217 105.399 47.7379 105.66C47.5542 105.92 47.4248 106.215 47.3576 106.526C47.2903 106.838 47.2865 107.159 47.3465 107.472C47.4064 107.785 47.5288 108.083 47.7064 108.347C47.8839 108.612 48.113 108.838 48.3799 109.012C48.6468 109.186 48.9461 109.304 49.2598 109.36C59.5064 111.525 70.1785 110.319 79.6834 105.922C89.1884 101.524 97.0166 94.1714 102 84.96C102.001 84.9433 102.001 84.9267 102 84.91C105.75 77.9288 107.731 70.1346 107.77 62.21C107.81 62.012 107.81 61.808 107.77 61.61C107.735 53.6786 105.753 45.877 102 38.89ZM101.88 18.08C102.346 18.0821 102.801 18.2216 103.188 18.481C103.576 18.7405 103.878 19.1084 104.057 19.5388C104.236 19.9691 104.285 20.4427 104.196 20.9004C104.107 21.3581 103.886 21.7794 103.559 22.1118C103.232 22.4442 102.815 22.6727 102.358 22.769C101.902 22.8652 101.428 22.8247 100.995 22.6527C100.561 22.4807 100.188 22.1847 99.9226 21.8018C99.6567 21.4189 99.5096 20.9661 99.4998 20.5C99.4998 19.8714 99.7495 19.2686 100.194 18.8242C100.638 18.3797 101.241 18.13 101.87 18.13L101.88 18.08ZM43.8798 32.29C43.8772 32.9178 43.6266 33.519 43.1827 33.9629C42.7388 34.4068 42.1375 34.6574 41.5098 34.66H36.7598C36.1312 34.66 35.5284 34.4103 35.0839 33.9658C34.6395 33.5214 34.3898 32.9186 34.3898 32.29C34.3898 31.6614 34.6395 31.0586 35.0839 30.6142C35.5284 30.1697 36.1312 29.92 36.7598 29.92H41.4898C42.1175 29.9226 42.7188 30.1732 43.1627 30.6171C43.6066 31.061 43.8572 31.6622 43.8598 32.29H43.8798ZM43.8798 44.13C43.8798 44.4429 43.8178 44.7528 43.6975 45.0416C43.5771 45.3305 43.4008 45.5926 43.1786 45.813C42.9564 46.0333 42.6927 46.2074 42.4029 46.3254C42.113 46.4433 41.8027 46.5026 41.4898 46.5H27.2798C26.9563 46.521 26.6319 46.4755 26.3267 46.3662C26.0215 46.2568 25.742 46.0861 25.5054 45.8644C25.2688 45.6427 25.0803 45.3749 24.9513 45.0774C24.8224 44.7799 24.7559 44.4592 24.7559 44.135C24.7559 43.8108 24.8224 43.4901 24.9513 43.1926C25.0803 42.8951 25.2688 42.6273 25.5054 42.4056C25.742 42.1839 26.0215 42.0132 26.3267 41.9038C26.6319 41.7945 26.9563 41.749 27.2798 41.77H41.4898C42.1175 41.7726 42.7188 42.0232 43.1627 42.4671C43.6066 42.911 43.8572 43.5122 43.8598 44.14L43.8798 44.13ZM43.8798 55.97C43.8772 56.5978 43.6266 57.199 43.1827 57.6429C42.7388 58.0868 42.1375 58.3374 41.5098 58.34H17.8098C17.1812 58.34 16.5784 58.0903 16.1339 57.6458C15.6895 57.2014 15.4398 56.5986 15.4398 55.97C15.4398 55.3414 15.6895 54.7386 16.1339 54.2942C16.5784 53.8497 17.1812 53.6 17.8098 53.6H41.4898C42.1175 53.6026 42.7188 53.8532 43.1627 54.2971C43.6066 54.741 43.8572 55.3422 43.8598 55.97H43.8798ZM43.8798 67.81C43.8771 68.4368 43.6263 69.0371 43.1821 69.4794C42.7379 69.9217 42.1366 70.17 41.5098 70.17H8.33979C8.01628 70.191 7.69189 70.1455 7.38668 70.0362C7.08148 69.9268 6.80195 69.7561 6.56539 69.5344C6.32882 69.3127 6.14025 69.0449 6.01134 68.7474C5.88243 68.4499 5.81592 68.1292 5.81592 67.805C5.81592 67.4808 5.88243 67.1601 6.01134 66.8626C6.14025 66.5651 6.32882 66.2973 6.56539 66.0756C6.80195 65.8539 7.08148 65.6832 7.38668 65.5738C7.69189 65.4645 8.01628 65.419 8.33979 65.44H41.4898C42.1166 65.44 42.7179 65.6883 43.1621 66.1306C43.6063 66.5729 43.8571 67.1732 43.8598 67.8L43.8798 67.81ZM43.8798 79.65C43.8771 80.2768 43.6263 80.8771 43.1821 81.3194C42.7379 81.7617 42.1366 82.01 41.5098 82.01H17.8098C17.4863 82.0311 17.1619 81.9855 16.8567 81.8762C16.5515 81.7668 16.272 81.5961 16.0354 81.3744C15.7988 81.1527 15.6103 80.8849 15.4813 80.5874C15.3524 80.2899 15.2859 79.9692 15.2859 79.645C15.2859 79.3208 15.3524 79.0001 15.4813 78.7026C15.6103 78.4051 15.7988 78.1373 16.0354 77.9156C16.272 77.6939 16.5515 77.5232 16.8567 77.4138C17.1619 77.3045 17.4863 77.2589 17.8098 77.28H41.4898C42.1166 77.28 42.7179 77.5283 43.1621 77.9706C43.6063 78.4129 43.8571 79.0132 43.8598 79.64L43.8798 79.65ZM43.8798 91.48C43.8798 92.1086 43.6301 92.7114 43.1856 93.1558C42.7412 93.6003 42.1383 93.85 41.5098 93.85H27.2798C26.9563 93.871 26.6319 93.8255 26.3267 93.7162C26.0215 93.6068 25.742 93.4361 25.5054 93.2144C25.2688 92.9927 25.0803 92.7249 24.9513 92.4274C24.8224 92.1299 24.7559 91.8092 24.7559 91.485C24.7559 91.1608 24.8224 90.8401 24.9513 90.5426C25.0803 90.2451 25.2688 89.9773 25.5054 89.7556C25.742 89.5339 26.0215 89.3632 26.3267 89.2538C26.6319 89.1445 26.9563 89.099 27.2798 89.12H41.4898C41.8019 89.12 42.1109 89.1816 42.3991 89.3014C42.6873 89.4211 42.949 89.5965 43.1692 89.8177C43.3894 90.0388 43.5637 90.3013 43.6823 90.59C43.8008 90.8787 43.8611 91.1879 43.8598 91.5L43.8798 91.48Z"
                fill="#F2F3F5"
              />
              <path
                d="M61.8998 73C62.3804 73.0966 62.8696 73.1435 63.3598 73.14C64.8114 73.1228 66.2332 72.7261 67.484 71.9893C68.7348 71.2525 69.771 70.2013 70.4898 68.94L81.4898 50.15C81.7543 49.6995 81.8618 49.1739 81.7955 48.6557C81.7292 48.1374 81.4928 47.6559 81.1234 47.2864C80.7539 46.917 80.2724 46.6806 79.7542 46.6143C79.2359 46.548 78.7104 46.6555 78.2598 46.92L59.4198 57.87C57.9623 58.6924 56.7926 59.9425 56.0686 61.4512C55.3447 62.96 55.1016 64.6547 55.3721 66.3062C55.6426 67.9576 56.4137 69.4862 57.5812 70.6851C58.7487 71.8841 60.2561 72.6956 61.8998 73.01V73Z"
                fill="#EA802A"
              />
            </svg>
            Gagner du temps
          </div>
          <div>
            <svg
              width="121"
              height="120"
              viewBox="0 0 121 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M59.9724 14.6955C35.2427 14.6955 15.1952 34.7429 15.1952 59.4726C15.1952 84.2024 35.2427 104.25 59.9724 104.25C84.7021 104.25 104.75 84.2024 104.75 59.4726C104.75 34.7429 84.7021 14.6955 59.9724 14.6955ZM9.45898 59.4726C9.45898 31.5749 32.0746 8.95923 59.9724 8.95923C87.8702 8.95923 110.486 31.5748 110.486 59.4726C110.486 87.3704 87.8702 109.986 59.9724 109.986C32.0746 109.986 9.45898 87.3704 9.45898 59.4726Z"
                fill="#F2F3F5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.3076 88.2725L47.9489 87.7886C47.9489 87.7886 50.1089 93.3837 55.8874 92.342L52.3071 109.762L47.7129 105.369L41.6641 106.945L45.3076 88.2725Z"
                fill="#EA802A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74.3815 88.2725L71.7389 87.7886C71.7389 87.7886 69.5802 93.3837 63.8018 92.342L67.382 109.762L71.9749 105.369L78.0251 106.945L74.3815 88.2725Z"
                fill="#EA802A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M59.9727 41.7573C69.4541 41.7573 77.1525 49.4558 77.1525 58.9371C77.1525 68.4184 69.4541 76.1169 59.9727 76.1169C50.4914 76.1169 42.793 68.4184 42.793 58.9371C42.793 49.4558 50.4914 41.7573 59.9727 41.7573ZM59.0246 45.625C59.1578 45.2149 59.5402 44.9367 59.9727 44.9367C60.4053 44.9367 60.7877 45.2149 60.9209 45.625C61.8374 48.4444 63.1376 52.4492 63.5055 53.5793C63.5648 53.7626 63.7363 53.8879 63.9288 53.8879C65.1182 53.8879 69.3288 53.8879 72.2932 53.8879C72.7244 53.8879 73.1081 54.1661 73.2413 54.5762C73.3745 54.9877 73.2281 55.4373 72.8787 55.6918C70.4813 57.4338 67.0752 59.909 66.1125 60.6079C65.9569 60.7213 65.891 60.9217 65.9503 61.105C66.3182 62.2364 67.6198 66.2413 68.5349 69.0606C68.6695 69.4707 68.5231 69.9204 68.1736 70.1749C67.8242 70.4294 67.3508 70.4294 67.0013 70.1749C64.1833 68.127 59.9727 65.069 59.9727 65.069C59.9727 65.069 55.7622 68.127 52.9442 70.1749C52.5947 70.4294 52.1213 70.4294 51.7719 70.1749C51.4224 69.9204 51.276 69.4707 51.4106 69.0606C52.3257 66.2413 53.6273 62.2364 53.9939 61.105C54.0545 60.9217 53.9886 60.7213 53.833 60.6079C52.8703 59.909 49.4642 57.4338 47.0668 55.6918C46.716 55.4373 46.571 54.9877 46.7042 54.5762C46.8374 54.1661 47.2198 53.8879 47.6523 53.8879C50.6167 53.8879 54.8273 53.8879 56.0154 53.8879C56.2092 53.8879 56.3807 53.7626 56.44 53.5793C56.8066 52.4492 58.1081 48.4444 59.0246 45.625Z"
                fill="#EA802A"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64.9495 29.1258C65.6854 28.6405 66.6744 28.8449 67.1597 29.5794C67.9403 30.7662 69.0625 32.4686 69.7403 33.4972C70.095 34.0352 70.7399 34.3069 71.3728 34.1855C72.5821 33.9521 74.5838 33.5684 75.979 33.2994C76.8441 33.1332 77.6801 33.7003 77.8463 34.564C78.1153 35.9592 78.5003 37.9622 78.7324 39.1715C78.8537 39.8044 79.3456 40.3016 79.9772 40.4321C81.1838 40.68 83.1803 41.0902 84.5715 41.3763C85.4353 41.5543 85.9904 42.397 85.8124 43.2594C85.5276 44.6519 85.1161 46.6484 84.8682 47.855C84.739 48.4866 85.0027 49.1341 85.5368 49.4954C86.5561 50.1864 88.2441 51.3297 89.419 52.1275C90.1482 52.6207 90.3394 53.6124 89.8449 54.3416C89.0484 55.5178 87.9052 57.2058 87.2142 58.2251C86.8528 58.7592 86.8489 59.4594 87.2036 59.9974C87.8814 61.026 89.0023 62.7284 89.7843 63.9139C90.2696 64.6497 90.0652 65.6387 89.3306 66.124C88.1438 66.9047 86.4414 68.0269 85.4128 68.7047C84.8748 69.0594 84.6032 69.7042 84.7245 70.3372C84.9579 71.5464 85.3416 73.5482 85.6106 74.9433C85.7768 75.8084 85.2098 76.6444 84.3447 76.8106C82.9509 77.0796 80.9478 77.4647 79.7386 77.6968C79.1056 77.8181 78.6084 78.3099 78.4779 78.9416C78.23 80.1482 77.8199 82.1447 77.5337 83.5359C77.3557 84.3996 76.5131 84.9548 75.6506 84.7781C74.2581 84.4919 72.2616 84.0805 71.055 83.8326C70.4234 83.7033 69.7759 83.9671 69.4146 84.5011C68.7236 85.5205 67.5803 87.2084 66.7825 88.3847C66.2893 89.1139 65.2977 89.3038 64.5684 88.8106C63.3922 88.0128 61.7043 86.8695 60.6849 86.1785C60.1509 85.8172 59.4506 85.8132 58.9126 86.168C57.8841 86.8458 56.1816 87.9666 54.9961 88.7486C54.2603 89.2339 53.2713 89.0295 52.786 88.295C52.0054 87.1082 50.8832 85.4058 50.2054 84.3785C49.8506 83.8392 49.2058 83.5675 48.5728 83.6888C47.3636 83.9222 45.3619 84.3073 43.9667 84.575C43.1016 84.7411 42.2656 84.1754 42.0994 83.3104C41.8304 81.9152 41.4454 79.9135 41.2133 78.7042C41.092 78.0699 40.6001 77.5728 39.9685 77.4422C38.7619 77.1943 36.7654 76.7842 35.3742 76.4981C34.5104 76.3201 33.9553 75.4774 34.132 74.615C34.4181 73.2238 34.8296 71.226 35.0775 70.0194C35.2067 69.3877 34.943 68.7403 34.4089 68.3789C33.3896 67.688 31.7016 66.5447 30.5254 65.7482C29.7961 65.2537 29.6063 64.262 30.0994 63.5328C30.8972 62.3565 32.0405 60.6686 32.7315 59.6493C33.0928 59.1152 33.0968 58.4163 32.7421 57.877C32.0643 56.8484 30.9434 55.146 30.1614 53.9605C29.6761 53.2247 29.8805 52.2357 30.615 51.7504C31.8019 50.9697 33.5043 49.8475 34.5315 49.1697C35.0709 48.815 35.3425 48.1702 35.2212 47.5372C34.9878 46.328 34.6027 44.3262 34.335 42.931C34.1689 42.066 34.7346 41.2299 35.5997 41.0638C36.9948 40.7948 38.9966 40.4097 40.2058 40.1776C40.8401 40.0563 41.3372 39.5644 41.4678 38.9328C41.7157 37.7262 42.1258 35.7297 42.412 34.3385C42.59 33.4748 43.4326 32.9196 44.295 33.0976C45.6862 33.3825 47.6841 33.7939 48.8906 34.0418C49.5223 34.171 50.1698 33.9073 50.5311 33.3732C51.2221 32.3539 52.3654 30.666 53.1619 29.491C53.6564 28.7618 54.648 28.5706 55.3772 29.0651C56.5535 29.8616 58.2414 31.0049 59.2608 31.6959C59.7948 32.0572 60.4937 32.0611 61.0331 31.7064C62.0616 31.0286 63.7641 29.9077 64.9495 29.1258ZM59.9728 37.8976C71.5851 37.8976 81.0124 47.3249 81.0124 58.9372C81.0124 70.5495 71.5851 79.9767 59.9728 79.9767C48.3605 79.9767 38.9333 70.5495 38.9333 58.9372C38.9333 47.3249 48.3605 37.8976 59.9728 37.8976Z"
                fill="#EA802A"
              />
            </svg>
            Travail de qualité
          </div>
        </div>
      </div>
    </div>
  );
}