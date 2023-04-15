import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Carrer from '../components/Carrer'
import Posts from '../components/Posts'
import Works from '../components/Works'

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
    <Carrer></Carrer>
    <Posts allPostsData={allPostsData}></Posts>
    <Works></Works>
  </Layout>
  
}
