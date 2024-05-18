import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

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
              <li>
                <a href="https://x.com/t1k2a" target="_blank">
                  <img src="images/icon_x.png" width="30" height="30" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/t1k2a_engineer_output//"
                  target="_blank"
                >
                  <img src="images/icon_ig.png" width="30" height="30" />
                </a>
              </li>
            </ul>
            <img src="/images/mv.png" />
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
