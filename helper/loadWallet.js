const fs = require("fs")

async function loadWallet() {
    try {
        return fs
            .readFileSync("privateKey.txt", "utf-8")
            .split("\n")
            .filter((wallet) => wallet.trim())
            .map((wallet) => wallet.trim().toLowerCase());
    } catch (error) {
        console.error("Error: data.txt not found");
        return [];
    }
}

module.exports = { loadWallet }