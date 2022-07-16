import { createGlobalStyle } from 'styled-components'

type CssProps = {
    background: string,
    text: string
}

export const theme = {
	day: {
        background: '#FFFFFF', 
        text: '#363537', 
    },
	night: {
        background: '#15202B', 
        text: '#F7F9F9', 
    },
}

export const GlobalStyle = createGlobalStyle`
	body {
		background: ${({ theme }: { theme: CssProps }) => theme.background};
		color: ${({ theme }: { theme: CssProps }) => theme.text};
		transition: all 0.5s linear;
	}
`
