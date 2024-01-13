import { useNavigate } from "react-router-dom";
import SizedBox from "../components/commons/SizedBox";
import styles from "../components/commons/styles";

export default function Test() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        fontFamily: "sans-serif",
        fontWeight: 700,
      }}
    >
      <h1>🛠️ under development | check out v1 👇</h1>
      <br />
      <div style={styles.row}>
        <h1
          onClick={() => {
            window.open("https://narayann.dev", "_self");
          }}
          style={{
            cursor: "pointer",
            fontSize: "2rem",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          narayann.dev
        </h1>
        <SizedBox width="10px" />
        <h1>🚀</h1>
      </div>
      <SizedBox height="20px" />

      <div style={styles.row}>
        <h2
          onClick={() => {
            navigate("/test");
          }}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          still want to checkout?
        </h2>
        <SizedBox width="10px" />
        <h2>👀</h2>
      </div>
    </div>
  );
}
