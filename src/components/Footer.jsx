import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#1a2538] text-white py-8 lg:py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
				<p className="text-sm lg:text-md lg:mr-4 mb-4 lg:mb-0">
					© 2024 eSUM. All rights reserved.
				</p>
				<nav className="text-sm lg:text-md">
					<a
						href="https://github.com/Delbert-Kipyegon"
						className="mr-4 hover:underline"
						target="_blank"
						rel="noreferrer"
					>
						Delbert Kipyegon
					</a>
					<a
						href="https://github.com/Irwaresly"
						className="hover:underline"
						target="_blank"
						rel="noreferrer"
					>
						Silvia Irware
					</a>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
