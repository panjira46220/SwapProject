/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SwapperInterface extends ethers.utils.Interface {
  functions: {
    "swap(address,uint256)": FunctionFragment;
    "swapAforC(uint256)": FunctionFragment;
    "swapBforC(uint256)": FunctionFragment;
    "tokenA()": FunctionFragment;
    "tokenB()": FunctionFragment;
    "tokenC()": FunctionFragment;
    "unswap(address,uint256)": FunctionFragment;
    "unswapCforA(uint256)": FunctionFragment;
    "unswapCforB(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapAforC",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapBforC",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tokenA", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenB", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unswap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unswapCforA",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unswapCforB",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapAforC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapBforC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unswap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unswapCforA",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unswapCforB",
    data: BytesLike
  ): Result;

  events: {};
}

export class Swapper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SwapperInterface;

  functions: {
    swap(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapAforC(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapBforC(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenA(overrides?: CallOverrides): Promise<[string]>;

    tokenB(overrides?: CallOverrides): Promise<[string]>;

    tokenC(overrides?: CallOverrides): Promise<[string]>;

    unswap(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unswapCforA(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unswapCforB(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    token_: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapAforC(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapBforC(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenA(overrides?: CallOverrides): Promise<string>;

  tokenB(overrides?: CallOverrides): Promise<string>;

  tokenC(overrides?: CallOverrides): Promise<string>;

  unswap(
    token_: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unswapCforA(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unswapCforB(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      token_: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapAforC(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    swapBforC(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    tokenA(overrides?: CallOverrides): Promise<string>;

    tokenB(overrides?: CallOverrides): Promise<string>;

    tokenC(overrides?: CallOverrides): Promise<string>;

    unswap(
      token_: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unswapCforA(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    unswapCforB(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    swap(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapAforC(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapBforC(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenA(overrides?: CallOverrides): Promise<BigNumber>;

    tokenB(overrides?: CallOverrides): Promise<BigNumber>;

    tokenC(overrides?: CallOverrides): Promise<BigNumber>;

    unswap(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unswapCforA(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unswapCforB(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapAforC(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapBforC(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unswap(
      token_: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unswapCforA(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unswapCforB(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}