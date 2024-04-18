import React, { useState, useEffect } from "react";

const LandingPage = () => {
	const [backgroundColor, setBackgroundColor] = useState("");
	const cyanShades = ["#25737f","#00bcd4"];

	useEffect(() => {
		const interval = setInterval(() => {
			setBackgroundColor((prevColor) => {
				const currentIndex = cyanShades.indexOf(prevColor);
				const nextIndex = (currentIndex + 1) % cyanShades.length;
				return cyanShades[nextIndex];
			});
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-[#0f172a] font-roboto min-h-screen">
			{/* Intro Section */}
			<header
				style={{ backgroundColor }}
				className=" h-screen mx-auto text-white flex items-center justify-center"
			>
				<div className="max-w-7xl text-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
					<h1 className="text-4xl font-bold mb-4">eSum</h1>
					<p className="text-4xl mb-6">
						Simply paste your document and get a summary, ASAP!
					</p>
					<nav className="flex space-x-4">
						<a
							href="#features"
							className="text-lg hover:underline"
						>
							Features
						</a>
						<a
							href="#about"
							className="text-lg hover:underline"
						>
							About
						</a>
					</nav>
					<a
						href="/summarization"
						className="bg-white text-blue-500 px-6 py-3 mt-8 rounded-md font-medium hover:bg-blue-200 transition duration-300"
					>
						Go to App
					</a>
				</div>
			</header>

			{/* Feature Section */}
			<section
				id="features"
				className="py-12"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center mb-8 text-white">
						Key Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="bg-[#1a2538] rounded-lg shadow-md p-6">
							{/* Text Summarization Illustration */}
							<img
								src="https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Feature 1"
								className="w-full h-48 mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2 text-white">
								Text Summarization
							</h3>
							<p className="text-gray-300">
								Summarize large text documents into concise summaries with ease.
							</p>
						</div>
						{/* Feature 2 */}
						<div className="bg-[#1a2538] rounded-lg shadow-md p-6">
							{/* Fast and Reliable Illustration */}
							<img
								src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="Feature 2"
								className="w-full h-48 mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2 text-white">
								Fast and Reliable
							</h3>
							<p className="text-gray-300">
								Get your summaries quickly and reliably, ensuring productivity.
							</p>
						</div>
						{/* Feature 3 */}
						<div className="bg-[#1a2538] rounded-lg shadow-md p-6">
							{/* Easy to Use Illustration */}
							<img
								src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
								alt="Feature 3"
								className="w-full h-48 mb-4"
							/>
							<h3 className="text-xl font-semibold mb-2 text-white">
								Easy to Use
							</h3>
							<p className="text-gray-300">
								Simple user interface makes text summarization accessible to
								all.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="bg-cyan-800  text-white py-12"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl text-center font-bold mb-8">About</h2>
					<p className="mb-6 px-10  font-normal text-xl">
						This project was inspired by the need for an efficient text
						summarization tool. As a Portfolio Project for Holberton School,
						eSum aims to provide a user-friendly solution for summarizing large
						text documents. The idea stemmed from personal experiences with
						lengthy articles, research papers, and documents, where extracting
						key points quickly was essential for productivity. With eSum, users
						can simply paste their document and receive a concise summary within
						seconds, streamlining the process of extracting important
						information.
					</p>
					<div className="flex justify-center space-x-4 mb-6">
						<a
							href="#"
							className="text-lg hover:underline"
						>
							GitHub
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
