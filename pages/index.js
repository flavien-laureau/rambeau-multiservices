import Head from "next/head";
import HeroPictures from "../src/components/home/HeroPictures";
import Hook1 from "../src/components/home/Hook1";
import Hook2 from "../src/components/home/Hook2";
import Skills from "../src/components/home/Skills";
import About from "../src/components/home/About";
import HandymanService from "../src/components/home/HandymanService";
import RentalService from "../src/components/home/RentalService";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Un professionnel qualifié pour vos travaux de terrassement, assainissement et divers canalisations..."
        />
        <title>Rambeau Multiservices</title>
      </Head>
      <HeroPictures />
      <Hook1 />
      <Hook2 />
      <Skills />
      <About />
      <HandymanService />
      <RentalService />
    </>
  );
}
