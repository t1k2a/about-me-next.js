import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import utilStyle from '../styles/utils.module.css'

function Works() {
    return (
        <section>
        <h2>WORKS</h2>
        <div  className={styles.grid}>
          <div>
            <p className={utilStyle.headingMd}>
              うつぺでぃあ（閉鎖中）
            </p>
            <img src="https://t1k2a.github.io/about_me/img/utsupedia.png"></img>
          </div>
          <div>
            <p className={utilStyle.headingMd}>エミナルグループ総合サイト</p>
            <Link href='http://eminal-group.jp/#/' target="blank">
              <Image 
                width={600}
                height={300}
                src="/images/eminal_group.png"
              />
            </Link>
          </div>
        </div>
        
      </section>
    )
}


export default Works;