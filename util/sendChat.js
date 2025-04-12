const crypto = require('crypto');

class uuid {
    static randomUUID() {
        return crypto.randomUUID()
    }
}

const prompt = [
    "What is the difference between a coin and a token in crypto?",
    "How does blockchain technology ensure data integrity?",
    "What is proof of work and how does it secure a blockchain?",
    "What are the risks of storing crypto on a centralized exchange?",
    "What is a smart contract and how is it used in DeFi?",
    "How does Ethereum differ from Bitcoin in terms of functionality?",
    "What is a crypto wallet and how do hardware wallets work?",
    "Why are gas fees necessary on blockchains like Ethereum?",
    "What is the role of miners in the Bitcoin network?",
    "How does staking work in proof-of-stake blockchains?",
    "What is the difference between hot wallets and cold wallets?",
    "How do DAOs function in a decentralized ecosystem?",
    "What is an NFT and how does it prove digital ownership?",
    "How does yield farming work in decentralized finance?",
    "What is impermanent loss in liquidity pools?",
    "How does a decentralized exchange (DEX) differ from a centralized one (CEX)?",
    "What are the use cases of stablecoins like USDC or DAI?",
    "What is a rug pull and how can investors avoid it?",
    "How does layer 2 scaling help Ethereum handle more transactions?",
    "What is tokenomics and why is it important?",
    "How does a crypto airdrop work and why do projects offer them?",
    "What is the purpose of governance tokens in DeFi projects?",
    "How can smart contracts be audited for security?",
    "What is a mnemonic phrase and why is it crucial?",
    "What is the Lightning Network and how does it improve Bitcoin?",
    "What is a wrapped token (e.g., WBTC) and how is it used?",
    "What is slippage in crypto trading?",
    "How do oracles work in blockchain ecosystems?",
    "What is a hash function and why is it important in crypto?",
    "What are zk-rollups and how do they increase privacy and scalability?",
    "What is cross-chain interoperability and why is it valuable?",
    "What are the environmental concerns related to crypto mining?",
    "How is crypto taxed in your country?",
    "What are the top security practices for holding cryptocurrency?",
    "What is the halving event in Bitcoin and what impact does it have?",
    "What is the role of consensus mechanisms in blockchain?",
    "What is DeFi and how is it different from traditional finance?",
    "What is the importance of open-source development in crypto?",
    "How does MetaMask work and how secure is it?",
    "What is the role of validators in PoS networks like Cosmos or Polkadot?",
    "What are gasless transactions and how are they possible?",
    "What is the difference between ERC-20 and ERC-721 tokens?",
    "What is a flash loan and how can it be exploited?",
    "What is a token bridge and how does it work?",
    "How do layer 0 protocols like Polkadot or Cosmos work?",
    "What is a Merkle Tree and how does it relate to blockchain?",
    "What is the difference between fungible and non-fungible assets?",
    "How are crypto scams evolving and how can users protect themselves?",
    "What is the future of central bank digital currencies (CBDCs)?",
    "Why is decentralization considered important in blockchain networks?",
    "How does a blockchain achieve immutability?",
    "What is the role of zero-knowledge proofs in blockchain privacy?",
    "How do sidechains contribute to blockchain scalability?",
    "What are soulbound tokens and what are their potential use cases?",
    "What is the difference between custodial and non-custodial wallets?",
    "How does token burning affect a cryptocurrency's economy?",
    "What is MEV (Miner Extractable Value) and why is it controversial?",
    "How do synthetic assets work in DeFi platforms?",
    "What is the difference between public and private blockchains?",
    "How do Initial DEX Offerings (IDOs) work?",
    "What are the most common attack vectors on smart contracts?",
    "What is the significance of finality in blockchain consensus?",
    "How do governance mechanisms work in DAOs?",
    "What are parachains in the Polkadot ecosystem?",
    "How does on-chain vs off-chain data affect dApps?",
    "What is the InterPlanetary File System (IPFS) and how is it used in blockchain?",
    "How do multi-signature wallets enhance crypto security?",
    "What is slashing in proof-of-stake systems?",
    "What is token vesting and why is it important for projects?",
    "How do blockchain explorers like Etherscan work?",
    "What is the role of stablecoins in reducing volatility in crypto markets?",
    "What is the difference between liquidity mining and yield farming?",
    "What are DAO treasuries and how are they managed?",
    "What is the difference between on-chain and off-chain governance?",
    "What is a relayer in blockchain networks?",
    "How do layer 1 blockchains compete with Ethereum?",
    "What are rollups and how do they scale Ethereum?",
    "How do bridges pose security risks in blockchain ecosystems?",
    "What is a decentralized identity (DID) and how does it work?",
    "How does fractional ownership work with NFTs?",
    "What are the risks of overcollateralization in DeFi lending platforms?",
    "What is a crypto index fund and how does it work?",
    "How can blockchain be used in supply chain management?",
    "What is the role of cryptography in securing blockchains?",
    "How does governance token voting power work in DeFi protocols?",
    "What is the role of reputation systems in Web3 communities?",
    "How do time-locked contracts (HTLCs) enable atomic swaps?",
    "What are vesting cliffs and schedules in tokenomics?",
    "How are token emissions scheduled and managed in protocols?",
    "What is the concept of minimum viable decentralization (MVD)?"
];

const getRandomElement = async (arr) => {
    return arr[Math.floor(Math.random() * prompt.length)]
}

const delay = (min, max) => {
    const ms = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendChat(token) {
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
        'x-session-token': token
    };

    const result = []
    let attempt = 0
    let maxAttempt = 20

    while (attempt < maxAttempt) {
        const chatId = uuid.randomUUID()
        attempt++
        console.log(`#${attempt} | attempting to send chat\n`)

        const message = await getRandomElement(prompt)

        console.log(`chat id: ${chatId}`)
        console.log('prompt:', message, "\n")

        const payload = {
            id: chatId,
            title: "New Chat",
            messages: [
                { role: "user", content: message }
            ],
            sources: [],
            model: 'deepseek-r1',
            created_at: new Date().toISOString(),
            language: "english"
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
            })

            const result = await response.json()
            console.log(result)

            await delay(1000, 3000)
        } catch (error) {
            console.error(error.message)
        }
    }

    return { result }
}

module.exports = sendChat