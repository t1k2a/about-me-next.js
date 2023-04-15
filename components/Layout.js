import Head from "next/head";
import styles from "./layout.module.css"
import Link from "next/link";

export const siteTitle = "Next.js blog"

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
                                <a href="https://twitter.com/George23767665" target="_blank">
                                    <img src="images/icon_tw.png" width="30" height="30" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100009791496155" target="_blank">
                                    <img src="images/icon_fb.png" width="30" height="30" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/george_onepiece_naruto/" target="_blank">
                                    <img src="images/icon_ig.png" width="30" height="30" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.wantedly.com/users/103094284" target="_blank">
                                    <img src="images/icon_wa.png" width="30" height="30" />
                                </a>
                            </li>
                        </ul>
                        <img src="/images/mv.png" />
                    </>
                ) : (
                    <>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href='/'>← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export async function getStaticProps(ctx){


    return {
        props:{
            data:null
        }
    }
}

export default Layout;