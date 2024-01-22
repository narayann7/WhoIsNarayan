import baseAssets from "../assets/base_assets";
import coreTheme from "../data/theme_data";
import userData from "../data/user_data";
import commonComponents from "./commons/CustomMui";
import SizedBox from "./commons/SizedBox";
import styles from "./commons/styles";

const { Text } = commonComponents;

export default function Profile() {
  return (
    <div style={{ ...styles.row, display: "flex", alignItems: "center" }}>
      <div style={styles.row}>
        <img
          draggable="false"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src={baseAssets.images.dp}
          alt="profile pic"
        />
      </div>
      <SizedBox width="30px" />
      <div>
        <Text
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {userData.fullName}
        </Text>
        <SizedBox height="10px" />
        <div style={styles.row}>
          <Text>{userData.work[0].shortNameRole}</Text>
          <SizedBox width="8px" />
          <Text>at @</Text>
          <Text
            style={{
              cursor: "pointer",
            }}
            sx={{
              "&:hover": {
                transition: "all 0.3s ease-in-out",
                color: coreTheme.colors.primary,
              },
            }}
            onClick={() => {
              window.open(userData.work[0].url, "_blank");
            }}
          >
            {userData.work[0].companyName}
          </Text>
        </div>
      </div>
    </div>
  );
}
