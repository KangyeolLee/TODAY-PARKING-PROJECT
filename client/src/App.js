import { useReducer } from 'react';
import Map from "./Map";
import styled from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { initialState, MapContext, reducer } from "./context/MapContext";

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	
  	return (
		<MapContext.Provider value={{state, dispatch}}>
			<AppContainer className = "App">
				<Header />
				<ContentContainer>
					<Navbar />
					
					<MapContainer>
						<Map />
					</MapContainer>
				</ContentContainer>
			</AppContainer>  
		</MapContext.Provider>
  );
}

export default App;

const AppContainer = styled.div`
	margin: auto;
	box-sizing: border-box;
	padding: 1rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	max-width: 1280px;
	min-width: 1080px;
`;

const ContentContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	gap: 1.5rem;
`;

const MapContainer = styled.div`
	border-radius: 1rem;
	flex: 6;
	overflow: hidden;
	height: 90%;
	min-height: 780px;
`;