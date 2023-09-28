import { ethers } from "ethers";
import { mintAbi } from "./abi/mintAbi";

let signer = null;

const provider = new ethers.BrowserProvider(window.ethereum);
console.log(provider)

let address;

let contract;

const contractAddress = '0xf480339c0451fAd7dc54f751e40074A6B22c42F6';



 function App() {

  

  return (
    <div>
      Hello, World!
      <br/>
      <button onClick={async () => {
        signer = await provider.getSigner();
        address = await signer.getAddress()
        contract = new ethers.Contract(contractAddress, mintAbi, provider)
        const signedContract = contract.connect(signer)
        console.log(signer)
        console.log(address)
        console.log(contract)
        console.log(signedContract)

        const mint = await signedContract.safeMint('0x9D242C93155F5Aaa5911664b4f6F4452cd39B288', 'Hello, World!')
        await mint.wait();
        console.log('transaction sent!')
      }}>Connect Wallet</button>
      {address}
    </div>
  );
}

export default App;
