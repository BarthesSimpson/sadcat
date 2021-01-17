import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useLayoutEffect } from "react";

function getIsLandscape() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return width > height;
}

export default function Home() {
  const [isLandscape, setIsLandscape] = useState(false);

  useLayoutEffect(() => {
    function onWindowResize() {
      setIsLandscape(getIsLandscape());
    }
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sad Cat Eats Emily (A Portfolio)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {isLandscape ? (
          <Image
            src="/EmCat2.png"
            alt="A sad cat eating the late Emily"
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <h1>Please turn your phone sideways</h1>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
