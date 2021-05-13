import React from "react";
import styled from "styled-components";
import { FaParking} from "react-icons/fa";

const Header = () => {
	return (
		<StyledHeader>
				<StyledTitle>
					<img alt="logo-img" className="incheon" src="https://lh3.googleusercontent.com/proxy/ulq1uOsUmfwpS-cSu3jUW_UqMNjv0VJWEgo2jlE6aMi5Ebgd-PBTasjcPIZjKaVR5k53kw42LXytV6bikaLMt2eAyBQBP7J2sgEWG18LFW6TgufSYKpF4Hek-ycr3roWioLL2IbBw2CNJPEEwaTktX547Tmx0idCGtvFJPu7GNPEjVsRN1ZGSw"/>
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


