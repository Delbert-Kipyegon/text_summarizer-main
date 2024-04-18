import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SummarizationPage from "./components/SummarizationPage";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Router>
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
		</Router>
	);
};

export default App;
