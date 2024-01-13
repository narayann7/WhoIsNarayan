import styled from "@emotion/styled";
import {
  Tooltip,
  TooltipProps,
  Typography,
  tooltipClasses,
} from "@mui/material";
import coreTheme from "../../data/theme_data";
import styles from "./styles";

const AppTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: coreTheme.colors.secondaryBackground,
    color: "white",
    padding: "7px",
  },
}));

export default {
  AppTooltip,
};
