const hre = require("hardhat");
const ethers = hre.ethers;
const { addresses } = require("./constants")

let owner;

let whitelistPasswords = [];

let whitelist = {};

async function main() {
    [owner] = await ethers.getSigners();
    const encoder = ethers.utils.defaultAbiCoder;

    // Gold whitelist
    for (let i = 0; i < addresses.length; i++) {
        const message = ethers.utils.keccak256(encoder.encode(["address"], [addresses[i]]))
        whitelistPasswords.push(await owner.signMessage(ethers.utils.arrayify(message)));
        whitelist[addresses[i].toLowerCase()] = whitelistPasswords[i]
    }
    process.stdout.write("const whitelist = " + JSON.stringify(whitelist) + "\n")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
