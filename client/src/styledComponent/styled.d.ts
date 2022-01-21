import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            mainColor: string,
            mainTextColor: string,
            secondaryColor: string
        }
    }
}