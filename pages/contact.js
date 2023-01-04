import styles from "../styles/components/contact/contact.module.scss";
import portrait from "/public/assets/photos/portrait.jpg";
import Image from "next/image";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Contactez-moi pour toute demande de renseignements, conseils ou pour obtenir un devis gratuit !"
        />

        <title>Contact - Rambeau Multiservices</title>
      </Head>
      <div className={`container`}>
        <h2 className={styles.h2}>Demande de devis - Contact</h2>
        <div className={styles.contactTop}>
          <div className={styles.contactInfoContainer}>
            <Image
              className={styles.portrait}
              src={portrait}
              alt="Samuel Faudan"
            />

            <div className={styles.contactInfo}>
              <p>Entreprise RAMBEAU MULTISERVICES</p>
              <p>Tél : 03.85.74.91.36</p>
              <p>Mail : contact@rambeau-multiservices.fr</p>
            </div>
          </div>
          <svg
            width="435"
            height="259"
            viewBox="0 0 435 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logo}
          >
            <g clipPath="url(#clip0_523_933)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M386.367 183.961C386.367 171.892 376.553 162.094 364.467 162.094H21.8993C9.81217 162.094 -0.000976562 171.892 -0.000976562 183.961C-0.000976562 196.03 9.81217 205.828 21.8993 205.828H364.467C376.553 205.828 386.367 196.03 386.367 183.961V183.961ZM381.53 183.961C381.53 193.364 373.884 200.998 364.467 200.998H21.8993C12.4817 200.998 4.83594 193.364 4.83594 183.961C4.83594 174.558 12.4817 166.924 21.8993 166.924H364.467C373.884 166.924 381.53 174.558 381.53 183.961Z"
                fill="gray"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M226.538 72.0779C225.67 72.6844 225.297 73.7828 225.615 74.7911C225.934 75.7998 226.871 76.4855 227.93 76.4855H263.806C264.304 76.4855 264.79 76.3325 265.197 76.0474L330.398 30.4634L409.426 85.7136V203.783C409.426 210.791 415.122 216.481 422.14 216.481C429.159 216.481 434.857 210.791 434.857 203.783V73.7577C434.857 72.9672 434.471 72.2264 433.822 71.7729L331.79 0.438129C330.954 -0.146043 329.842 -0.146043 329.006 0.438129L226.538 72.0779V72.0779ZM235.626 71.6397L330.398 5.38062L430.004 75.019C430.004 88.402 430.004 203.783 430.004 203.783C430.004 208.117 426.481 211.635 422.14 211.635C417.801 211.635 414.279 208.117 414.279 203.783V84.4523C414.279 83.6618 413.893 82.9211 413.244 82.4676L331.79 25.5209C330.954 24.9367 329.842 24.9367 329.006 25.5209L263.04 71.6397H235.626V71.6397Z"
                fill="gray"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M387.924 223.773C387.924 223.773 387.924 223.773 387.924 223.773C384.715 223.807 372.129 223.115 363.416 221.331C360.178 220.668 357.5 219.992 356.401 218.955C352.86 215.616 349.17 214.659 347.206 214.135C347.205 214.135 347.205 214.135 347.204 214.135C344.958 213.538 342.503 214.608 341.748 216.361C341.267 217.478 341.166 219.175 342.884 221.177C342.884 221.178 342.885 221.178 342.885 221.178C344.873 223.493 347.478 224.508 350.288 230C350.288 230 350.288 230 350.288 230C352.615 234.546 361.72 246.652 379.929 255.562C391.053 261.005 405.362 259.308 415.823 254.857C423.158 251.735 428.539 247.182 430.089 243.005C432.338 236.943 432.864 229.443 431.371 223.39C430.287 218.995 428.128 215.358 424.972 213.294C423.466 212.309 421.597 211.94 419.425 212.158C416.883 212.413 413.824 213.511 410.522 215.007C406.016 217.048 400.987 219.828 396.186 221.738C393.268 222.899 390.452 223.746 387.924 223.773V223.773ZM347.891 219.384C349.388 219.896 351.26 220.772 353.068 222.478C353.068 222.478 353.069 222.478 353.069 222.478C354.56 223.884 358.052 225.179 362.441 226.078C371.519 227.937 384.632 228.654 387.975 228.618C395.227 228.542 404.668 222.98 412.527 219.42C414.857 218.365 417.03 217.504 418.937 217.127C420.276 216.863 421.439 216.775 422.311 217.346C422.311 217.347 422.312 217.347 422.312 217.347C424.533 218.8 425.896 221.456 426.659 224.548C427.936 229.725 427.461 236.138 425.538 241.322C424.306 244.642 419.751 247.918 413.92 250.399C404.635 254.35 391.939 256.042 382.065 251.211C365.277 242.997 356.755 231.986 354.61 227.795C352.115 222.92 349.829 221.204 347.891 219.384V219.384Z"
                fill="gray"
              />
              <path
                d="M45.6482 154.899L29.5957 133.068C31.6364 132.711 33.528 132.1 35.2701 131.234C37.0122 130.368 38.5179 129.285 39.7872 127.986C41.0564 126.687 42.0395 125.158 42.7364 123.4C43.4333 121.643 43.7816 119.643 43.7816 117.402C43.7816 115.007 43.3337 112.829 42.4378 110.867C41.5418 108.906 40.2725 107.225 38.63 105.824C36.9873 104.422 35.0088 103.34 32.6941 102.575C30.3795 101.811 27.7788 101.429 24.8917 101.429H2.41797V154.899H8.31653V134.122H23.2492L38.4058 154.899H45.6482V154.899ZM37.8832 117.66C37.8832 119.397 37.5466 120.956 36.8729 122.336C36.1994 123.716 35.2637 124.878 34.0662 125.823C32.8684 126.769 31.446 127.497 29.7991 128.008C28.1522 128.519 26.3558 128.775 24.4101 128.775H8.31653V107.005H24.4846C28.7265 107.005 32.0199 107.938 34.3652 109.803C36.7106 111.668 37.8832 114.287 37.8832 117.66V117.66Z"
                fill="gray"
              />
              <path
                d="M81.2627 101.047H75.7377L51.9199 154.899H57.9677L64.1647 140.767H92.6117L98.734 154.899H105.08L81.2627 101.047ZM90.297 135.42H66.4794L78.4256 108.151L90.297 135.42Z"
                fill="gray"
              />
              <path
                d="M159.51 111.588V154.899H165.408V101.429H159.435L140.396 130.608L121.357 101.429H115.384V154.899H121.133V111.665L140.172 140.233H140.471L159.51 111.588V111.588Z"
                fill="gray"
              />
              <path
                d="M202.4 101.429H180.192V154.899H203.372C206.204 154.899 208.787 154.568 211.123 153.906C213.458 153.244 215.458 152.289 217.123 151.041C218.787 149.793 220.067 148.253 220.961 146.42C221.855 144.586 222.303 142.524 222.303 140.233C222.303 138.399 222.005 136.77 221.408 135.344C220.812 133.918 220.017 132.696 219.023 131.677C218.029 130.659 216.849 129.781 215.482 129.042C214.116 128.304 212.663 127.705 211.123 127.247C212.166 126.789 213.171 126.216 214.14 125.528C215.108 124.841 215.989 123.988 216.784 122.97C217.578 121.951 218.212 120.78 218.683 119.456C219.155 118.132 219.391 116.579 219.391 114.796C219.391 112.759 218.993 110.913 218.198 109.258C217.404 107.603 216.261 106.203 214.77 105.057C213.28 103.911 211.491 103.02 209.405 102.384C207.318 101.747 204.983 101.429 202.4 101.429V101.429ZM201.504 125.261H186.091V106.776H201.951C205.674 106.776 208.528 107.568 210.514 109.153C212.5 110.738 213.492 112.886 213.492 115.597C213.492 118.767 212.375 121.17 210.142 122.807C207.908 124.443 205.029 125.261 201.504 125.261V125.261ZM203.594 149.552H186.091V130.608H202.55C207.119 130.608 210.57 131.413 212.904 133.024C215.237 134.634 216.404 136.922 216.404 139.888C216.404 142.956 215.262 145.334 212.978 147.021C210.693 148.708 207.566 149.552 203.594 149.552Z"
                fill="gray"
              />
              <path
                d="M271.879 101.429H234.1V154.899H272.253V149.399H239.998V130.684H268.519V125.185H239.998V106.929H271.879V101.429V101.429Z"
                fill="gray"
              />
              <path
                d="M308.987 101.047H303.462L279.645 154.899H285.692L291.889 140.767H320.336L326.459 154.899H332.805L308.987 101.047ZM318.022 135.42H294.204L306.15 108.151L318.022 135.42Z"
                fill="gray"
              />
              <path
                d="M383.95 101.429H378.051V132.518C378.051 138.374 376.633 142.779 373.796 145.732C370.958 148.686 367.126 150.163 362.297 150.163C357.27 150.163 353.35 148.61 350.538 145.503C347.726 142.397 346.319 137.941 346.319 132.136V101.429H340.421V132.518C340.421 136.286 340.944 139.621 341.989 142.524C343.034 145.427 344.515 147.858 346.431 149.819C348.348 151.779 350.637 153.256 353.3 154.249C355.963 155.242 358.913 155.739 362.148 155.739C365.433 155.739 368.407 155.242 371.07 154.249C373.733 153.256 376.023 151.767 377.939 149.781C379.856 147.795 381.337 145.325 382.382 142.371C383.427 139.418 383.95 135.98 383.95 132.059V101.429V101.429Z"
                fill="gray"
              />
              <path
                d="M73.8574 194.208H78.2646L81.7562 180.916L84.9614 189.582H85.076L92.9174 180.828L89.426 194.208H93.8906L99.2708 173.714H94.1768L86.7071 182.38L83.8166 173.714H79.2376L73.8574 194.208V194.208Z"
                fill="gray"
              />
              <path
                d="M108.171 194.53C109.659 194.53 110.962 194.32 112.078 193.901C113.194 193.481 114.162 192.852 114.982 192.012C116.356 190.607 117.386 188.577 118.073 185.923L121.278 173.714H116.871L113.838 185.278C113.418 186.918 112.769 188.187 111.891 189.085C111.014 189.943 109.926 190.373 108.629 190.373C107.484 190.373 106.616 190.061 106.025 189.436C105.433 188.811 105.137 187.992 105.137 186.977C105.137 186.547 105.166 186.157 105.223 185.806C105.281 185.454 105.357 185.103 105.452 184.752L108.343 173.714H103.935L101.16 184.342C101.007 184.908 100.888 185.469 100.802 186.025C100.716 186.581 100.673 187.113 100.673 187.621C100.673 188.714 100.845 189.69 101.188 190.548C101.531 191.407 102.028 192.13 102.676 192.715C103.325 193.301 104.112 193.75 105.037 194.062C105.963 194.374 107.007 194.53 108.171 194.53V194.53Z"
                fill="gray"
              />
              <path
                d="M120.563 194.208H134.959L136.046 190.109H126.058L130.351 173.714H125.944L120.563 194.208V194.208Z"
                fill="gray"
              />
              <path
                d="M142.686 194.208H147.093L151.386 177.871H157.482L158.569 173.714H141.97L140.883 177.871H146.979L142.686 194.208V194.208Z"
                fill="gray"
              />
              <path
                d="M156.423 194.208H160.83L166.211 173.714H161.803L156.423 194.208Z"
                fill="gray"
              />
              <path
                d="M173.938 194.501C174.987 194.501 175.993 194.35 176.957 194.047C177.92 193.745 178.765 193.301 179.49 192.715C180.215 192.13 180.797 191.412 181.236 190.563C181.674 189.714 181.894 188.753 181.894 187.679C181.894 186.938 181.77 186.284 181.522 185.718C181.274 185.152 180.935 184.654 180.506 184.225C180.076 183.795 179.571 183.414 178.989 183.083C178.407 182.751 177.773 182.439 177.086 182.146C176.399 181.853 175.831 181.599 175.383 181.385C174.935 181.17 174.577 180.965 174.31 180.77C174.043 180.575 173.852 180.375 173.737 180.17C173.623 179.965 173.566 179.725 173.566 179.452C173.566 178.945 173.818 178.472 174.324 178.032C174.83 177.593 175.55 177.374 176.485 177.374C177.458 177.374 178.312 177.559 179.046 177.93C179.781 178.301 180.53 178.847 181.293 179.569L184.326 176.466C183.468 175.529 182.438 174.787 181.236 174.241C180.034 173.694 178.564 173.421 176.828 173.421C175.76 173.421 174.744 173.577 173.78 173.89C172.817 174.202 171.972 174.651 171.247 175.236C170.522 175.822 169.945 176.529 169.516 177.359C169.087 178.189 168.872 179.13 168.872 180.184C168.872 180.945 169.006 181.609 169.273 182.175C169.54 182.741 169.902 183.244 170.36 183.683C170.818 184.122 171.343 184.503 171.934 184.825C172.526 185.147 173.146 185.445 173.795 185.718C174.462 185.991 175.016 186.24 175.454 186.464C175.893 186.689 176.241 186.903 176.499 187.108C176.757 187.313 176.938 187.518 177.043 187.723C177.148 187.928 177.2 188.158 177.2 188.411C177.2 189.055 176.914 189.573 176.342 189.963C175.769 190.353 175.035 190.548 174.138 190.548C172.993 190.548 171.972 190.319 171.076 189.861C170.179 189.402 169.33 188.733 168.529 187.855L165.209 190.724C167.117 193.242 170.026 194.501 173.938 194.501Z"
                fill="gray"
              />
              <path
                d="M184.04 194.208H199.151L200.21 190.197H189.449L190.594 185.864H199.895L200.954 181.912H191.653L192.74 177.725H203.329L204.388 173.714H189.42L184.04 194.208V194.208Z"
                fill="gray"
              />
              <path
                d="M203.071 194.208H207.479L209.196 187.65H212.487L215.578 194.208H220.586L217.18 187.211C219.317 186.703 220.93 185.82 222.017 184.561C223.105 183.302 223.648 181.746 223.648 179.892C223.648 178.193 223.133 176.817 222.103 175.763C221.435 175.08 220.581 174.568 219.542 174.226C218.502 173.885 217.238 173.714 215.749 173.714H208.452L203.071 194.208V194.208ZM210.255 183.639L211.8 177.783H215.492C216.885 177.783 217.858 178.065 218.411 178.628C218.831 179.056 219.041 179.599 219.041 180.26C219.041 180.823 218.917 181.313 218.669 181.731C218.421 182.148 218.077 182.498 217.638 182.78C217.199 183.061 216.684 183.275 216.093 183.421C215.501 183.566 214.862 183.639 214.175 183.639H210.255Z"
                fill="gray"
              />
              <path
                d="M229.717 194.355H233.609L247.031 173.714H242.08L233.208 188.001L231.834 173.714H227.112L229.717 194.355V194.355Z"
                fill="gray"
              />
              <path
                d="M244.799 194.208H249.206L254.586 173.714H250.179L244.799 194.208Z"
                fill="gray"
              />
              <path
                d="M265.205 194.56C266.884 194.56 268.324 194.267 269.526 193.681C270.728 193.096 271.816 192.344 272.789 191.427L269.927 188.382C269.183 189.007 268.458 189.499 267.752 189.861C267.046 190.222 266.206 190.402 265.233 190.402C264.508 190.402 263.85 190.285 263.259 190.051C262.667 189.817 262.152 189.48 261.713 189.041C261.274 188.602 260.936 188.079 260.697 187.474C260.459 186.869 260.339 186.196 260.339 185.454C260.339 184.361 260.535 183.332 260.926 182.365C261.317 181.399 261.842 180.56 262.5 179.847C263.158 179.135 263.912 178.569 264.761 178.15C265.61 177.73 266.492 177.52 267.408 177.52C268.61 177.52 269.583 177.774 270.327 178.281C271.071 178.789 271.739 179.472 272.331 180.331L275.965 177.725C275.164 176.378 274.11 175.314 272.803 174.534C271.496 173.753 269.879 173.363 267.952 173.363C266.254 173.363 264.666 173.694 263.187 174.358C261.708 175.021 260.423 175.919 259.332 177.052C258.24 178.184 257.377 179.486 256.742 180.96C256.106 182.434 255.789 183.99 255.789 185.63C255.789 186.996 256.021 188.231 256.486 189.334C256.95 190.436 257.6 191.373 258.434 192.144C259.268 192.915 260.262 193.51 261.415 193.93C262.568 194.35 263.831 194.56 265.205 194.56V194.56Z"
                fill="gray"
              />
              <path
                d="M274.991 194.208H290.102L291.161 190.197H280.4L281.545 185.864H290.846L291.905 181.912H282.604L283.691 177.725H294.28L295.339 173.714H280.371L274.991 194.208V194.208Z"
                fill="gray"
              />
              <path
                d="M302.121 194.501C303.171 194.501 304.177 194.35 305.141 194.047C306.104 193.745 306.948 193.301 307.673 192.715C308.398 192.13 308.98 191.412 309.419 190.563C309.858 189.714 310.077 188.753 310.077 187.679C310.077 186.938 309.953 186.284 309.705 185.718C309.457 185.152 309.119 184.654 308.689 184.225C308.26 183.795 307.755 183.414 307.173 183.083C306.591 182.751 305.956 182.439 305.269 182.146C304.582 181.853 304.015 181.599 303.567 181.385C303.118 181.17 302.76 180.965 302.493 180.77C302.226 180.575 302.035 180.375 301.921 180.17C301.807 179.965 301.749 179.725 301.749 179.452C301.749 178.945 302.002 178.472 302.508 178.032C303.013 177.593 303.734 177.374 304.668 177.374C305.641 177.374 306.495 177.559 307.23 177.93C307.964 178.301 308.713 178.847 309.476 179.569L312.51 176.466C311.651 175.529 310.621 174.787 309.419 174.241C308.217 173.694 306.748 173.421 305.012 173.421C303.943 173.421 302.927 173.577 301.964 173.89C301 174.202 300.156 174.651 299.431 175.236C298.706 175.822 298.129 176.529 297.7 177.359C297.27 178.189 297.056 179.13 297.056 180.184C297.056 180.945 297.189 181.609 297.456 182.175C297.724 182.741 298.086 183.244 298.544 183.683C299.002 184.122 299.526 184.503 300.118 184.825C300.709 185.147 301.33 185.445 301.978 185.718C302.646 185.991 303.199 186.24 303.638 186.464C304.077 186.689 304.425 186.903 304.683 187.108C304.94 187.313 305.122 187.518 305.226 187.723C305.331 187.928 305.384 188.158 305.384 188.411C305.384 189.055 305.098 189.573 304.525 189.963C303.953 190.353 303.218 190.548 302.322 190.548C301.177 190.548 300.156 190.319 299.259 189.861C298.363 189.402 297.514 188.733 296.712 187.855L293.393 190.724C295.3 193.242 298.21 194.501 302.121 194.501V194.501Z"
                fill="gray"
              />
              <path
                d="M330.174 21.2776C332.899 21.2776 335.109 19.0716 335.109 16.3505C335.109 13.6293 332.899 11.4233 330.174 11.4233C327.449 11.4233 325.239 13.6293 325.239 16.3505C325.239 19.0716 327.449 21.2776 330.174 21.2776Z"
                fill="gray"
              />
              <path
                d="M421.218 84.6826C423.943 84.6826 426.152 82.4767 426.152 79.7555C426.152 77.0343 423.943 74.8284 421.218 74.8284C418.493 74.8284 416.283 77.0343 416.283 79.7555C416.283 82.4767 418.493 84.6826 421.218 84.6826Z"
                fill="gray"
              />
              <path
                d="M364.077 192.263C368.877 192.263 372.768 188.546 372.768 183.961C372.768 179.376 368.877 175.659 364.077 175.659C359.277 175.659 355.386 179.376 355.386 183.961C355.386 188.546 359.277 192.263 364.077 192.263Z"
                fill="gray"
              />
              <path
                d="M22.2605 192.263C27.0605 192.263 30.9516 188.546 30.9516 183.961C30.9516 179.376 27.0605 175.659 22.2605 175.659C17.4605 175.659 13.5693 179.376 13.5693 183.961C13.5693 188.546 17.4605 192.263 22.2605 192.263Z"
                fill="gray"
              />
            </g>
            <defs>
              <clipPath id="clip0_523_933">
                <rect width="435" height="259" fill="gray" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>
          Contactez-moi pour toute demande de renseignements, conseils ou pour
          obtenir un devis gratuit !
        </p>
        <form className={styles.form}>
          <label>
            Votre nom
            <input className={styles.formInput} type="text" />
          </label>
          <label>
            Votre numéro de téléphone
            <input className={styles.formInput} type="text" />
          </label>
          <label>
            Votre email
            <input className={styles.formInput} type="text" />
          </label>
          <label>
            Prestation à réaliser
            <input className={styles.formInput} type="text" />
          </label>
          <label>
            Votre message
            <textarea
              className={`${styles.formInput} ${styles.formTextarea}`}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <button className={styles.formButton} type="submit">
            Envoyer
          </button>
        </form>
      </div>
      <div className={styles.mapImage}>
        <Image
          src="/assets/photos/mapimage.jpg"
          alt="Carte de la zone d'activité de Rambeau Multiservices"
          fill
        />
      </div>
    </>
  );
}
