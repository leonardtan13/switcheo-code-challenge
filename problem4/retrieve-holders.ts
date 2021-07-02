import {ethers} from 'ethers'

const TOKEN_ADDRESS = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c'

const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function name() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (boolean)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const provider = ethers.providers.getDefaultProvider();

const TOKENS = [
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5",
]

async function main() {
    
    const contract = new ethers.Contract(TOKEN_ADDRESS, abi, provider)

    TOKENS.forEach(async (token) => {
        const balance = await contract.balanceOf(token);
        console.log(`${token} ${balance}`)
    })

}

main()