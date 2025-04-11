const { ethers } = require('ethers')

const getNonce = () => {
    ethers.hexlify(ethers.randomBytes(32))
}
async function signMessage(wallet) {
    console.log('[SIGNING WALLET]')
    const nonce = getNonce()
    try {
        const message = `klokapp.ai wants you to sign in with your Ethereum account:
${wallet.address}


URI: https://klokapp.ai/
Version: 1
Chain ID: 1
Nonce: ${nonce}
Issued At: ${new Date().toISOString()}`;

        const signature = await wallet.signMessage(message)

        console.log(`signature: ${signature}\n`)
        return {
            signature: signature,
            message: message
        }
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = signMessage