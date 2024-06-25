import { Keypair } from "@solana/web3.js";
import { writeFileSync } from "fs";
const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);

writeFileSync(".env", `SECRET_KEY="[${keypair.secretKey}]"`, {
    flag: "w"
})

console.log('Secret was written to .env file')