import { ethers } from 'ethers';
import contractABI from './abi.json';



const initContract = async () => {
    try {
        // Connect to MetaMask

        if (window.ethereum) {

            const provider = new ethers.BrowserProvider(window.ethereum)
            const userAdress = provider.getSigner();
            const contractAddress = '0xAd7F77623D30ed2802F373c89E4c4B0ACAadFC23';
            const contract = new ethers.Contract(contractAddress, contractABI, await provider.getSigner());

            console.log('Contract:', contract);
            console.log('Provider', provider);
            console.log('User address:', userAdress);

            return contract
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const mint = async (account, id, amount, data) => {
    try {
        const contract = await initContract();
        const txResponse = await contract?.mint(account, id, amount, data);
        await txResponse.wait(); // Esperar a que la transacción se complete
        console.log('Mint transaction hash:', txResponse.hash);
        return txResponse;
    } catch (error) {
        console.error('Error:', error);
    }
}

const setUrl = async (new_uri) => {
    try {
        const contract = await initContract();
        const txResponse = await contract?.setURI(new_uri);
        await txResponse.wait(); // Esperar a que la transacción se complete
        console.log('Set URI transaction hash:', txResponse.hash);
        return txResponse;
    } catch (error) {
        console.error('Error:', error);
    }
}

export {
    mint,
    setUrl
}
