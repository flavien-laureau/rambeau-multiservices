import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/components/layout/header.module.scss";
import logo from "/assets/logo.png";
import * as Toggle from "@radix-ui/react-toggle";

export default function Header() {
  return (
    <header>
      <div className={styles.topbar}>
        <div>
          <address>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5002 3.33333C14.0502 3.33333 8.8335 8.55 8.8335 15C8.8335 23.75 20.5002 36.6667 20.5002 36.6667C20.5002 36.6667 32.1668 23.75 32.1668 15C32.1668 8.55 26.9502 3.33333 20.5002 3.33333ZM20.5002 19.1667C18.2002 19.1667 16.3335 17.3 16.3335 15C16.3335 12.7 18.2002 10.8333 20.5002 10.8333C22.8002 10.8333 24.6668 12.7 24.6668 15C24.6668 17.3 22.8002 19.1667 20.5002 19.1667Z"
                fill="#F2F3F5"
              />
            </svg>
            <span>Ménetreuil 71470</span>
          </address>
        </div>

        <div>
          <a href="tel:+33385749136">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5333 17.9833C13.9333 22.7 17.8 26.55 22.5167 28.9667L26.1833 25.3C26.6333 24.85 27.3 24.7 27.8833 24.9C29.75 25.5167 31.7667 25.85 33.8333 25.85C34.75 25.85 35.5 26.6 35.5 27.5167V33.3333C35.5 34.25 34.75 35 33.8333 35C18.1833 35 5.5 22.3167 5.5 6.66667C5.5 5.75 6.25 5 7.16667 5H13C13.9167 5 14.6667 5.75 14.6667 6.66667C14.6667 8.75 15 10.75 15.6167 12.6167C15.8 13.2 15.6667 13.85 15.2 14.3167L11.5333 17.9833Z"
                fill="#F2F3F5"
              />
            </svg>
            <span>03.85.74.91.36</span>
          </a>
        </div>

        <div>
          <div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.75 12.336V23.5312C30.7501 24.6727 30.3134 25.7709 29.5294 26.6006C28.7455 27.4302 27.6739 27.9285 26.5343 27.9931L26.2812 28H7.71875C6.57731 28.0001 5.47911 27.5634 4.64943 26.7794C3.81975 25.9955 3.3215 24.9239 3.25688 23.7843L3.25 23.5312V12.336L16.5215 19.288C16.6691 19.3653 16.8333 19.4057 17 19.4057C17.1667 19.4057 17.3309 19.3653 17.4785 19.288L30.75 12.336ZM7.71875 6H26.2812C27.3889 5.99987 28.4572 6.41112 29.2788 7.15399C30.1004 7.89687 30.6169 8.91841 30.728 10.0205L17 17.2118L3.272 10.0205C3.37859 8.96218 3.85919 7.97659 4.62741 7.24089C5.39562 6.50519 6.40106 6.06763 7.463 6.00688L7.71875 6H26.2812H7.71875Z"
                fill="#F2F3F5"
              />
            </svg>
            <span>contact@rambeau-multiservices.fr</span>
          </div>
        </div>
      </div>

      <Toggle.Root className={styles.Toggle} aria-label="Toggle nav">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Toggle.Root>

      <nav className={styles.nav}>
        <ul className={`container`}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/#bricolage" scroll={false}>
              Bricolage
            </Link>
          </li>
          <li>
            <Link href="/location">Location avec chauffeur</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.heroBanner}>
        <div className={styles.container}>
          <Link href="/">
            <Image
              src={logo}
              className={styles.logo}
              alt="Logo Rambeau, bricolage et location"
            />
          </Link>
          <h1>
            <span>Bricolage</span>
            <span>Location et</span>
            <span>terrassement</span>
            <span>Ne vous souciez plus de vos petits travaux</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
