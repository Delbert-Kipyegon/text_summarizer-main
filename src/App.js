import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SummarizationPage from "./components/SummarizationPage";
import Footer from "./components/Footer";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';


const App = () => {

	const alertOptions = {
		// Alert options here
		position: positions.BOTTOM_CENTER,
		timeout: 5000,
		offset: '30px',
		transition: transitions.SCALE
	  };

	return (
		<Router>
			<AlertProvider template={AlertTemplate} {...alertOptions}>
				<Navbar />
				<Routes>
					<>
						<Route
							exact
							path="/"
							element={<LandingPage />}
						/>
						<Route
							path="/summarization"
							element={<SummarizationPage />}
						/>
					</>
				</Routes>
				<Footer />
			</AlertProvider>
		</Router>
	);
};

export default App;
