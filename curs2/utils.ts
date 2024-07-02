import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";

export const getPublicKeyFromEnv = () => {
    const keyFromEnv = getKeypairFromEnvironment("SECRET_KEY");
    const keyToCheck = keyFromEnv.publicKey.toBase58();
    console.log(`Public key: ${keyToCheck}`);
    return new PublicKey(keyToCheck);
}

export const getBalanceInSol = (balanceInLamport) => {
    return  balanceInLamport / LAMPORTS_PER_SOL;
}