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

