import React from "react";
import styled from 'styled-components';

const StyledApp = styled.div`
	color: red;
`
export default class App extends React.Component {
	render() {
		return (
			<StyledApp>
				<h1>Hello World</h1>
			</StyledApp>
		);
	}
}
