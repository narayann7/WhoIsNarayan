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





const baseText: css = {
  fontFamily: coreTheme.fonts.primary,
  fontWeight: 400,
  lineHeight: 1,
  fontSize: coreTheme.fontSizes.medium,
  backgroundColor: "transparent",
};

const pageContent: React.CSSProperties = {
  // ...maxSize,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingRight: coreTheme.padding.rootHorizontal,
  paddingLeft: coreTheme.padding.rootHorizontal,
  backgroundColor: coreTheme.colors.background,
};

const pageDescription: React.CSSProperties = {
  fontSize: "20px",
  letterSpacing: "1px",
  lineHeight: "1.5",
  fontFamily: coreTheme.fonts.secondary,
};

const pageHeading: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "1.5px",
  fontFamily: coreTheme.fonts.primary,
};

export default {
  center,
  left,
  right,
  pageContent,
  pageDescription,
  pageHeading,

  baseText,
  row,
  column,
  centerRow,
  centerColumn,
};
