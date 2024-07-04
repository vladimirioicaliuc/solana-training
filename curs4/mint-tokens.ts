import "dotenv/config";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";
import {getOrCreateAssociatedTokenAccount, mintTo} from "@solana/spl-token";

const CONNECTION_NETWORK = "devnet";
const connection = new Connection(clusterApiUrl(CONNECTION_NETWORK));
console.log("Connected to devnet");

const user = getKeypairFromEnvironment("SECRET_KEY");

const RECIPIENT_ADDRESS = "";
if (!RECIPIENT_ADDRESS) {
    throw new Error("Go to curs4/mint-tokens.ts and update `RECIPIENT_ADDRESS` with address of the recipient");
}
const recepientPublicKey = new PublicKey(RECIPIENT_ADDRESS);

console.log(`Loaded Keypair. Our public key: ${user.publicKey.toBase58()}`);

const TOKEN_MINT_PUBLIC_KEY = '';
if (!TOKEN_MINT_PUBLIC_KEY) {
    throw new Error("Go to curs4/mint-tokens.ts and update `TOKEN_MINT_PUBLIC_KEY` with public key of token mint before creating a token account");
}
const tokenMintPublic = new PublicKey(TOKEN_MINT_PUBLIC_KEY);

const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, user, tokenMintPublic, recepientPublicKey)

const txSignl = await mintTo(connection, user, tokenMintPublic, tokenAccount.address, user, 100 * 10 ** 9)

console.log(`Transaction confirmed: ${txSignl}`);