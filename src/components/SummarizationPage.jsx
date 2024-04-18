import React from "react";
import { useState } from "react";
import { summarizeText } from "../openai";

const SummarizationPage = () => {
	const [value, setValue] = useState(null);
	const [data, setData] = useState([null]);
	const [submitting, setSubmitting] = useState(false);

	// function to handle submit data(text to be summarized)
	const handlesubmit = async (e) => {
		// prevent empty submission
		e.preventDefault();
		setSubmitting(true);

		try {
			const text = await summarizeText(value);

			setSubmitting(false);
			setData(text);
			console.log(`The summary text is: ${text}`);
		} catch (error) {
			setSubmitting(false);
			console.error("Error:", error.message);
			// Display an error message to the user
		}
	};

	return (
		<div
			className="w-full bg-[#0f172a] h-full min-h-[100vh]
        py-4
        px-4
        md:px-20"
		>
			<div className="w-full">
				<div
					className="flex flex-col items-center justify-center
          mt-4 p-4"
				>
					<h1 className="text-3xl text-white text-center leading-10 font-semibold">
						Summarize Text with
						<br />
						<span className="text-5xl font-bold text-cyan-500">
							eSum
						</span>
					</h1>
					<p className="mt-5 text-lg text-gray-500 sm:text-xl text-center max-w-2xl">
						Paste your text below!
					</p>
				</div>

				<div className="flex flex-col w-full items-center justify-center mt-5">
					<textarea
						placeholder="Paste doc content here ..."
						rows={6}
						className="block w-full md:w-[650px] rounded-md border border-slate-700
              bg-slate-800 p-2 text-sm shadow-lg font-medium text-white focus:border-gray-500
               focus:outline-none focus:ring-0"
						onChange={(e) => setValue(e.target.value)}
					></textarea>

					{value?.length > 0 &&
						(submitting ? (
							<p className="text-md text-cyan-500 mt-5">Please wait ....</p>
						) : (
							<button
								className="mt-5 bg-blue-500 px-5 py-2 text-white text-md font- cursor-pointer rounded-md "
								onClick={handlesubmit}
							>
								{" "}
								Submit
							</button>
						))}
				</div>

				<br />
				<div className="mt-10 text-center flex flex-col w-full items-center justify-center ">
					<h1 className="text-3xl text-white text-center leading-10 font-semibold">
						Summarized Text
					</h1>

					<p className="mt-5 text-lg text-gray-500 sm:text-xl text-center max-w-2xl">
						{data}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SummarizationPage;
