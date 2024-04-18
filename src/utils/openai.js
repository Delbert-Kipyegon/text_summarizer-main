import axios from "axios";

// Fetch API key from environment variables
const apiKey = process.env.REACT_APP_OPENAI_KEY;

/**
 * Summarize given text using OpenAI's GPT-3.5 model.
 * @param {string} inputText - The input text to be summarized.
 * @returns {string} - The summarized text.
 */
async function summarizeText(inputText) {
	// Construct request data
	let data = JSON.stringify({
		model: "gpt-3.5-turbo-1106",
		messages: [
			{
				role: "system",
				content: "This assistant is trained on Summarizing given text.",
			},
			{
				role: "user",
				content: `${inputText}`,
			},
			{
				role: "user",
				content: "Using 300 characters, summarize the text",
			},
		],
		temperature: 0.1,
		max_tokens: 100,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0.5,
		stop: ['"""'],
	});

	// Set up request configuration
	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: "https://api.openai.com/v1/chat/completions",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		data: data,
	};

	try {
		// Send request to OpenAI API
		const response = await axios.request(config);
		// Extract and return the summarized text from the API response
		const summary = response.data.choices[0].message.content;
		return summary;
	} catch (error) {
		// Log and re-throw any errors that occur during the request
		console.error(error);
		throw error;
	}
}

export { summarizeText };
