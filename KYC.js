import { Contract, Wallet, providers, ethers } from "ethers"
import { KYCverifyABI } from "../config/constant.js"

export const verify = async (request, res) => {
    try {
        const userAddress = request.body.address

        const KYCAddress = process.env.KYC_CONTRACT_ADDRESS

        const provider = new providers.JsonRpcProvider(process.env.RPC_PROVIDER_URL)

        return res.status(200).json({ status: "status" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error })
    }
}

export const check = async (req, res) => {
    try {
        const address = req.body.address

        const KYCAddress = process.env.KYC_CONTRACT_ADDRESS

        const provider = new providers.JsonRpcProvider(process.env.RPC_PROVIDER_URL)

        return res.status(200).json({ status: "status" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error })
    }
}

//My function 
export const getStatus = async (req, res) => {
  try {
    const userAddress = req.params.userAddress;
    const Address = process.env.CONTRACT_ADDRESS;
    const provider = new providers.JsonRpcProvider(process.env.RPC_PROVIDER_URL);
    const signer = new Wallet(process.env.WALLET_PRIVATE_KEY, provider);
    const contract = new Contract(Address, erc20ABI, signer);

    const isVerified = await contract.check(userAddress);

    return res.status(200).json({ 
      address: userAddress,
      isVerified: isVerified,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};