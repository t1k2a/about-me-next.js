import styles from "./layout.module.css";
import carrerStyle from "../styles/carrer.module.css"
import utilStyle from "../styles/utils.module.css";

const carrerList = [
  {
    title: "自社開発会社",
    content: "主にCake→Laravelへのリプレイスを担当",
  },
  {
    title: "広告系ベンチャー企業",
    content: "管理画面の実装、運用を担当",
  },
  {
    title: "SES企業",
    content: "ECサイト改修や決済サービスの保守運用を担当",
  },
];

const carrerList2 = [
  {
    title: "広告系ベンチャー企業2",
    content: "美容系Webページ制作部隊のリードエンジニアを担当",
  },
  {
    title: "フリーランス",
    content: "現在はCake→Laravelへのリプレイスを担当",
  },
]

const CommonDOM = ({ title, content}) => ( 
  <article
  className={carrerStyle.listCommonStyle}>
    <h3 style={{ fontSize: "16px", margin: "0", fontWeight: "bold" }}>
      {title}
    </h3>
    <hr
      style={{
        border: "none",
        height: "1px",
        width: "90%",
        backgroundColor: "black",
        margin: "5px 0",
      }}
    />
    <p style={{ margin: "0", fontSize: "14px" }}>{content}</p>
  </article>
)

function Carrer() {
  const carrerListDOM = carrerList.map((carrer) => {
  return <CommonDOM title={carrer.title} content={carrer.content} />
  });

  const carrerListDOM2 = carrerList2.map((carrer) => {
    return <CommonDOM title={carrer.title} content={carrer.content} />
    });
    
  return (
    <div className={styles.container}>
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
