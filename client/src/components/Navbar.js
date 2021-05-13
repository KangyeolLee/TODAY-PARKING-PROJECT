import React from "react";
import styled from "styled-components";
import List from "./List"
import Weather from "./Weather";

const Navbar = () => {
	return (
		<StyledNavbarContainer>
			<StyledNavbar>
				<List />
			</StyledNavbar>
			<StyledNavbar2>
				<Weather />
			</StyledNavbar2>
			<StyledPolyLine>
				<div className="polyline__container1">
					<hr width="100px" align="left" color="#3399FF"></hr><span className="polyline1">주·정차 허용</span>
				</div>
				<div className="polyline__container1">
					<hr width="100px" align="left" color="orange"></hr><span className="polyline2">정차만 허용</span>
				</div>
			</StyledPolyLine>
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
	flex: 3;
	padding: 1rem 1.5rem;
	box-sizing: border-box;
`;

const StyledNavbar2 = styled.div`
	margin-top: 30px;
	height: 33%;
	min-height: 330px;
	border-radius: 1rem;
	background-color: #196bff;
	background: linear-gradient(to top, #ffffff, #076585);
	flex: 3;
	padding: 1rem 1.5rem;
	box-sizing: border-box;
`;

const StyledPolyLine = styled.div`
	margin-top: 4rem;
	font-family: 'Do Hyeon', sans-serif;
		
	.polyline__container1 {
		display: flex;
		padding-left:10%;
		margin-bottom: 5%;
	}

	.polyline1 {
		font-size: 20px;
		width: 120px;
		weight: 20px;
		height: 30px;
		color: #3399FF;
		margin-right: 20%;
		margin-left: 5%;

	}

	.polyline2 {
		font-size: 20px;
		width: 120px;
		weight: 20px;
		height: 30px;
		color: orange;
		margin-right: 20%;
		margin-left: 5%;
	}
`;