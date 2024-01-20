import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoStackoverflow } from "react-icons/io5";
import { SiMaildotru } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import coreTheme from "../data/theme_data";
import userData from "../data/user_data";
import { useRootContext } from "../services/context_provider";
import commonComponents from "./commons/CustomMui";
import styles from "./commons/styles";
const { AppTooltip } = commonComponents;

export default function Socials() {
  const [isCopied, setIsCopied] = useState(false);
  const { size, palette } = useRootContext();

  //open url in new tab
  const onUrl = (url: string) => {
    window.open(url, "_blank");
  };

  //on mail click
  const onMailClick = () => {
    if (size.mobile) {
      onUrl(userData.links.mailTo);
      return;
    }
    if (isCopied) {
      onUrl(userData.links.mailTo);
      return;
    } else {
      navigator.clipboard.writeText(userData.email);
      setIsCopied(true);
    }
  };

  //get user name from url path
  const getUserName = (url: string): string => {
    const urlArr = url.split("/");
    return urlArr[urlArr.length - 1];
  };

  //get tool tip text
  const getToolTipText = (url: string, domain: string): string => {
    const userName = getUserName(url);
    return domain + "/" + userName;
  };

  return (
    <Box sx={styles.row}>
      <AppTooltip
        title={isCopied ? "Copied! click again to open" : userData.email}
        onClose={() => {
          setIsCopied(false);
        }}
      >
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onMailClick()}
        >
          <SiMaildotru />
        </Box>
      </AppTooltip>
      <AppTooltip title={getToolTipText(userData.links.github, "github")}>
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.github)}
        >
          <VscGithubInverted />
        </Box>
      </AppTooltip>
      <AppTooltip title={getToolTipText(userData.links.linkedIn, "linkedin")}>
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.linkedIn)}
        >
          <FaLinkedin />
        </Box>
      </AppTooltip>

      <AppTooltip
        title={getToolTipText(userData.links.stackOverflow, "stackoverflow")}
      >
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.stackOverflow)}
        >
          <IoLogoStackoverflow />
        </Box>
      </AppTooltip>
    </Box>
  );
}

const iconStyles: React.CSSProperties = {
  fontSize: coreTheme.icons.medium,
  color: "white",
  cursor: "pointer",
  padding: "0px",
  margin: "0px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "35px",
  width: "35px",
};

const iconStylesHover: SxProps = () => {
  return {
    "&:hover": {
      borderRadius: "50%",
      transition: "all 0.3s ease-in-out",
      color: "black",
    },
  };
};
