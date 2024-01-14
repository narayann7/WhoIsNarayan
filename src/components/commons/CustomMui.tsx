import styled from "@emotion/styled";
import {
  Fade,
  Tooltip,
  TooltipProps,
  Typography,
  tooltipClasses,
} from "@mui/material";
import coreTheme from "../../data/theme_data";
import styles from "./styles";

const AppTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    placement="bottom"
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: coreTheme.colors.secondaryBackground,
    color: "white",
    padding: "6px",
    fontSize: "12px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  ...styles.baseText,
}));

export default {
  AppTooltip,
  Text,
};
