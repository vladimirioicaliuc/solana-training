import "dotenv/config";
import {getExplorerLink, getKeypairFromEnvironment} from "@solana-developers/helpers";
import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";
import {getOrCreateAssociatedTokenAccount} from "@solana/spl-token";

const CONNECTION_NETWORK = "devnet";
const connection = new Connection(clusterApiUrl(CONNECTION_NETWORK));
console.log("Connected to devnet");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Loaded Keypair. Our public key: ${user.publicKey.toBase58()}`);

const TOKEN_MINT_PUBLIC_KEY = '';
if (!TOKEN_MINT_PUBLIC_KEY) {
    throw new Error("Go to curs4/create-token-account.ts and update `TOKEN_MINT_PUBLIC_KEY` with public key of token mint before creating a token account");
}
const tokenMintPublic = new PublicKey(TOKEN_MINT_PUBLIC_KEY);

const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, user, tokenMintPublic, user.publicKey)

const explorerLink = getExplorerLink("address", tokenAccount.address.toString(), CONNECTION_NETWORK)

console.log(explorerLink);