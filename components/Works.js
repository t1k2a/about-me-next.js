import React from 'react'

import styles from '../styles/Home.module.css'
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
        </div>
        
      </section>
    )
}


export default Works;