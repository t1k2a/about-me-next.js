import Head from 'next/head'
import Image from 'next/image'
import fs from 'fs'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import Date from '../lib/date'

// SSGの場合
export async function getStaticProps() {
  const token = 'ed5a0d44a7c9deae592c57aff4f53a786fd21c37'
  const res = await fetch('https://qiita.com/api/v2/authenticated_user/items?per_page=100', {
      headers: {
          Authorization: `Bearer ${token}`,
      }
  })

  const allPostsData = await res.json()

  return {
    props: {
      allPostsData,
    }
  }
}

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
      <h2>投稿記事（Qiitaに飛びます）</h2>
      <div className={styles.grid}>
        {allPostsData.filter(post => post.likes_count >= 1).sort((a, b) => b.likes_count - a.likes_count).map(({id, created_at, title, url, likes_count}) => (
          <article key={id}>
            <Link href={`${url}`} className={utilStyle.boldText} target='_blank'>
                {title}
              <br />
              <small className={utilStyle.lightText}>
                <Date dateString={created_at} />
              </small>
              <br />
              <small className={utilStyle.lightText}>
                {likes_count}いいね
              </small>
            </Link>
          </article>
        ))}
      </div>
    </section>
  </Layout>
  
}
