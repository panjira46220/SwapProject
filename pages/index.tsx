import type { NextPage } from "next";
import * as ethers from "ethers";
import { useState, useEffect } from "react";
import {
  connectWallet,
  getBalance,
  getChainId,
  getEthereum,
  getProvider,
  getSigner,
  getWalletAddress,

} from "../services/wallet-service";
import Topbar from "../components/topbar";
import SwapForm from "../components/SwapForm";
import { formatEther, formatUnits, parseEther } from "ethers/lib/utils";

const Home: NextPage = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    const addr = getWalletAddress();
    setAddress(addr);
  }, []);

  const loadAccountData = async () => {
    const addr = getWalletAddress();
    setAddress(addr);



    const bal = await getBalance(addr);
    if (bal) setBalance(formatEther(bal));

    //   const tokenList = getNetworkTokens(chainId);

    //   const tokenBalList = await Promise.all(
    //     tokenList.map((token) =>
    //       getTokenBalance(token.address, addr).then((res) =>
    //         formatUnits(res, token.decimals)
    //       )
    //     )
    //   );

    //   tokenList.forEach((token, i) => {
    //     tokenBalances[token.symbol] = tokenBalList[i];
    //   });
    //   setTokenBalances({ ...tokenBalances });
  };

  var test = "";
  if (address != null) {
    test = address.substring(0, 5) + "..." + address.substring(37, 42);
  }

  useEffect(() => {
    loadAccountData();

    const handleAccountChange = (addresses: string[]) => {
      setAddress(addresses[0]);
      loadAccountData();
    };



    getEthereum()?.on("accountsChanged", handleAccountChange);


  }, []);
  return (
    <div className="bg-green-100 h-screen">
      {/* <Topbar address={address} /> */}
      <nav className=" bg-white flex justify-between items-center px-20 py-2 relative z-50" >
        <div className="flex p-auto">
          <img
            src="/BareBear.png"
            alt="BareBear-logo"
            className="w-[50px] h-[50px] mr-4 "
          />
          <div>
            <p className="text-black text-lg font-bold mt-2">BEARSWAP</p>
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="flex space-x-1 lg:flex text-black">
            <img
              src="/16093.png"
              alt="Ice-logo"
              className="w-[45px] h-[45px] mr-2 mt-1 rounded-full"
            />
            <p className="mt-2.5">{balance}</p>
            <p className="mt-2.5">KUB</p>
          </div>
          <div className="border-black border-2 rounded-full h-full p-2">
            <p className="text-black pl-2 pr-2.5">Wallet Address : {test}</p>
          </div>
        </div>
      </nav>
      <div className="bg-green-100 max-h-screen pt-7">
        {address ? (
          <div>
            <SwapForm />
          </div>
        ) : (
          <div className="rounded-3xl shadow-inner w-1/3 max-w-4xl p-12 mt-6 mx-auto bg-white border border-gray-400 z-20 relative">
            <div className="flex justify-center">
              <img
                src="/BareBear.png"
                alt="BareBear-logo"
                className="w-[200px] h-[200px] mr-4 "
              />
            </div>
            <div className="flex justify-center">
              <p className="text-black font-extrabold text-2xl">Connect Metamask</p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="rounded-3xl w-28 text-center bg-green-500 text-white px-4 py-2 m-5 "
                onClick={connectWallet}
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;