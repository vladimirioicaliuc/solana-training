import "dotenv/config";
import {getExplorerLink, getKeypairFromEnvironment} from "@solana-developers/helpers";
import {clusterApiUrl, Connection} from "@solana/web3.js";
import {createMint} from "@solana/spl-token";

const CONNECTION_NETWORK = "devnet";
const connection = new Connection(clusterApiUrl(CONNECTION_NETWORK));
console.log("Connected to devnet");

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Loaded Keypair. Our public key: ${user.publicKey.toBase58()}`);

const tokenMint = await createMint(connection, user, user.publicKey, null, 9);

const explorerLink = getExplorerLink("address", tokenMint.toString(), CONNECTION_NETWORK)

console.log(explorerLink);