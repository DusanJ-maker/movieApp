import React from "react";
import styles from "../Hero/Hero.module.css"

function Hero() {
  return (
    <>
      <div className={styles.heroBackgroundImg}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroTitle}>
              <h3>Download YTS YIFY movies: HD smallest</h3>
            </div>
            <div className={styles.heroContent}>
              <h4>
                Welcome to the official Movie website. Here you can browse and
                download movies in excellent 720p, 1080p, 2160p 4K and 3D
                quality, all at the smallest file size.
              </h4>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default Hero;
