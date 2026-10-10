import Head from 'next/head';
import { fetchQiitaItems } from '../lib/qiita.mjs';
import Layout, { siteTitle } from '../components/Layout';
import Carrer from '../components/Carrer';
import Posts from '../components/Posts';
import Works from '../components/Works';


// SSGの場合
export async function getStaticProps() {
  const { items: allPostsData, unavailable: qiitaUnavailable } = await fetchQiitaItems();

  return {
    props: {
      allPostsData,
      qiitaUnavailable,
    },
    revalidate: qiitaUnavailable ? 60 : 86400, // 24時間ごとに再生成
  };
}

export default function Home({ allPostsData, qiitaUnavailable }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Carrer></Carrer>
      <Posts allPostsData={allPostsData} unavailable={qiitaUnavailable}></Posts>
      <Works></Works>
    </Layout>
  );
}
