const { header } = require("../config/config")

async function registerAccount(signature, message, referralCode) {
    console.log('[REGISTERING ACCOUNT]\n')
    const url = 'https://api1-pp.klokapp.ai/v1/verify'

    const payload = {
        signedMessage: signature,
        message: message,
        referral_code: referralCode
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.stringify(payload)
        })

        const result = await response.json()
        console.log('[VERIFICATION DATA]')
        console.log(result)

        return result
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = registerAccount