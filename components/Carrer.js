import styles from "./layout.module.css";
import carrerStyle from "../styles/carrer.module.css"
import utilStyle from "../styles/utils.module.css";

const DateFormat = (startYear, startMonth, endYear, endMonth) => endYear == null && endMonth == null ? `${startYear}年${startMonth}月 ~ 現在` : `${startYear}年${startMonth}月 ~ ${endYear}年${endMonth}月`;

const carrerList = [
  {
    title: "自社開発会社",
    content: "電話予約サービスのサーバーサイド開発、ユニットテスト古くなったシステムのフローと技術を刷新(Cake→Laravel)、社内改善ツールの開発",
    date: DateFormat(2018, 4, 2019, 10)
  },
  {
    title: "広告系ベンチャー企業",
    content: "広告主の使用権限を設定する管理画面の改修",
    date: DateFormat(2019, 11, 2020, 1)
  },
  {
    title: "SES企業",
    content: "ECサイト改修や決済サービスの保守運用を担当",
    date: DateFormat(2020, 3, 2021, 6)
  },
];

const carrerList2 = [
  {
    title: "広告系ベンチャー企業2",
    content: "美容系Webページ制作部隊のリードエンジニアを担当し、クライアント企業の新規ウェブサイト製作やチームビルディング",
    date: DateFormat(2021, 8, 2023, 3)
  },
  {
    title: "（現）フリーランス",
    content: "社内システムのリプレイス(Cake→Laravel)、プロジェクト施策やシステム改善を担当",
    date: DateFormat(2023, 4)
  },
]

const CommonDOM = ({ title, content, date}) => ( 
  <article
  className={carrerStyle.listCommonStyle}>
    <h3 style={{ margin: "0", fontWeight: "bold" }}>
      {title}
    </h3>
    <small className={utilStyle.lightText}>
      {date}
    </small>
    <hr
      style={{
        border: "none",
        height: "1px",
        width: "90%",
        backgroundColor: "black",
        margin: "5px 0",
      }}
    />
    <p style={{ margin: "0", fontSize: "15px", width: "90%"}}>{content}</p>
  </article>
)

function Carrer() {
  const carrerListDOM = carrerList.map((carrer) => {
  return <CommonDOM title={carrer.title} content={carrer.content} date={carrer.date} />
  });

  const carrerListDOM2 = carrerList2.map((carrer) => {
    return <CommonDOM title={carrer.title} content={carrer.content} date={carrer.date} />
    });
    
  return (
    <div>
        <h2>これまでの経歴</h2>
      <div className={carrerStyle.divFlexStyle}>
        <div className={styles.grid}>
          {carrerListDOM}
        </div>
        <div className={styles.grid}>
          {carrerListDOM2}
        </div>
      </div>
    </div>
  );
}

export default Carrer;
