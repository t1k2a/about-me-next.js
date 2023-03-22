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
    <p>こんにちは！Georgeです！</p>
    <p>現在は主にPHPやJavaScriptを使用したシステムエンジニアとして働いています！</p>
    <p>より多くの知見と経験を得るために個人開発を進めています！！</p>
    <p>何卒よろしくお願いします！！！</p> 
    </section>
    <section>
      <h2>これまでの経歴</h2>
      <ul>
        <li>
          2018年卒として大規模な自社開発会社に入社
        </li>
        <li>
          開発者としてゴリゴリコードを書きたいと考え、ベンチャー企業に転職
        </li>
        <li>
          精神疾患に陥り、そのまま退職、知人の企業にSESとして入社
        </li>
        <li>
          自分のプロダクトを持ちたいと考え、現職に転職
        </li>
        <li>
          現職でリード経験を経て改めて実装者として開発経験を増やしたいと考え、フリーランスへの転向を決意
        </li>
      </ul>
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
