import { MdKeyboardCommandKey } from "react-icons/md";
import commonComponents from "./commons/CustomMui";
import SizedBox from "./commons/SizedBox";
import styles from "./commons/styles";

const { Text } = commonComponents;

export default function Footer() {
  return (
    <div
      style={{
        ...styles.row,
        position: "fixed",
        bottom: "0",
        justifyContent: "right",
        width: "100vw",
        paddingBottom: "60px",
        paddingRight: "150px",
      }}
    >
      <Text className="hover-underline-animation" style={textStyles}>
        about
      </Text>
      <SizedBox width={"50px"} />
      <Text className="hover-underline-animation" style={textStyles}>
        work
      </Text>
      <SizedBox width={"50px"} />
      <Text className="hover-underline-animation" style={textStyles}>
        connect
      </Text>
      <SizedBox width={"50px"} />

      <div
        style={{
          ...styles.row,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdKeyboardCommandKey
          style={{
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
            marginRight: "5px",
            marginBottom: "5px",
          }}
        />
        <Text className="hover-underline-animation" style={{ ...textStyles }}>
          + k
        </Text>
      </div>
    </div>
  );
}

const textStyles: React.CSSProperties = {
  fontSize: "18px",
  paddingBottom: "5px",
  cursor: "pointer",
};