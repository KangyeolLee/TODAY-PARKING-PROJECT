import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import getCurrentTime from '../logics/getCurrentTime';

const APIURL = `https://hackerton-today-parkzrhie.run.goorm.io`;

const Weather = () => {
	const [currentWeather, setCurrentWeather] = useState({});
	
	useEffect(() => {
		const getCurrentWeather = async () => {
			const weather = await axios.get(`api/weather`);
			const { weatherInfo } = weather.data;
			setCurrentWeather(weatherInfo);
		}
		
		getCurrentWeather();
	}, []);
	
	if(!Object.keys(currentWeather).length) {
		return (
			<StyledLoadingWrapper>
				<StyledLoading alt="loading" src="/loading.gif" />
			</StyledLoadingWrapper>
		)
	}
	
	return (
		<StyledWeatherContainer>
			<p className="today-date">{getCurrentTime()}</p>
			<StyledContentWrapper>
				<img alt="weather-img" src={currentWeather.imgUrl} />
				<div>
					<span className="celcius">{currentWeather.nowTemp}</span> 
					<span className="temparature"> ℃</span> 
				</div>
			</StyledContentWrapper>
			
			<StyledTodayWeather>
				<div className="castText">{currentWeather.castText}</div>
				<div>
					<span className="minTemp">{currentWeather.minTemp}˚</span> <span className='divider'> | </span>
					<span className="maxTemp">{currentWeather.maxTemp}˚</span> <span className='divider'> | </span>
					<span className="perceivedTemp">체감온도: {currentWeather.perceivedTemp}˚</span>
				</div>
			</StyledTodayWeather>
			
			<StyledAdditionalInfo>
				<div>
					<div>미세먼지</div>
					<div>초미세먼지</div>
					<div>오존지수</div>
				</div>
				
				<div>
					<div>{currentWeather.dust}</div>
					<div>{currentWeather.ultraDust}</div>
					<div>{currentWeather.ozone}</div>
				</div>
			</StyledAdditionalInfo>
			
		</StyledWeatherContainer>
	)
}

export default Weather;

const StyledLoadingWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const StyledLoading = styled.img`
	width: 25px;
	height: 25px;
`

const StyledWeatherContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-family: 'Do Hyeon', sans-serif;

	.today-date {
		text-align: right;
		color: #fff;
		margin: 0;
	}
`

const StyledContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;


	img {
		width: 100px;
		height: 100px;
	}

	.celcius {
		width: 100%;
		text-align: center;
		font-size: 4rem;
	}

	.temparature {
		font-size: 25px;
	}
`

const StyledTodayWeather = styled.div`

	font-size: 20px;	

	.divider {
		color: #666666;
	}

	.castText {
		color: #fff;
		font-weight: bold;
	}

	.minTemp {
		color: #32a1ff;
	}

	.maxTemp {
		color: #fc4c4e;
	}

	.perceivedTemp {
		color: yellow;
	}
`

const StyledAdditionalInfo = styled.div`
	font-size: 18px;
	display: flex;
	justify-content: space-between;
`