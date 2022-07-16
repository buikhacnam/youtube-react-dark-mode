import { createGlobalStyle } from 'styled-components'

type CssProps = {
    body: string,
    text: string
}

export const theme = {
	day: {
        body: '#FFFFFF', 
        text: '#363537', 
    },
	night: {
        body: '#15202B', 
        text: '#F7F9F9', 
    },
}

export const GlobalStyle = createGlobalStyle`
	body {
		background: ${({ theme }: { theme: CssProps }) => theme.body};
		color: ${({ theme }: { theme: CssProps }) => theme.text};
		transition: all 0.5s linear;
	}
`
