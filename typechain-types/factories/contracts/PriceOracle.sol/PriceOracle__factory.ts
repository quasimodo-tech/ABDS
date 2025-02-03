/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  PriceOracle,
  PriceOracleInterface,
} from "../../../contracts/PriceOracle.sol/PriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_abdsUsdFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdtUsdFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdcUsdFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getABDSUSDCPrice",
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
    name: "getABDSUSDTPrice",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a8a380380610a8a833981810160405281019061003291906101ca565b61004c67ee0df9506c97da8d60c01b61016460201b60201c565b6100666702324d0df7c0931e60c01b61016460201b60201c565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100c0678dd0e22fcf759bac60c01b61016460201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061011b6750b175d29c6351eb60c01b61016460201b60201c565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505061021d565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101978261016c565b9050919050565b6101a78161018c565b81146101b257600080fd5b50565b6000815190506101c48161019e565b92915050565b6000806000606084860312156101e3576101e2610167565b5b60006101f1868287016101b5565b9350506020610202868287016101b5565b9250506040610213868287016101b5565b9150509250925092565b61085e8061022c6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806337d1eb6c1461003b5780634168849c14610059575b600080fd5b610043610077565b604051610050919061059b565b60405180910390f35b6100616102fb565b60405161006e919061059b565b60405180910390f35b600061008d671248d41c56e7a66960c01b61057f565b6100a16743677425ed9c258360c01b61057f565b6100b5678608d93e6dc11b7660c01b61057f565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610123573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610147919061065f565b50505091505061016167d85d4c8fb321d25360c01b61057f565b6101756784fa3a43a34d6c7060c01b61057f565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156101e4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610208919061065f565b50505091505061022267e5871b9913a851c460c01b61057f565b6102366789d61f8949a303c160c01b61057f565b61024a67e2d9b67924d6d96760c01b61057f565b60008213801561025a5750600081135b610299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029090610737565b60405180910390fd5b6102ad67df348d544baeb23a60c01b61057f565b6102c167ce85dd0fed32e8b060c01b61057f565b6102d56724ed4d3db1db292660c01b61057f565b80670de0b6b3a7640000836102ea9190610786565b6102f491906107f7565b9250505090565b600061031167c49be6c29730dbc160c01b61057f565b6103256711b171f5147bad9160c01b61057f565b6103396791cb470acf6a818960c01b61057f565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156103a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cb919061065f565b5050509150506103e567063a0e624437d6a960c01b61057f565b6103f967f0a478d994ed899360c01b61057f565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610468573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048c919061065f565b5050509150506104a6671d00a0fd0a0439b460c01b61057f565b6104ba67d0697fc06ebbf60e60c01b61057f565b6104ce67118410b0513b689560c01b61057f565b6000821380156104de5750600081135b61051d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051490610737565b60405180910390fd5b61053167dced1ab9a745a8f860c01b61057f565b61054567cb8b7d5b8828587060c01b61057f565b610559676d70ed9527ee4d1860c01b61057f565b80670de0b6b3a76400008361056e9190610786565b61057891906107f7565b9250505090565b50565b6000819050919050565b61059581610582565b82525050565b60006020820190506105b0600083018461058c565b92915050565b600080fd5b600069ffffffffffffffffffff82169050919050565b6105da816105bb565b81146105e557600080fd5b50565b6000815190506105f7816105d1565b92915050565b6000819050919050565b610610816105fd565b811461061b57600080fd5b50565b60008151905061062d81610607565b92915050565b61063c81610582565b811461064757600080fd5b50565b60008151905061065981610633565b92915050565b600080600080600060a0868803121561067b5761067a6105b6565b5b6000610689888289016105e8565b955050602061069a8882890161061e565b94505060406106ab8882890161064a565b93505060606106bc8882890161064a565b92505060806106cd888289016105e8565b9150509295509295909350565b600082825260208201905092915050565b7f496e76616c696420707269636520666565642064617461000000000000000000600082015250565b60006107216017836106da565b915061072c826106eb565b602082019050919050565b6000602082019050818103600083015261075081610714565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061079182610582565b915061079c83610582565b92508282026107aa81610582565b915082820484148315176107c1576107c0610757565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061080282610582565b915061080d83610582565b92508261081d5761081c6107c8565b5b82820490509291505056fea26469706673582212208f7802e5030ee07856c7a26a88941d9f25ebd414deed00a7179c1d61cf82c1e064736f6c634300081b0033";

type PriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceOracle__factory extends ContractFactory {
  constructor(...args: PriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _abdsUsdFeed: AddressLike,
    _usdtUsdFeed: AddressLike,
    _usdcUsdFeed: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _abdsUsdFeed,
      _usdtUsdFeed,
      _usdcUsdFeed,
      overrides || {}
    );
  }
  override deploy(
    _abdsUsdFeed: AddressLike,
    _usdtUsdFeed: AddressLike,
    _usdcUsdFeed: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _abdsUsdFeed,
      _usdtUsdFeed,
      _usdcUsdFeed,
      overrides || {}
    ) as Promise<
      PriceOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PriceOracle__factory {
    return super.connect(runner) as PriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceOracleInterface {
    return new Interface(_abi) as PriceOracleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PriceOracle {
    return new Contract(address, _abi, runner) as unknown as PriceOracle;
  }
}
