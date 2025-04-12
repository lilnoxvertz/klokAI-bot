const fs = require("fs")

async function storeSession(token) {
    try {

        if (!token) {
            console.log('no token found')
            return
        }

        fs.appendFileSync("privateKey.txt", `,${token}`, "utf8")
        console.log('successfully stored session token!')
    } catch (error) {
        console.error(error)
    }
}

module.exports = storeSession