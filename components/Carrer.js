import styles from "./layout.module.css"
import utilStyle from '../styles/utils.module.css'

function Carrer() {
    return (
        <div className={styles.container}>
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
                <h2>体調面</h2>
                <p>
                １度精神疾患を患ってからは体調を崩すことなく、働けております
                </p>      
        </section>
        </div>
        
    );
}

export default Carrer;