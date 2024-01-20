import coreTheme from "../../data/theme_data";

type css = React.CSSProperties;
const center: css = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

//row
const row: css = {
  display: "flex",
  flexDirection: "row",
};
//center row
const centerRow: css = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};
//column
const column: css = {
  display: "flex",
  flexDirection: "column",
};

const centerColumn: css = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const left: css = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "left",
};

const right: css = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};

const maxSize: css = {
  width: "100vw",
  height: "100vh",
};

const baseText: css = {
  fontFamily: coreTheme.fonts.primary,
  fontWeight: 500,
  lineHeight: 1,
  fontSize: coreTheme.fontSizes.medium,
  backgroundColor: "transparent",
};

const pageContent: React.CSSProperties = {
  ...maxSize,
  display: "flex",
  paddingLeft: "250px",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: coreTheme.colors.background,
};

export default {
  center,
  left,
  right,
  maxSize,
  baseText,
  row,
  column,
  centerRow,
  centerColumn,
  pageContent,
};
