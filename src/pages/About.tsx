import Profile from "../components/Profile";
import styles from "../components/commons/styles";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import commonMuiComponents from "../components/commons/CustomMui";
import SizedBox from "../components/commons/SizedBox";
import userData from "../data/user_data";

const { Text } = commonMuiComponents;

export default function About() {
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    var hash = location.hash;
    if (hash !== "") {
      const element = document.getElementById(hash.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div
      style={{
        ...styles.pageContent,
        justifyContent: "start",
      }}
    >
      <div>
        <SizedBox height="25vh" />
        <Profile />
        <SizedBox height="40px" />
        <Text
          style={{
            fontSize: "20px",
            paddingLeft: "10px",
            letterSpacing: "1px",
            lineHeight: "1.5",
            fontFamily: "Sen",
          }}
        >
          {userData.aboutMe[0]}
        </Text>
      </div>
    </div>
  );
}
