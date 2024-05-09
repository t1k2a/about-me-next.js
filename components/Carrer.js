import styles from "./layout.module.css";
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
  {
    title: "広告系ベンチャー企業2",
    content: "Webページ制作部隊のリードエンジニアを担当",
  },
  {
    title: "フリーランス",
    content: "現在はCake→Laravelへのリプレイスを担当",
  },
];

const listCommonStyle = {
  marginBottom: "20px",
  paddingLeft: "30px",
  position: "relative",
};

function Carrer() {
  console.log(carrerList);
  return (
    <div className={styles.container}>
      <section>
        <h2>これまでの経歴</h2>
        <ul style={{ listStyle: "none", padding: "0", width: "50%" }}>
          {carrerList.map((carrer, index) => (
            
            const listConditionalStyle =
              index === 2
                ? [
                    display => "flex",
                    flexDirection => "row",
                ]
                : [];

            const finalListStyle = [
              ...listCommonStyle,
              ...listConditionalStyle,
            ];

            <li
              style={{
                marginBottom: "20px",
                paddingLeft: "30px",
                position: "relative",
              }}
            >
              <div
                style={{
                  content: "",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "0",
                  top: "10px",
                }}
              ></div>
              <h3 style={{ fontSize: "16px", margin: "0", fontWeight: "bold" }}>
                {carrer.title}
              </h3>
              <hr
                style={{
                  border: "none",
                  height: "1px",
                  backgroundColor: "black",
                  margin: "5px 0",
                }}
              />
              <p style={{ margin: "0", fontSize: "14px" }}>{carrer.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Carrer;
