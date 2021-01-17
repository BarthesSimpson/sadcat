import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sad Cat Eats Emily (A Portfolio)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/EmCat2.png"
          alt="A sad cat eating the late Emily"
          layout="fill"
          style={{ objectFit: "cover" }}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
