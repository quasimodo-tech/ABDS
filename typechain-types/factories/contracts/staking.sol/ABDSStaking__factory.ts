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
  ABDSStaking,
  ABDSStakingInterface,
} from "../../../contracts/staking.sol/ABDSStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_abds",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdt",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "tokenType",
        type: "uint8",
      },
    ],
    name: "RewardsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "StakeDurationExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "apr",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
    ],
    name: "UnlockedStakesWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenType",
        type: "uint8",
      },
    ],
    name: "Claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "abdsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "additionaldays",
        type: "uint256",
      },
    ],
    name: "boost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getUserStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
        ],
        internalType: "struct ABDSStaking.Stake",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastRewardTime",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "stakeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapOracle",
    outputs: [
      {
        internalType: "contract IUniswapOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdcToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdtToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userStakes",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "apr",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516129a53803806129a5833981810160405281019061003291906101a2565b83600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050610209565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061016f82610144565b9050919050565b61017f81610164565b811461018a57600080fd5b50565b60008151905061019c81610176565b92915050565b600080600080608085870312156101bc576101bb61013f565b5b60006101ca8782880161018d565b94505060206101db8782880161018d565b93505060406101ec8782880161018d565b92505060606101fd8782880161018d565b91505092959194509250565b61278d806102186000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633ccfd60b116100715780633ccfd60b1461015257806340be7bec1461015c578063a98ad46c14610178578063b5d5b5fa14610196578063c8ff7b60146101c9578063cec695fa146101e7576100a9565b80630ae17544146100ae57806311eac855146100ca578063120c6c5b146100e85780633b5d441e146101065780633b7b618814610136575b600080fd5b6100c860048036038101906100c39190611b27565b610217565b005b6100d2610ded565b6040516100df9190611bd3565b60405180910390f35b6100f0610e13565b6040516100fd9190611c0f565b60405180910390f35b610120600480360381019061011b9190611c68565b610e39565b60405161012d9190611cae565b60405180910390f35b610150600480360381019061014b9190611cf5565b610e51565b005b61015a6110b0565b005b61017660048036038101906101719190611cf5565b6115fa565b005b61018061181b565b60405161018d9190611bd3565b60405180910390f35b6101b060048036038101906101ab9190611d35565b611841565b6040516101c09493929190611d75565b60405180910390f35b6101d161188e565b6040516101de9190611bd3565b60405180910390f35b61020160048036038101906101fc9190611d35565b6118b4565b60405161020e9190611e1e565b60405180910390f35b60038160ff16111561025e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025590611e96565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000805b828054905081101561051a578281815481106102c3576102c2611eb6565b5b906000526020600020906004020160010154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610506576201518083828154811061033257610331611eb6565b5b90600052602060002090600402016002015461034e9190611f14565b83828154811061036157610360611eb6565b5b90600052602060002090600402016001015461037d9190611f56565b42106104f2576000618e9484838154811061039b5761039a611eb6565b5b9060005260206000209060040201600201548584815481106103c0576103bf611eb6565b5b9060005260206000209060040201600301548685815481106103e5576103e4611eb6565b5b9060005260206000209060040201600001546104019190611f14565b61040b9190611f14565b6104159190611fb9565b905080836104239190611f56565b925083600185805490506104379190611fea565b8154811061044857610447611eb6565b5b906000526020600020906004020184838154811061046957610468611eb6565b5b906000526020600020906004020160008201548160000155600182015481600101556002820154816002015560038201548160030155905050838054806104b3576104b261201e565b5b60019003818190600052602060002090600402016000808201600090556001820160009055600282016000905560038201600090555050905550610501565b80806104fd9061204d565b9150505b610515565b80806105119061204d565b9150505b6102a4565b6000821161055d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610554906120e1565b60405180910390fd5b60008460ff16036107305781600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105c49190612110565b602060405180830381865afa1580156105e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106059190612140565b1015610646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063d906121b9565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016106a39291906121d9565b6020604051808303816000875af11580156106c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e6919061223a565b5042600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d53565b600060018560ff16036109bc576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638379d77f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d09190612140565b9050670de0b6b3a764000081856107e79190611f14565b6107f19190611fb9565b915081600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161084f9190612110565b602060405180830381865afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190612140565b10156108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c8906122b3565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b815260040161092e9291906121d9565b6020604051808303816000875af115801561094d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610971919061223a565b5042600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050610d51565b60028560ff1603610c02576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f8f382cd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5a9190612140565b9050670de0b6b3a76400008185610a719190611f14565b610a7b9190611fb9565b915081600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ad99190612110565b602060405180830381865afa158015610af6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1a9190612140565b1015610b5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b529061231f565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610bb89291906121d9565b6020604051808303816000875af1158015610bd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfb919061223a565b5050610d50565b60038560ff1603610d4f576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c589f7516040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca09190612140565b9050670de0b6b3a76400008185610cb79190611f14565b610cc19190611fb9565b915081471015610d06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfd9061238b565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610d4c573d6000803e3d6000fd5b50505b5b5b505b3373ffffffffffffffffffffffffffffffffffffffff167f648def1f275ff9ca633f05ca80873fe55291c29a7d1dbdc51a77dd1bca2409ce8386604051610d9b9291906123ba565b60405180910390a242600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090505481565b60008211610e94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8b9061242f565b60405180910390fd5b60008111610ed7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ece9061249b565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610f36939291906124bb565b6020604051808303816000875af1158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f79919061223a565b5060006113888311610f8e5760099050610fa7565b620186a08311610fa157600c9050610fa6565b600f90505b5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052808581526020014281526020018481526020018381525090806001815401808255809150506001900390600052602060002090600402016000909190919091506000820151816000015560208201518160010155604082015181600201556060820151816003015550503373ffffffffffffffffffffffffffffffffffffffff167fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed8484846040516110a3939291906124f2565b60405180910390a2505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008060005b838054905081101561138d576201518084828154811061111b5761111a611eb6565b5b9060005260206000209060040201600201546111379190611f14565b84828154811061114a57611149611eb6565b5b9060005260206000209060040201600101546111669190611f56565b42106113795783818154811061117f5761117e611eb6565b5b9060005260206000209060040201600001548361119c9190611f56565b92508381815481106111b1576111b0611eb6565b5b906000526020600020906004020160010154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156112ad576000618e9485838154811061122157611220611eb6565b5b90600052602060002090600402016002015486848154811061124657611245611eb6565b5b90600052602060002090600402016003015487858154811061126b5761126a611eb6565b5b9060005260206000209060040201600001546112879190611f14565b6112919190611f14565b61129b9190611fb9565b905080836112a99190611f56565b9250505b83600185805490506112bf9190611fea565b815481106112d0576112cf611eb6565b5b90600052602060002090600402018482815481106112f1576112f0611eb6565b5b9060005260206000209060040201600082015481600001556001820154816001015560028201548160020155600382015481600301559050508380548061133b5761133a61201e565b5b600190038181906000526020600020906004020160008082016000905560018201600090556002820160009055600382016000905550509055611388565b80806113849061204d565b9150505b6110f8565b600083116113d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c790612575565b60405180910390fd5b600082846113de9190611f56565b905080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161143c9190612110565b602060405180830381865afa158015611459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147d9190612140565b10156114be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b5906121b9565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161151b9291906121d9565b6020604051808303816000875af115801561153a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155e919061223a565b5042600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fa78d689a3316920872c8d1699886734360c123343e9dca401d40f06957098a7e85856040516115eb929190612595565b60405180910390a25050505050565b6000811161163d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163490612630565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061168f5761168e611eb6565b5b906000526020600020906004020190506116ac81600101546119d8565b6116b981600201546119d8565b6116c2426119d8565b426201518082600201546116d69190611f14565b82600101546116e59190611f56565b11611725576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171c9061269c565b60405180910390fd5b818160020160008282546117399190611f56565b9250508190555061016d821061176a57600881600301600082825461175e9190611f56565b925050819055506117b1565b60b682106117935760058160030160008282546117879190611f56565b925050819055506117b0565b60028160030160008282546117a89190611f56565b925050819055505b5b6117be81600301546119d8565b3373ffffffffffffffffffffffffffffffffffffffff167f0bc5df63ee9fbd55255e14bdee0362246bd390df68a770e2ac2f7372fce371e68260000154836002015460405161180e929190612595565b60405180910390a2505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000602052816000526040600020818154811061185d57600080fd5b9060005260206000209060040201600091509150508060000154908060010154908060020154908060030154905084565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6118bc611ab7565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050821061193f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193690612708565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061198f5761198e611eb6565b5b9060005260206000209060040201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050905092915050565b611a6e816040516024016119ec9190611cae565b6040516020818303038152906040527ff82c50f1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611a71565b50565b611a8881611a80611a8b611aac565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b611adf819050919050565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b611ae7612728565b565b600080fd5b600060ff82169050919050565b611b0481611aee565b8114611b0f57600080fd5b50565b600081359050611b2181611afb565b92915050565b600060208284031215611b3d57611b3c611ae9565b5b6000611b4b84828501611b12565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611b99611b94611b8f84611b54565b611b74565b611b54565b9050919050565b6000611bab82611b7e565b9050919050565b6000611bbd82611ba0565b9050919050565b611bcd81611bb2565b82525050565b6000602082019050611be86000830184611bc4565b92915050565b6000611bf982611ba0565b9050919050565b611c0981611bee565b82525050565b6000602082019050611c246000830184611c00565b92915050565b6000611c3582611b54565b9050919050565b611c4581611c2a565b8114611c5057600080fd5b50565b600081359050611c6281611c3c565b92915050565b600060208284031215611c7e57611c7d611ae9565b5b6000611c8c84828501611c53565b91505092915050565b6000819050919050565b611ca881611c95565b82525050565b6000602082019050611cc36000830184611c9f565b92915050565b611cd281611c95565b8114611cdd57600080fd5b50565b600081359050611cef81611cc9565b92915050565b60008060408385031215611d0c57611d0b611ae9565b5b6000611d1a85828601611ce0565b9250506020611d2b85828601611ce0565b9150509250929050565b60008060408385031215611d4c57611d4b611ae9565b5b6000611d5a85828601611c53565b9250506020611d6b85828601611ce0565b9150509250929050565b6000608082019050611d8a6000830187611c9f565b611d976020830186611c9f565b611da46040830185611c9f565b611db16060830184611c9f565b95945050505050565b611dc381611c95565b82525050565b608082016000820151611ddf6000850182611dba565b506020820151611df26020850182611dba565b506040820151611e056040850182611dba565b506060820151611e186060850182611dba565b50505050565b6000608082019050611e336000830184611dc9565b92915050565b600082825260208201905092915050565b7f496e76616c696420746f6b656e20747970650000000000000000000000000000600082015250565b6000611e80601283611e39565b9150611e8b82611e4a565b602082019050919050565b60006020820190508181036000830152611eaf81611e73565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f1f82611c95565b9150611f2a83611c95565b9250828202611f3881611c95565b91508282048414831517611f4f57611f4e611ee5565b5b5092915050565b6000611f6182611c95565b9150611f6c83611c95565b9250828201905080821115611f8457611f83611ee5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611fc482611c95565b9150611fcf83611c95565b925082611fdf57611fde611f8a565b5b828204905092915050565b6000611ff582611c95565b915061200083611c95565b925082820390508181111561201857612017611ee5565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600061205882611c95565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361208a57612089611ee5565b5b600182019050919050565b7f4e6f207265776172647320617661696c61626c6520746f20636c61696d000000600082015250565b60006120cb601d83611e39565b91506120d682612095565b602082019050919050565b600060208201905081810360008301526120fa816120be565b9050919050565b61210a81611c2a565b82525050565b60006020820190506121256000830184612101565b92915050565b60008151905061213a81611cc9565b92915050565b60006020828403121561215657612155611ae9565b5b60006121648482850161212b565b91505092915050565b7f496e73756666696369656e7420414244532062616c616e636500000000000000600082015250565b60006121a3601983611e39565b91506121ae8261216d565b602082019050919050565b600060208201905081810360008301526121d281612196565b9050919050565b60006040820190506121ee6000830185612101565b6121fb6020830184611c9f565b9392505050565b60008115159050919050565b61221781612202565b811461222257600080fd5b50565b6000815190506122348161220e565b92915050565b6000602082840312156122505761224f611ae9565b5b600061225e84828501612225565b91505092915050565b7f496e73756666696369656e7420555344542062616c616e636500000000000000600082015250565b600061229d601983611e39565b91506122a882612267565b602082019050919050565b600060208201905081810360008301526122cc81612290565b9050919050565b7f496e73756666696369656e7420555344432062616c616e636500000000000000600082015250565b6000612309601983611e39565b9150612314826122d3565b602082019050919050565b60006020820190508181036000830152612338816122fc565b9050919050565b7f496e73756666696369656e742045746865722062616c616e6365000000000000600082015250565b6000612375601a83611e39565b91506123808261233f565b602082019050919050565b600060208201905081810360008301526123a481612368565b9050919050565b6123b481611aee565b82525050565b60006040820190506123cf6000830185611c9f565b6123dc60208301846123ab565b9392505050565b7f416d6f756e74206d7573742062652067726561746572207468616e2030000000600082015250565b6000612419601d83611e39565b9150612424826123e3565b602082019050919050565b600060208201905081810360008301526124488161240c565b9050919050565b7f4475726174696f6e206d7573742062652067726561746572207468616e203000600082015250565b6000612485601f83611e39565b91506124908261244f565b602082019050919050565b600060208201905081810360008301526124b481612478565b9050919050565b60006060820190506124d06000830186612101565b6124dd6020830185612101565b6124ea6040830184611c9f565b949350505050565b60006060820190506125076000830186611c9f565b6125146020830185611c9f565b6125216040830184611c9f565b949350505050565b7f4e6f20756e6c6f636b6564207374616b657320746f2077697468647261770000600082015250565b600061255f601e83611e39565b915061256a82612529565b602082019050919050565b6000602082019050818103600083015261258e81612552565b9050919050565b60006040820190506125aa6000830185611c9f565b6125b76020830184611c9f565b9392505050565b7f4164646974696f6e616c2064617973206d75737420626520677265617465722060008201527f7468616e20300000000000000000000000000000000000000000000000000000602082015250565b600061261a602683611e39565b9150612625826125be565b604082019050919050565b600060208201905081810360008301526126498161260d565b9050919050565b7f6c6f636b2074696d652070617373656400000000000000000000000000000000600082015250565b6000612686601083611e39565b915061269182612650565b602082019050919050565b600060208201905081810360008301526126b581612679565b9050919050565b7f496e76616c696420696e64657800000000000000000000000000000000000000600082015250565b60006126f2600d83611e39565b91506126fd826126bc565b602082019050919050565b60006020820190508181036000830152612721816126e5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea264697066735822122049806f5cbeb50bc74259426685d3a9f606b74befa3d2533d72a5e89d2c54f40d64736f6c634300081b0033";

type ABDSStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ABDSStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ABDSStaking__factory extends ContractFactory {
  constructor(...args: ABDSStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _abds: AddressLike,
    _usdt: AddressLike,
    _usdc: AddressLike,
    _oracle: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _abds,
      _usdt,
      _usdc,
      _oracle,
      overrides || {}
    );
  }
  override deploy(
    _abds: AddressLike,
    _usdt: AddressLike,
    _usdc: AddressLike,
    _oracle: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _abds,
      _usdt,
      _usdc,
      _oracle,
      overrides || {}
    ) as Promise<
      ABDSStaking & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ABDSStaking__factory {
    return super.connect(runner) as ABDSStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ABDSStakingInterface {
    return new Interface(_abi) as ABDSStakingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ABDSStaking {
    return new Contract(address, _abi, runner) as unknown as ABDSStaking;
  }
}
