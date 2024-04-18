import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#1a2538] text-white py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<p className="text-md">© 2024 eSUM. All rights reserved.</p>
				<nav className="text-md">
					<a
						href="https://github.com/Delbert-Kipyegon"
						className="mr-4 hover:underline"
					>
						Delbert Kipyegon
					</a>
					<a
						href="https://github.com/Irwaresly"
						className="hover:underline"
					>
						Silvia Irware
					</a>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
