// https://www.youtube.com/watch?v=8FRm_efm99o&list=PLhkjr9MPgk0xtGnRBmlpsGkn1NsPl9W1-&index=3

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-marketplace1000.png"
              width={500}
              height={500}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  MuskATears NFT Marketplaces
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                Built with{" "}
                <Link
                  className={styles.link}
                  href="https://thirdweb.com"
                  target="blank"
                >
                  thirdweb
                </Link>{" "}
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
