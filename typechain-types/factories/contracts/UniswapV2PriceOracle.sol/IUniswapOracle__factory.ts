/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUniswapOracle,
  IUniswapOracleInterface,
} from "../../../contracts/UniswapV2PriceOracle.sol/IUniswapOracle";

const _abi = [
  {
    inputs: [],
    name: "getABDSPriceInETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getABDSPriceInUSDC",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getABDSPriceInUSDT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUniswapOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapOracleInterface {
    return new Interface(_abi) as IUniswapOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUniswapOracle {
    return new Contract(address, _abi, runner) as unknown as IUniswapOracle;
  }
}
