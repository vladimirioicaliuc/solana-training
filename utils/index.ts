import {LAMPORTS_PER_SOL} from "@solana/web3.js";

export const getBalanceInSol = (balanceInLamport) => {
    return  balanceInLamport / LAMPORTS_PER_SOL;
}