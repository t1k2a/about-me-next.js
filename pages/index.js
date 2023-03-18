import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'


// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, titile, date, thumbnail
  return {
    props: {
      allPostsData,
    }
  }
}

//SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return <Layout home>
    <Head>
      <title>
        {siteTitle}
      </title>
    </Head>
    <section className={utilStyle.headingMd}>
      <p>自分のプロフィール文</p>
    </section>
    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id, date, title, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={thumbnail}
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={`/posts/${id}`} className={utilStyle.boldText}>
                {title}
              <br />
              <small className={utilStyle.lightText}>
                {date}
              </small>
            </Link>
          </article>
        ))}
      </div>
    </section>
  </Layout>
  
}
