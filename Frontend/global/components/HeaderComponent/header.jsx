/* Hooks */
import { MetaMaskButton, useAccount, useSignMessage } from "@metamask/sdk-react-ui";

  function Header() {
  
  return (
    <header className="header">
      <div className="header__logo">
        <h1>SciFile</h1>
      </div>
      <div className="header__btnWallet">
        <MetaMaskButton theme={"dark"} color="red" ></MetaMaskButton>
      </div>
    </header>
  )
}


/* 
Firmar al momento de hacer un review o un artículo

  const{
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
  });

  const { isConnected } = useAccount();

{isConnected && (
  <div style={{ marginTop: 20 }}>
    <button disabled={isSignLoading} onClick={() => signMessage()}>
      Sign message
    </button>
    {isSignSuccess && <div>Signature: {signData}</div>}
    {isSignError && <div>Error signing message</div>}
  </div>
)} 
*/

export { Header }