import { ThemeProvider } from "styled-components";
import { DefaultJsonViewerTheme } from "../src/theme";

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themes = {
  light: DefaultJsonViewerTheme,
  dark: {
    backgroundColor: "#121212",
    color: "#018ccc",
    stringValueColor: "orange",
    valueColor: "#00b2ff",
    commentColor: "gray",
  }
};

const withThemeProvider=(Story,context)=>{
  const theme = themes[context.globals.theme] ?? DefaultJsonViewerTheme;
  return (
    <ThemeProvider theme={{jsonViewer: theme}}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];
