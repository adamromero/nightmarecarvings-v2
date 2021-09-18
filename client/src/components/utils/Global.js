import { createGlobalStyle } from "styled-components";
import { typeScale } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
	${normalize()}
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit
	}

	body {
		margin: 40px 0 0;
		display: flex;
    	justify-content: center;
		font-size: ${typeScale.standard}
	}

	#root {
		max-width: 345px;
    	width: 100%;
	}

	form {
		display: flex;
	}

	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: end;
		align-items: center;
		cursor: pointer;
		padding: 0 0 0 8px;
		background: #e0e0e0;
		margin: 20px 0 0;
	}

	.list-content {
		width: 100%;
	}

	.complete {
		color: gray;
		text-decoration: line-through;
	}
`;
