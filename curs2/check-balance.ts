import "dotenv/config";
import {Connection, clusterApiUrl, PublicKey} from "@solana/web3.js";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {getBalanceInSol} from "../utils";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet");

const keyFromEnv = getKeypairFromEnvironment("SECRET_KEY");
const keyToCheck = keyFromEnv.publicKey.toBase58();
console.log(`Public key: ${keyToCheck}`);
const publicKey = new PublicKey(keyToCheck);

const balanceInLamport = await connection.getBalance(publicKey);

console.log(
    `Finished! The balance for the wallet at address ${publicKey} is ${getBalanceInSol(balanceInLamport)}!`
);