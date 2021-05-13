import React from "react";
import styled from "styled-components";
import { FaParking} from "react-icons/fa";

const Header = () => {
	return (
		<StyledHeader>
				<StyledTitle>
					<img alt="logo-img" className="incheon" src="https://lh3.googleusercontent.com/proxy/xgsvwyn3hCTLw9Mri21uptWmV7qInnd4UHFAJ-uGsfuX_3LgdijziPypu1QfmksTHNi9XoshwMP3ojc_rxeb7w6Poim-T5xhGcYCGoIhqymLBUsy-TOEIDea2gyoc2gJCNVJ7iWwHKWYM2sBOOoSLOrJErI1PxcXW1UgpmiXCoP17cWNig6-SQ"/>
					<h1 className="title title__text">오늘의</h1>
					<h1 className="title__text1">주차</h1>
					<h1 className="title__text2">Incheon</h1>
					<FaParking className = "logo"/>
				</StyledTitle>
		</StyledHeader>
	);
};

export default Header;

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	margin-bottom: 1.5rem;
`;

const StyledTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	margin-left: 2rem;	

	svg.logo {
		font-size: 2rem;
	}

	h1.title {
		font-weight: bold;
	}
`;


