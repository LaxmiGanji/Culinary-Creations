import { createGlobalStyle } from 'styled-components';

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
		--card-background: #2d2d2d;
		--hover-color: #3700B3;
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

	/* Base styles for common elements */
	input, textarea, select {
		background-color: var(--surface);
		color: var(--on-surface);
		border: 1px solid var(--primary-color);
		border-radius: 4px;
		padding: 8px;
		margin: 8px 0;
	}

	input:focus, textarea:focus, select:focus {
		outline: none;
		border-color: var(--secondary-color);
		box-shadow: 0 0 0 2px rgba(3, 218, 198, 0.2);
	}

	/* Card styling */
	.card {
		background-color: var(--card-background);
		border-radius: 8px;
		padding: 16px;
		margin: 16px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	.card:hover {
		transform: translateY(-4px);
	}
`