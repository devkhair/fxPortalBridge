# ERC20 Sepolia to Mumbai Bridge Using fxPortal

This project provides a guide on how to bridge ERC20 tokens from the Sepolia testnet to the Mumbai testnet using the fxPortal contracts.

## Steps for Bridging

1. **Install Dependencies**:
   - Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

2. **Configure Environment Variables**:
   - Add your private key, Sepolia API key, Mumbai API key, and account information in the `.env.example` file.
   - After completing the configuration, rename the file to `.env`.

3. **Deploy the ERC20 Contract**:
   - Deploy the ERC20 contract on the Sepolia network by running:
     ```bash
     npx hardhat run scripts/deploy.js --network sepolia
     ```

4. **Set the Contract Address**:
   - Copy the address of the deployed contract and paste it into the `CONTRACT_ADDRESS` variable in the scripts.

5. **Mint Tokens**:
   - Mint tokens to your wallet by running:
     ```bash
     npx hardhat run scripts/batchMint.js --network sepolia
     ```

6. **Approve and Deposit Tokens**:
   - Approve and deposit your tokens to the Polygon network by running:
     ```bash
     npx hardhat run scripts/approveDeposit.js --network goerli
     ```

7. **Wait for Token Transfer**:
   - Allow approximately 20-30 minutes for the tokens to appear in your Polygon account.

8. **Verify Token Arrival**:
   - Use [Polyscan](https://polygonscan.com/) to check your account for the tokens. Once they arrive, you can click on the transaction to obtain the contract address on the Polygon network.

9. **Check Balance on Mumbai**:
   - Update your `getBalance` script with the Polygon contract address and run:
     ```bash
     npx hardhat run scripts/getBalance.js --network mumbai
     ```

This process bridges your ERC20 tokens from Sepolia to Mumbai, allowing you to verify balances and interact with the tokens on both networks.
