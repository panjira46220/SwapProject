import React, { useState } from "react";
import {
  getProvider,
  getSigner,
} from "../services/wallet-service";
import { parseEther } from "ethers/lib/utils";
import { Swapper__factory } from "../typechain";
import type { NextPage } from "next";
const swapForm: NextPage = () => {
  const [amount, setAmount] = useState("");
  const [convert, setConvert] = useState(false);

  const addressContract = "0x3A8e1e5669FeA47f03478E945946AadF6889fd5F";

  const getswapContractAtoC = async () => {
    const signer = getSigner();
    const swapContract = Swapper__factory.connect(addressContract, getProvider()).connect(signer);
    console.log(swapContract);
    if (convert == true) {
      swapContract.swapAforC(parseEther(amount));
    }
    else {
      swapContract.unswapCforA(parseEther(amount));
    }


    //await swapContract.swapAforC("120")
  }


  return (
    <div className="rounded-3xl shadow-lg w-1/3 px-12 py-1.5 mt-6 mx-auto bg-white border border-gray-400 z-20 relative">
      <form>
        <h3 className="text-3xl font-bold text-center ">Swap</h3>
        <div className="flex-col sm:flex-col justify-around">
          <p className="text-lg text-center text-gray-400 mb-3">
            Trade Tokens
          </p>
          <div className="border border-gray max-w-lg mb-4"></div>
          {convert ? (<>
            <div className="flex flex-row p-auto">
              <img
                src="/Ice.png"
                alt="Ice-logo"
                className="w-[50px] h-[50px] mr-4 rounded-full"
              />
              <div>
                <p className="text-black text-lg font-bold mt-2">BEAR</p>
              </div>
            </div>
            <div className="flex flex-col">
              <input
                className="p-3 mt-2 rounded border-2 border-black shadow w-full text-right"
                type="number"
                placeholder="0.0"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <div className="flex flex-row p-auto">

                <img
                  src="/Panda.png"
                  alt="Panda-logo"
                  className="w-[50px] h-[50px] mr-4 rounded-full"
                />
                <div>
                  <p className="text-black text-lg font-bold mt-2">PANDA</p>
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  className="p-3 mt-2 rounded border-2 border-black shadow w-full text-right"
                  type="text"
                  placeholder="0.0"
                  value={amount}
                />
              </div>
            </div>
          </>) : (<>
            {/* pandaมาbear */}
            <div className="flex flex-row p-auto">
              <img
                src="/Panda.png"
                alt="Panda-logo"
                className="w-[50px] h-[50px] mr-4 rounded-full"
              />
              <div>
                <p className="text-black text-lg font-bold mt-2">PANDA</p>
              </div>
            </div>
            <div className="flex flex-col">
              <input
                className="p-3 mt-2 rounded border-2 border-black shadow w-full text-right"
                type="number"
                placeholder="0.0"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <div className="flex flex-row p-auto">
                <img
                  src="/Ice.png"
                  alt="Ice-logo"
                  className="w-[50px] h-[50px] mr-4 rounded-full"
                />
                <div>
                  <p className="text-black text-lg font-bold mt-2">BEAR</p>
                </div>

              </div>
              <div className="flex flex-col">
                <input
                  className="p-3 mt-2 rounded border-2 border-black shadow w-full text-right"
                  type="text"
                  placeholder="0.0"
                  value={amount}
                />
              </div>
            </div>
          </>)}

        </div>
      </form>
      <div className="flex justify-center m-3">
        <button
          className="rounded-3xl bg-green-500 text-white px-10 py-4 mt-6 "
          onClick={() => getswapContractAtoC()}
        >
          Exchange
        </button>
        <button
          className="rounded-3xl bg-green-500 text-white px-12 py-4 mt-6 "
          onClick={() => setConvert(!convert)}
        >
          Convert
        </button>
      </div>
    </div>
  )
}

export default swapForm
