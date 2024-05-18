import styles from '../styles/Home.module.css';
import utilStyle from '../styles/utils.module.css';
import Date from '../lib/date';
import Link from 'next/link';

function Posts({ allPostsData }) {
  return (
    <section>
      <h2>投稿記事（Qiitaに飛びます）</h2>
      <div className={styles.grid}>
        {allPostsData
          .sort((a, b) => b.likes_count - a.likes_count)
          .map(({ id, created_at, title, url, likes_count }) => (
            <article key={id}>
              <Link
                href={`${url}`}
                className={utilStyle.boldText}
                target="_blank"
              >
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
        <Link
          style={{ textDecoration: 'underline' }}
          href={`https://qiita.com/t1k2a`}
          target="_blank"
        >
          投稿記事をもっと見る
        </Link>
      </div>
    </section>
  );
}

export default Posts;
