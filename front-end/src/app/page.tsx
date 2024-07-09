"use client";

import { useEffect, useState } from "react";
import { axiosConfig } from "@/libs/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { userSelectTokens } from "@/libs/slices/tokensSlices";

interface Token {
  address: string;
  symbol: string;
  name: string;
  chainId: number;
  decimals: number;
  logoURI: string;
}

export default function Home() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const dispatch = useDispatch();
  const { selectedToken } = useSelector((state: RootState) => state.tokens);

  console.log(selectedToken, "show");

  const fetchTokens = async () => {
    try {
      const token = await axiosConfig.get("/tokens/all");
      setTokens(token.data.recommendedTokens);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTokenSelection = (token: Token) => {
    dispatch(userSelectTokens(token));
  };

  const isSelected = (tokenAddress: string) => {
    return selectedToken.some((ele: Token) => ele.address === tokenAddress);
  };

  useEffect(() => {
    fetchTokens();
  }, []);

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {tokens.map((token, index) => (
          <div
            key={index}
            className={` shadow-md rounded-lg p-4 cursor-pointer text-black ${
              isSelected(token.address) ? "bg-blue-200 " : "bg-white"
            }`}
            onClick={() => handleTokenSelection(token)}
          >
            <img
              src={token.logoURI}
              alt={token.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">{token.name}</h2>
            <p className="text-gray-600 text-center">{token.symbol}</p>
            <p className="text-gray-500 text-center">
              Chain ID: {token.chainId}
            </p>
            <p className="text-gray-500 text-center">
              Decimals: {token.decimals}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
