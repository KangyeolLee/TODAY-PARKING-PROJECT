import React from "react";
import styled from "styled-components";
import List from "./List"

const Navbar = () => {
	return (
		<StyledNavbarContainer>
			<StyledNavbar>
				<List />
			</StyledNavbar>
			<StyledNavbar2>
				<List />
			</StyledNavbar2>
		</StyledNavbarContainer>
	);
};

export default Navbar;

const StyledNavbarContainer = styled.div`
	height: 100%;
	border-radius: 1rem;
	flex: 2;
	box-sizing: border-box;
`;

const StyledNavbar = styled.div`
	height: 33%;
	min-height: 200px;
	border-radius: 1rem;
	background-color: #196bff;
	background: linear-gradient(to bottom, #7474bf, #348ac7);
	flex: 2;
	padding: 1rem 1.5rem;
	box-sizing: border-box;
`;

const StyledNavbar2 = styled.div`
	margin-top: 30px;
	height: 33%;
	min-height: 200px;
	border-radius: 1rem;
	background-color: #196bff;
	background: linear-gradient(to bottom, #7474bf, #348ac7);
	flex: 3;
	padding: 1rem 1.5rem;
	box-sizing: border-box;
`;