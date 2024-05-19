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
            <Image src="/images/mv.png" alt='main visiual' width={1910} height={600} />
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
