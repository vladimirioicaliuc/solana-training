import "dotenv/config";
import {
    Connection,
    clusterApiUrl,
    PublicKey,
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL,
    sendAndConfirmTransaction
} from "@solana/web3.js";
import {createMemoInstruction} from "@solana/spl-memo";
import {getKeypairFromEnvironment} from "@solana-developers/helpers";
import {getBalanceInSol} from "../utils";

const connection = new Connection(clusterApiUrl("devnet"));
console.log("Connected to devnet");

const sender = getKeypairFromEnvironment("SECRET_KEY");

const RECEIVER_ADDRESS = "INSERT_ADDRESS_HERE";
const receiver = new PublicKey(RECEIVER_ADDRESS);

const balanceInLamport = await connection.getBalance(receiver);
console.log(getBalanceInSol(balanceInLamport));

const transaction = new Transaction();
const transactionInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey:receiver,
    lamports: 0.1 * LAMPORTS_PER_SOL
})

transaction.add(transactionInstruction)

const memo = "Ty ;)";

const memoInstruction = createMemoInstruction(memo)

transaction.add(memoInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender])

console.log(`Transaction confirmed. Signature ${signature}`);