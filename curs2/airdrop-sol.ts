import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { airdropIfRequired } from "@solana-developers/helpers";
import {getPublicKeyFromEnv} from "./utils";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet");

const publicKey = getPublicKeyFromEnv();

const airdropAmount = 2 * LAMPORTS_PER_SOL;
const minimumBalance = 5 * LAMPORTS_PER_SOL;

const airdrop = await airdropIfRequired(connection, publicKey, airdropAmount, minimumBalance);
console.log(`Airdrop successful: ${airdrop}`);