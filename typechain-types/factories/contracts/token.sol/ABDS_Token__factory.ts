/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ABDS_Token,
  ABDS_TokenInterface,
} from "../../../contracts/token.sol/ABDS_Token";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b503360016000819055506000600160006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620000ab5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620000a2919062000351565b60405180910390fd5b620000bc81620000f860201b60201c565b50620000f233601260ff16600a620000d59190620004fb565b6305f5e100620000e691906200054c565b620001bb60201b60201c565b62000683565b600060018054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200022d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200022490620005f8565b60405180910390fd5b80600260008282546200024191906200061a565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200029991906200061a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000300919062000666565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000339826200030c565b9050919050565b6200034b816200032c565b82525050565b600060208201905062000368600083018462000340565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620003fc57808604811115620003d457620003d36200036e565b5b6001851615620003e45780820291505b8081029050620003f4856200039d565b9450620003b4565b94509492505050565b600082620004175760019050620004ea565b81620004275760009050620004ea565b81600181146200044057600281146200044b5762000481565b6001915050620004ea565b60ff84111562000460576200045f6200036e565b5b8360020a9150848211156200047a57620004796200036e565b5b50620004ea565b5060208310610133831016604e8410600b8410161715620004bb5782820a905083811115620004b557620004b46200036e565b5b620004ea565b620004ca8484846001620003aa565b92509050818404811115620004e457620004e36200036e565b5b81810290505b9392505050565b6000819050919050565b60006200050882620004f1565b91506200051583620004f1565b9250620005447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000405565b905092915050565b60006200055982620004f1565b91506200056683620004f1565b92508282026200057681620004f1565b9150828204841483151762000590576200058f6200036e565b5b5092915050565b600082825260208201905092915050565b7f414244533a206d696e7420746f20746865207a65726f20616464726573730000600082015250565b6000620005e0601e8362000597565b9150620005ed82620005a8565b602082019050919050565b600060208201905081810360008301526200061381620005d1565b9050919050565b60006200062782620004f1565b91506200063483620004f1565b92508282019050808211156200064f576200064e6200036e565b5b92915050565b6200066081620004f1565b82525050565b60006020820190506200067d600083018462000655565b92915050565b6115e280620006936000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b4114610284578063a457c2d7146102a2578063a9059cbb146102d2578063dd62ed3e14610302578063f2fde38b146103325761010b565b806370a0823114610222578063715018a6146102525780638456cb591461025c5780638da5cb5b146102665761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca5780633f4ba83a146101fa5780635c975abb146102045761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b61011861034e565b6040516101259190610fbf565b60405180910390f35b6101486004803603810190610143919061107a565b610387565b60405161015591906110d5565b60405180910390f35b6101666103b6565b60405161017391906110ff565b60405180910390f35b6101966004803603810190610191919061111a565b6103c0565b6040516101a391906110d5565b60405180910390f35b6101b4610482565b6040516101c19190611189565b60405180910390f35b6101e460048036038101906101df919061107a565b610487565b6040516101f191906110d5565b60405180910390f35b61020261052d565b005b61020c61053f565b60405161021991906110d5565b60405180910390f35b61023c600480360381019061023791906111a4565b610556565b60405161024991906110ff565b60405180910390f35b61025a61059f565b005b6102646105b3565b005b61026e6105c5565b60405161027b91906111e0565b60405180910390f35b61028c6105ed565b6040516102999190610fbf565b60405180910390f35b6102bc60048036038101906102b7919061107a565b610626565b6040516102c991906110d5565b60405180910390f35b6102ec60048036038101906102e7919061107a565b6106cc565b6040516102f991906110d5565b60405180910390f35b61031c600480360381019061031791906111fb565b6106fb565b60405161032991906110ff565b60405180910390f35b61034c600480360381019061034791906111a4565b610782565b005b6040518060400160405280600a81526020017f4142445320546f6b656e0000000000000000000000000000000000000000000081525081565b6000610391610808565b610399610849565b6103a433848461088f565b600190506103b0610a58565b92915050565b6000600254905090565b60006103ca610808565b6103d2610849565b6103dd848484610a62565b61046f843384600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461046a919061126a565b61088f565b6001905061047b610a58565b9392505050565b601281565b6000610491610808565b610523338484600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461051e919061129e565b61088f565b6001905092915050565b610535610cd8565b61053d610d5f565b565b6000600160009054906101000a900460ff16905090565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105a7610cd8565b6105b16000610dc2565b565b6105bb610cd8565b6105c3610e85565b565b600060018054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6040518060400160405280600481526020017f414244530000000000000000000000000000000000000000000000000000000081525081565b6000610630610808565b6106c2338484600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106bd919061126a565b61088f565b6001905092915050565b60006106d6610808565b6106de610849565b6106e9338484610a62565b600190506106f5610a58565b92915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61078a610cd8565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107fc5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107f391906111e0565b60405180910390fd5b61080581610dc2565b50565b61081061053f565b15610847576040517fd93c066500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600260005403610885576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f590611344565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361096d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610964906113d6565b60405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a4b91906110ff565b60405180910390a3505050565b6001600081905550565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ad1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac890611468565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b37906114fa565b60405180910390fd5b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610bc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb99061158c565b60405180910390fd5b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c11919061126a565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c67919061129e565b925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ccb91906110ff565b60405180910390a3505050565b610ce0610ee7565b73ffffffffffffffffffffffffffffffffffffffff16610cfe6105c5565b73ffffffffffffffffffffffffffffffffffffffff1614610d5d57610d21610ee7565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610d5491906111e0565b60405180910390fd5b565b610d67610eef565b6000600160006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610dab610ee7565b604051610db891906111e0565b60405180910390a1565b600060018054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816001806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e8d610808565b60018060006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ed0610ee7565b604051610edd91906111e0565b60405180910390a1565b600033905090565b610ef761053f565b610f2d576040517f8dfc202b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f69578082015181840152602081019050610f4e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f9182610f2f565b610f9b8185610f3a565b9350610fab818560208601610f4b565b610fb481610f75565b840191505092915050565b60006020820190508181036000830152610fd98184610f86565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061101182610fe6565b9050919050565b61102181611006565b811461102c57600080fd5b50565b60008135905061103e81611018565b92915050565b6000819050919050565b61105781611044565b811461106257600080fd5b50565b6000813590506110748161104e565b92915050565b6000806040838503121561109157611090610fe1565b5b600061109f8582860161102f565b92505060206110b085828601611065565b9150509250929050565b60008115159050919050565b6110cf816110ba565b82525050565b60006020820190506110ea60008301846110c6565b92915050565b6110f981611044565b82525050565b600060208201905061111460008301846110f0565b92915050565b60008060006060848603121561113357611132610fe1565b5b60006111418682870161102f565b93505060206111528682870161102f565b925050604061116386828701611065565b9150509250925092565b600060ff82169050919050565b6111838161116d565b82525050565b600060208201905061119e600083018461117a565b92915050565b6000602082840312156111ba576111b9610fe1565b5b60006111c88482850161102f565b91505092915050565b6111da81611006565b82525050565b60006020820190506111f560008301846111d1565b92915050565b6000806040838503121561121257611211610fe1565b5b60006112208582860161102f565b92505060206112318582860161102f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061127582611044565b915061128083611044565b92508282039050818111156112985761129761123b565b5b92915050565b60006112a982611044565b91506112b483611044565b92508282019050808211156112cc576112cb61123b565b5b92915050565b7f414244533a20617070726f76652066726f6d20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061132e602383610f3a565b9150611339826112d2565b604082019050919050565b6000602082019050818103600083015261135d81611321565b9050919050565b7f414244533a20617070726f766520746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006113c0602183610f3a565b91506113cb82611364565b604082019050919050565b600060208201905081810360008301526113ef816113b3565b9050919050565b7f414244533a207472616e736665722066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611452602483610f3a565b915061145d826113f6565b604082019050919050565b6000602082019050818103600083015261148181611445565b9050919050565b7f414244533a207472616e7366657220746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006114e4602283610f3a565b91506114ef82611488565b604082019050919050565b60006020820190508181036000830152611513816114d7565b9050919050565b7f414244533a207472616e7366657220616d6f756e74206578636565647320626160008201527f6c616e6365000000000000000000000000000000000000000000000000000000602082015250565b6000611576602583610f3a565b91506115818261151a565b604082019050919050565b600060208201905081810360008301526115a581611569565b905091905056fea2646970667358221220f0c2d9e646636550575f80a7dd5ed2a52fc0e62e9545b69fe7a0e0e48d22168764736f6c63430008150033";

type ABDS_TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ABDS_TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ABDS_Token__factory extends ContractFactory {
  constructor(...args: ABDS_TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ABDS_Token & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ABDS_Token__factory {
    return super.connect(runner) as ABDS_Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ABDS_TokenInterface {
    return new Interface(_abi) as ABDS_TokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ABDS_Token {
    return new Contract(address, _abi, runner) as unknown as ABDS_Token;
  }
}
