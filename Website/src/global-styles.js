import { createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html, body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		position: relative;
		top: 0;
		background: #121212;
		color: #ffffff;
		font-family: 'Nunito Sans', sans-serif;
	}

	/* Dark theme colors */
	:root {
		--primary-color: #BB86FC;
		--primary-variant: #3700B3;
		--secondary-color: #03DAC6;
		--background: #121212;
		--surface: #1E1E1E;
		--error: #CF6679;
		--on-primary: #000000;
		--on-secondary: #000000;
		--on-background: #FFFFFF;
		--on-surface: #FFFFFF;
		--on-error: #000000;
	}

	/* Scrollbar styling */
	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: var(--surface);
	}

	::-webkit-scrollbar-thumb {
		background: var(--primary-color);
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: var(--primary-variant);
	}
`