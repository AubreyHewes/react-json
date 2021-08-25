import { useContext } from "react";
import { ThemeContext } from "styled-components";

export interface JsonViewerTheme {
  backgroundColor: string;
  color: string;
  stringValueColor: string;
  valueColor: string;
  commentColor: string;
}

export const DefaultJsonViewerTheme: JsonViewerTheme = {
  backgroundColor: "white",
  color: "black",
  stringValueColor: "#0B7500",
  valueColor: "#1A01CC",
  commentColor: "gray",
};

export const useTheme = (): JsonViewerTheme => {
  const themeContext = useContext<any>(ThemeContext);
  return themeContext?.jsonViewer ?? themeContext ?? DefaultJsonViewerTheme;
};
