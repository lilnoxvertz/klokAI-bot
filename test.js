
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


const getRandomPrompt = async (arr) => {
    return arr[Math.floor(Math.random() * prompt.length)]
}

const prompts = getRandomPrompt(prompt)

console.log(prompts)