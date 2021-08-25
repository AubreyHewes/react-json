export interface Theme {
  backgroundColor: string;
  color: string;
  stringValueColor: string;
  valueColor: string;
  commentColor: string;
}

export const LightTheme: Theme = {
  backgroundColor: "white",
  color: "black",
  stringValueColor: "#0B7500",
  valueColor: "#1A01CC",
  commentColor: "gray",
};

export const DarkTheme: Theme = {
  backgroundColor: "",
  color: "",
  stringValueColor: "",
  valueColor: "",
  commentColor: "",
};

export default {
  LightTheme,
  DarkTheme,
};
