import styles from '../styles/Home.module.css'
import utilStyle from '../styles/utils.module.css'
import Date from '../lib/date'
import Link from "next/link";

function Posts({ allPostsData }) {
    return (
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

        <section>
          <h2>X（旧Twitter）</h2>
          <div className={styles.grid}>
            <a class="twitter-timeline" href="https://twitter.com/t1k2a?ref_src=twsrc%5Etfw">Tweets by t1k2a</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </section>
      </section>
    )
}

export default Posts;