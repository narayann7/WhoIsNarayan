import SizedBox from "./commons/SizedBox";
import styles from "./commons/styles";

export default function Footer() {
  return (
    <div style={{ ...styles.row, position: "fixed", bottom: "0" }}>
      <h1>About</h1>
      <SizedBox width={"40px"} />
      <h1>Work</h1>
      <SizedBox width={"40px"} />
      <h1>Connect</h1>
    </div>
  );
}
