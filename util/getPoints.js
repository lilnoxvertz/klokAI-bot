const { headers } = require("../config/config")

const pointsAPi = 'https://api1-pp.klokapp.ai/v1/points'

async function getPoints(token) {
    try {
        const point = await fetch(pointsAPi, {
            method: 'GET',
            headers: {
                ...headers,
                "X-Session-Token": token
            }
        })

        const result = await point.json()
        return result
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = getPoints