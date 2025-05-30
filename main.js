const { ethers } = require("ethers");
const { loadWallet } = require("./helper/loadWallet");
const registerAccount = require("./util/register");
const signMessage = require("./util/signMessage");
const { referralCode } = require("./config/config");
const completeTask = require("./util/completeTask");
const getPoints = require("./util/getPoints");
const sendChat = require("./util/sendChat");
const getRateLimit = require("./util/rateLimit");
const storeSession = require("./helper/storeSession");

let isRunning = true

const stats = {
    success: 0,
    failed: 0
}

const delay = (min, max) => {
    const ms = Math.floor(Math.random() * (max - min + 1)) + min;
    const sec = ms / 1000
    console.log(`\nwaiting ${sec}seconds before registering account again.`)

    return new Promise(resolve => setTimeout(resolve, ms));
}


async function startBot(wallet) {
    const signature = await signMessage(wallet)
    const register = await registerAccount(signature.signature, signature.message, referralCode)

    if (register.user_exists) {
        return
    } else {
        const message = register.message
        const sessionToken = register.session_token

        if (register.message = "Verification successful") {
            stats.success++
            console.log(message)
        } else {
            stats.failed++
            console.log(message || 'failed')
        }

        await completeTask(sessionToken)
        const point = await getPoints(sessionToken)
        console.log(point)

        const rateLimit = await getRateLimit(sessionToken)

        if (rateLimit.usage > rateLimit.limit) {
            console.log('exceed rate limit usage')
            return
        } else {
            await sendChat(sessionToken)
        }
    }

    await delay(5000, 10000)
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