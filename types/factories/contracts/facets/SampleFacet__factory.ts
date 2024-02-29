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
  SampleFacet,
  SampleFacetInterface,
} from "../../../contracts/facets/SampleFacet";

const _abi = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
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
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
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
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102ba806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632baeceb7146100465780638ada066e14610050578063d09de08a14610093575b600080fd5b61004e61009b565b005b60408051602081019091527f8356a23936d9181410b4eb87f7ea6c98d92f0b339d590a092fe7e438640c3900549081905260405190815260200160405180910390f35b61004e610105565b6100a36101f8565b7f8356a23936d9181410b4eb87f7ea6c98d92f0b339d590a092fe7e438640c3900805460019082906000906100d9908490610258565b909155505060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005550565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320547fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c906001600160a01b031633146101b95760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c79206f776e657220697320616c6c6f77656420746f20706572666f726d60448201526b103a3434b99030b1ba34b7b760a11b606482015260840160405180910390fd5b7f8356a23936d9181410b4eb87f7ea6c98d92f0b339d590a092fe7e438640c3900805460019082906000906101ef908490610271565b90915550505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161023c57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b634e487b7160e01b600052601160045260246000fd5b8181038181111561026b5761026b610242565b92915050565b8082018082111561026b5761026b61024256fea26469706673582212204bd7f31b1028ccae84e9c86d03b6bc8b6d801f38f37ac4c57f3a4d2284136a2e64736f6c63430008140033";

type SampleFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleFacet__factory extends ContractFactory {
  constructor(...args: SampleFacetConstructorParams) {
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
      SampleFacet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SampleFacet__factory {
    return super.connect(runner) as SampleFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleFacetInterface {
    return new Interface(_abi) as SampleFacetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SampleFacet {
    return new Contract(address, _abi, runner) as unknown as SampleFacet;
  }
}
