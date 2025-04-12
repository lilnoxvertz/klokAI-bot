const { headers } = require("../config/config")

async function getRateLimit(token) {
    const url = "https://api1-pp.klokapp.ai/v1/rate-limit"

    const header = {
        ...headers,
        "X-Session-Token": token
    }

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: header
        })

        const result = await response.json()

        const limit = result.limit
        const usage = result.current_usage
        const remaining = result.remaining

        console.log(`limit: ${limit}\nusage: ${usage}\nremaining: ${remaining}`)

        return { limit, usage, remaining }
    } catch (error) {

    }
}

module.exports = getRateLimit