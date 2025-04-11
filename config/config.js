const header = {
    "Content-Type": "application/json",
    "Origin": "https://klokapp.ai",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://klokapp.ai",
}

const headers = {
    'authority': 'api1-pp.klokapp.ai',
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.9,id;q=0.8',
    'origin': 'https://klokapp.ai',
    'priority': 'u=1, i',
    'referer': 'https://klokapp.ai/',
    'sec-ch-ua': '"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0'
}

const verifyAPI = "https://api1-pp.klokapp.ai/v1/verify"
const chatAPI = "https://api1-pp.klokapp.ai/v1/chat"
const referralCode = "RNG55YFK"

module.exports = { header, headers, verifyAPI, referralCode, chatAPI }