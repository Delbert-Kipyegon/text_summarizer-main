import axios from "axios";

const apiKey = process.env.REACT_APP_OPENAI_KEY;

async function summarizeText(inputText) {
    let data = JSON.stringify({
        "model": "gpt-3.5-turbo-1106",
        "messages": [
            {
                "role": "system",
                "content": "This assistant is trained on Summarizing given text."
            },
            {
                "role": "user",
                "content": `${inputText}`,
            },
            {
                "role": "user",
                "content": "Using 300 characters, summarize the text"
            }
        ],
        "temperature": 0.1,
        "max_tokens": 100,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0.5,
        "stop": ["\"\"\""]
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.openai.com/v1/chat/completions',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${apiKey}`, 
        },
        data : data
    };

    try {
        const response = await axios.request(config);
        const summary = response.data.choices[0].message.content;
        return summary;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error for handling it outside this function
    }
}

export { summarizeText };
