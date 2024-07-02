import "dotenv/config";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import {getBalanceInSol, getPublicKeyFromEnv} from './utils';

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet");

const publicKey = getPublicKeyFromEnv();

const balanceInLamport = await connection.getBalance(publicKey);

console.log(
    `Finished! The balance for the wallet at address ${publicKey} is ${getBalanceInSol(balanceInLamport)}!`
);