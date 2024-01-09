import { MdAlternateEmail } from "react-icons/md";
import { RiStackOverflowLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import React from "react";
import Box from "@mui/material/Box";
import SizedBox from "../commons/SizedBox";
import { SxProps } from "@mui/material/styles";
import coreTheme from "../../data/theme_data";
import styles from "../commons/styles";

export default function Socials() {
  return (
    <Box sx={styles.row}>
      <Box style={{ ...iconStyles }} sx={iconStylesHover}>
        <MdAlternateEmail />
      </Box>
      <Box style={{ ...iconStyles }} sx={iconStylesHover}>
        <FiGithub />
      </Box>
      <Box style={{ ...iconStyles }} sx={iconStylesHover}>
        <RiStackOverflowLine />
      </Box>
      <Box style={{ ...iconStyles }} sx={iconStylesHover}>
        <GrLinkedinOption />
      </Box>
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
