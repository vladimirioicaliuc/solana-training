Node Version

`node v20`

### Curs 1

To generate secret in env file

`npm run generate-secret`

To generate keypair (this will also use generate-secret command to create it into .env file)

`npm run generate-keypair` it will create a keypair based on SECRET_KEY from .env file 

### Curs 2

To check balance using secret from env file and using devnet connection

`npm run check-balance`

To airdrop 2 sol into using the secret from env and also using devnet connection

`npm run airdrop-sol`

To extract private key from env file and to be able to use it in Phantom

`npm run export-keypair-tobase58`

### Curs 3

To transfer 0.1 sol using a sender from env file and using devnet connection

Important 

Go to curs3/transfer.ts

Update `RECEIVER_ADDRESS` const and use an address for the person you want to send 0.1 sol

`npm run transfer`

last run signature to check in solana explorer
`42Nn1esm3Ze2CC1LqevrQGGfZmt9TsFc8trwaNKFpt3cX75w7CfvyPb3MjGBgi78M3yQVDUbjuaBD2PUtQJw5UBV`

### Curs 4

`npm run create-token-mint` to create a token mint

`npm run create-token-account` to create a token account 

`npm run mint-tokens` to mint tokens

### Curs 5

`npm run curs5-start` to create a nft
