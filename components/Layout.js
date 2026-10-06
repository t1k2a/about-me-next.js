import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const iconImageList = [
  { href: 'x.com/t1k2a' ,src: 'icon_x', alt: 'x' },
  { href: 'www.instagram.com/t1k2a_engineer_output/', src: 'icon_ig', alt: "instragram" },
];

export const siteTitle = "George's Portfolio Site";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <ul className={styles.snsIcons}>
              {iconImageList.map((image, index) => (
                <li key={index}>
                <a href={`https://${image.href}`} target="_blank">
                  <Image src={`/images/${image.src}.png`} alt={image.alt} width={30} height={30} />
                </a>
                </li>
              ))}
            </ul>
            <section className={styles.hero} aria-labelledby="hero-title">
              <div className={styles.heroIdentity}>
                <p className={styles.heroLabel}>WEB ENGINEER / PORTFOLIO</p>
                <h1 id="hero-title" className={styles.heroName}>GEORGE</h1>
                <p className={styles.heroRole}>システムを改善し、Webを育てる。</p>
              </div>
              <div className={styles.heroExperience}>
                <p className={styles.heroHeadline}>
                  システム改修から、<br />Web制作・保守まで。
                </p>
                <p className={styles.heroDescription}>
                  PHP / Laravelを中心としたシステム改修と、Webサイトの制作・保守運用。
                  リードエンジニアとしてのチームづくりの経験を活かし、開発と改善に取り組んでいます。
                </p>
                <ul className={styles.heroSkills} aria-label="主な経験">
                  <li>PHP / Laravel</li>
                  <li>Web制作・保守運用</li>
                  <li>チームづくり</li>
                </ul>
              </div>
            </section>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
