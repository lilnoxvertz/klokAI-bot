const { ethers } = require("ethers");
const { loadWallet } = require("./helper/loadWallet");
const registerAccount = require("./util/register");
const signMessage = require("./util/signMessage");
const { referralCode } = require("./config/config");
const completeTask = require("./util/completeTask");
const getPoints = require("./util/getPoints");
const sendChat = require("./util/sendChat");

let isRunning = true

const stats = {
    success: 0,
    failed: 0
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
    "Why is decentralization considered important in blockchain networks?"
];


const delay = (min, max) => {
    const ms = Math.floor(Math.random() * (max - min + 1)) + min;
    const sec = ms / 1000
    console.log(`\nwaiting ${sec}seconds before registering account again.`)

    return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandomPrompt = async (arr) => {
    return arr[Math.floor(Math.random() * prompt.length)]
}


async function startBot(wallet) {
    const signature = await signMessage(wallet)
    const register = await registerAccount(signature.signature, signature.message, referralCode)

    const message = register.message
    const sessionToken = register.session_token

    console.log("sessiong token: ", sessionToken)

    if (register.message = "Verification successful") {
        stats.success++
        console.log(message)
    } else {
        stats.failed++
        console.log(message || 'failed')
    }

    const randomPrompt = await getRandomPrompt(prompt)
    console.log(`prompt: ${randomPrompt}`)
    await completeTask(sessionToken)
    await getPoints(sessionToken)
    await sendChat(sessionToken, randomPrompt)

    await delay(500, 1000)
}

async function processWallet(wallets) {
    for (const wallet of wallets) {
        if (!isRunning) {
            return
        }

        console.clear()
        console.log('[KLOK AI AUTO REGISTER | github.com/lilnoxvertz]')
        console.log(`success: ${stats.success}`)
        console.log(`failed : ${stats.failed}`)

        const w = new ethers.Wallet(wallet)
        console.log(`\ncurrent wallet: ${w.address}\n`)

        await startBot(w)
    }

    isRunning = false
}

async function main() {
    try {
        const wallets = await loadWallet()

        if (wallets.length === 0) {
            console.log('no private key found at privateKey.txt')
            process.exit(1)
        }

        await processWallet(wallets)
    } catch (error) {
        console.error(error)
    }
}

main()