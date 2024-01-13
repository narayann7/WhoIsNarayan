import { MdAlternateEmail } from "react-icons/md";
import { RiStackOverflowLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import React from "react";
import Box from "@mui/material/Box";
import SizedBox from "../commons/SizedBox";
import { SxProps, styled } from "@mui/material/styles";
import coreTheme from "../../data/theme_data";
import styles from "../commons/styles";
import userData from "../../data/user_data";
import { Tooltip, TooltipProps, tooltipClasses } from "@mui/material";
import commonComponents from "../commons/CustomMui";
const { AppTooltip } = commonComponents;

export default function Socials() {
  //open url in new tab
  const onUrl = (url: string) => {
    window.open(url, "_blank");
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
        sx={{
          backgroundColor: "black",
        }}
        title={userData.email}
        placement="bottom"
      >
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.mailTo)}
        >
          <MdAlternateEmail className="gmail_hover" />
        </Box>
      </AppTooltip>
      <AppTooltip
        title={getToolTipText(userData.links.github, "github.com")}
        placement="bottom"
      >
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.github)}
        >
          <FiGithub className="github_hover" />
        </Box>
      </AppTooltip>
      <AppTooltip
        title={getToolTipText(userData.links.linkedIn, "linkedin.com")}
        placement="bottom"
      >
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.linkedIn)}
        >
          <GrLinkedinOption className="linkedin_hover" />
        </Box>
      </AppTooltip>

      <AppTooltip
        title={getToolTipText(
          userData.links.stackOverflow,
          "stackOverflow.com"
        )}
        placement="bottom"
      >
        <Box
          style={{ ...iconStyles }}
          sx={iconStylesHover}
          onClick={() => onUrl(userData.links.stackOverflow)}
        >
          <RiStackOverflowLine className="stackOverflow_hover" />
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
