import { ThemeProvider } from "styled-components";

interface ThemeProps {
    children: React.ReactNode;
}
  
const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = '#2567B4';
const secundary = '#F9B531';

const theme = {
    fontSizes,
    fonts: {
        primary: 'Raleway',
        secundary: 'Roboto',
    },
    colors: {
        primary,
        secundary,
    },
};

export type ThemeType = typeof theme;

export const Theme: React.FC<ThemeProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>; 
};