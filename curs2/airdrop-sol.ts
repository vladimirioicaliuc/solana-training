import "dotenv/config";
import {Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey} from "@solana/web3.js";
import {airdropIfRequired, getKeypairFromEnvironment} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet");

const keyFromEnv = getKeypairFromEnvironment("SECRET_KEY");
const keyToCheck = keyFromEnv.publicKey.toBase58();
console.log(`Public key: ${keyToCheck}`);
const publicKey = new PublicKey(keyToCheck);

const airdropAmount = 2 * LAMPORTS_PER_SOL;
const minimumBalance = 5 * LAMPORTS_PER_SOL;

const airdrop = await airdropIfRequired(connection, publicKey, airdropAmount, minimumBalance);
console.log(`Airdrop successful: ${airdrop}`);