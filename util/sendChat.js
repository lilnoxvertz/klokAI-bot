const { default: axios } = require("axios");
const { chatAPI } = require("../config/config")
const crypto = require('crypto');

class uuid {
    static randomUUID() {
        return crypto.randomUUID()
    }
}

async function sendChat(token, message) {
    const url = 'https://api1-pp.klokapp.ai/v1/chat';

    const headers = {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'content-type': 'application/json',
        'origin': 'https://klokapp.ai',
        'priority': 'u=1, i',
        'referer': 'https://klokapp.ai/',
        'sec-ch-ua': '"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0',
        'x-session-token': token || 'BIGRIqobVWxjTnptRbvjQXg4BweLF6PZdXmzkyTeltY'
    };

    const chatId = uuid.randomUUID()

    const payload = {
        id: chatId,
        title: "New Chat",
        messages: [
            { role: "user", content: message }
        ],
        sources: [],
        model: "deepseek-r1",
        created_at: new Date().toISOString(),
        language: "english"
    };

    const result = []
    let attempt = 0
    let maxAttempt = 10
    let successAttempt = 3

    while (attempt < maxAttempt) {
        attempt++
        console.log(`#${attempt} | attempting to send chat again..`)

        try {
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    return { result }
}

module.exports = sendChat