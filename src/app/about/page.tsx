import Image from "next/image";
import styles from "./about.module.css";

export default function AboutUs() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/images/wg_logo.png" 
          alt="Luxury Car Showroom"        
          layout="fill"
          objectFit="cover"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>
            Sobre <span className={styles.heroHighlight}>West Garage</span>
          </h1>
          <p>Redefinindo a experiência automotiva de luxo desde 2010</p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Nossa História */}
        <section className={styles.storySection}>
          <div className={styles.storyText}>
            <h2>Nossa História</h2>
            <p>
              Fundada em 2010, a West Garage começou com uma visão simples:
              criar uma experiência automotiva premium que vai além do modelo tradicional de concessionária.
            </p>
            <p>
              O que começou como um pequeno showroom com apenas cinco veículos
              cresceu para se tornar uma das concessionárias de carros de luxo mais respeitadas do país.
            </p>
          </div>
          <div className={styles.storyImage}>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="West Garage Showroom"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
