/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace ProcessRegistry {
  export type EncryptionKeyStruct = { x: BigNumberish; y: BigNumberish };

  export type EncryptionKeyStructOutput = [x: bigint, y: bigint] & {
    x: bigint;
    y: bigint;
  };

  export type BallotModeStruct = {
    costFromWeight: boolean;
    forceUniqueness: boolean;
    maxCount: BigNumberish;
    costExponent: BigNumberish;
    maxValue: BigNumberish;
    minValue: BigNumberish;
    maxTotalCost: BigNumberish;
    minTotalCost: BigNumberish;
  };

  export type BallotModeStructOutput = [
    costFromWeight: boolean,
    forceUniqueness: boolean,
    maxCount: bigint,
    costExponent: bigint,
    maxValue: bigint,
    minValue: bigint,
    maxTotalCost: bigint,
    minTotalCost: bigint
  ] & {
    costFromWeight: boolean;
    forceUniqueness: boolean;
    maxCount: bigint;
    costExponent: bigint;
    maxValue: bigint;
    minValue: bigint;
    maxTotalCost: bigint;
    minTotalCost: bigint;
  };

  export type CensusStruct = {
    censusOrigin: BigNumberish;
    maxVotes: BigNumberish;
    censusRoot: BytesLike;
    censusURI: string;
  };

  export type CensusStructOutput = [
    censusOrigin: bigint,
    maxVotes: bigint,
    censusRoot: string,
    censusURI: string
  ] & {
    censusOrigin: bigint;
    maxVotes: bigint;
    censusRoot: string;
    censusURI: string;
  };

  export type ProcessStruct = {
    status: BigNumberish;
    organizationId: AddressLike;
    encryptionKey: ProcessRegistry.EncryptionKeyStruct;
    latestStateRoot: BytesLike;
    result: BigNumberish[];
    startTime: BigNumberish;
    duration: BigNumberish;
    metadataURI: string;
    ballotMode: ProcessRegistry.BallotModeStruct;
    census: ProcessRegistry.CensusStruct;
  };

  export type ProcessStructOutput = [
    status: bigint,
    organizationId: string,
    encryptionKey: ProcessRegistry.EncryptionKeyStructOutput,
    latestStateRoot: string,
    result: bigint[],
    startTime: bigint,
    duration: bigint,
    metadataURI: string,
    ballotMode: ProcessRegistry.BallotModeStructOutput,
    census: ProcessRegistry.CensusStructOutput
  ] & {
    status: bigint;
    organizationId: string;
    encryptionKey: ProcessRegistry.EncryptionKeyStructOutput;
    latestStateRoot: string;
    result: bigint[];
    startTime: bigint;
    duration: bigint;
    metadataURI: string;
    ballotMode: ProcessRegistry.BallotModeStructOutput;
    census: ProcessRegistry.CensusStructOutput;
  };
}

export interface ProcessRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "chainID"
      | "endProcess"
      | "getProcess"
      | "initialize"
      | "newProcess"
      | "organizationRegistry"
      | "owner"
      | "processCount"
      | "processes"
      | "proxiableUUID"
      | "renounceOwnership"
      | "setProcessCensus"
      | "setProcessDuration"
      | "setProcessResult"
      | "setProcessStatus"
      | "submitStateTransition"
      | "transferOwnership"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CensusUpdated"
      | "Initialized"
      | "OwnershipTransferred"
      | "ProcessCreated"
      | "ProcessDurationChanged"
      | "ProcessStateRootUpdated"
      | "ProcessStatusChanged"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "chainID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "endProcess",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProcess",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "newProcess",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      ProcessRegistry.BallotModeStruct,
      ProcessRegistry.CensusStruct,
      string,
      AddressLike,
      BytesLike,
      ProcessRegistry.EncryptionKeyStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "organizationRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "processes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setProcessCensus",
    values: [BytesLike, ProcessRegistry.CensusStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setProcessDuration",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setProcessResult",
    values: [BytesLike, BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setProcessStatus",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitStateTransition",
    values: [BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chainID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endProcess", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getProcess", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newProcess", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "organizationRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "processes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProcessCensus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProcessDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProcessResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProcessStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitStateTransition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace CensusUpdatedEvent {
  export type InputTuple = [
    processID: BytesLike,
    censusRoot: BytesLike,
    censusURI: string,
    maxVotes: BigNumberish
  ];
  export type OutputTuple = [
    processID: string,
    censusRoot: string,
    censusURI: string,
    maxVotes: bigint
  ];
  export interface OutputObject {
    processID: string;
    censusRoot: string;
    censusURI: string;
    maxVotes: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProcessCreatedEvent {
  export type InputTuple = [processID: BytesLike, creator: AddressLike];
  export type OutputTuple = [processID: string, creator: string];
  export interface OutputObject {
    processID: string;
    creator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProcessDurationChangedEvent {
  export type InputTuple = [processID: BytesLike, duration: BigNumberish];
  export type OutputTuple = [processID: string, duration: bigint];
  export interface OutputObject {
    processID: string;
    duration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProcessStateRootUpdatedEvent {
  export type InputTuple = [processID: BytesLike, newStateRoot: BytesLike];
  export type OutputTuple = [processID: string, newStateRoot: string];
  export interface OutputObject {
    processID: string;
    newStateRoot: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProcessStatusChangedEvent {
  export type InputTuple = [processID: BytesLike, newStatus: BigNumberish];
  export type OutputTuple = [processID: string, newStatus: bigint];
  export interface OutputObject {
    processID: string;
    newStatus: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ProcessRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): ProcessRegistry;
  waitForDeployment(): Promise<this>;

  interface: ProcessRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  chainID: TypedContractMethod<[], [string], "view">;

  endProcess: TypedContractMethod<
    [_processID: BytesLike],
    [void],
    "nonpayable"
  >;

  getProcess: TypedContractMethod<
    [_processID: BytesLike],
    [ProcessRegistry.ProcessStructOutput],
    "view"
  >;

  initialize: TypedContractMethod<
    [_chainID: string, _organizationRegistry: AddressLike],
    [void],
    "nonpayable"
  >;

  newProcess: TypedContractMethod<
    [
      _status: BigNumberish,
      _startTime: BigNumberish,
      _duration: BigNumberish,
      _ballotMode: ProcessRegistry.BallotModeStruct,
      _census: ProcessRegistry.CensusStruct,
      _metadata: string,
      _organizationID: AddressLike,
      _processID: BytesLike,
      _encryptionKey: ProcessRegistry.EncryptionKeyStruct,
      _initStateRoot: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  organizationRegistry: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  processCount: TypedContractMethod<[], [bigint], "view">;

  processes: TypedContractMethod<
    [arg0: BytesLike],
    [
      [
        bigint,
        string,
        ProcessRegistry.EncryptionKeyStructOutput,
        string,
        bigint,
        bigint,
        string,
        ProcessRegistry.BallotModeStructOutput,
        ProcessRegistry.CensusStructOutput
      ] & {
        status: bigint;
        organizationId: string;
        encryptionKey: ProcessRegistry.EncryptionKeyStructOutput;
        latestStateRoot: string;
        startTime: bigint;
        duration: bigint;
        metadataURI: string;
        ballotMode: ProcessRegistry.BallotModeStructOutput;
        census: ProcessRegistry.CensusStructOutput;
      }
    ],
    "view"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setProcessCensus: TypedContractMethod<
    [_processID: BytesLike, _census: ProcessRegistry.CensusStruct],
    [void],
    "nonpayable"
  >;

  setProcessDuration: TypedContractMethod<
    [_processID: BytesLike, _duration: BigNumberish],
    [void],
    "nonpayable"
  >;

  setProcessResult: TypedContractMethod<
    [_processID: BytesLike, _result: BigNumberish[], _proof: BytesLike],
    [void],
    "nonpayable"
  >;

  setProcessStatus: TypedContractMethod<
    [_processID: BytesLike, _newStatus: BigNumberish],
    [void],
    "nonpayable"
  >;

  submitStateTransition: TypedContractMethod<
    [
      _processID: BytesLike,
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "chainID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "endProcess"
  ): TypedContractMethod<[_processID: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getProcess"
  ): TypedContractMethod<
    [_processID: BytesLike],
    [ProcessRegistry.ProcessStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_chainID: string, _organizationRegistry: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "newProcess"
  ): TypedContractMethod<
    [
      _status: BigNumberish,
      _startTime: BigNumberish,
      _duration: BigNumberish,
      _ballotMode: ProcessRegistry.BallotModeStruct,
      _census: ProcessRegistry.CensusStruct,
      _metadata: string,
      _organizationID: AddressLike,
      _processID: BytesLike,
      _encryptionKey: ProcessRegistry.EncryptionKeyStruct,
      _initStateRoot: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "organizationRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "processCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "processes"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [
        bigint,
        string,
        ProcessRegistry.EncryptionKeyStructOutput,
        string,
        bigint,
        bigint,
        string,
        ProcessRegistry.BallotModeStructOutput,
        ProcessRegistry.CensusStructOutput
      ] & {
        status: bigint;
        organizationId: string;
        encryptionKey: ProcessRegistry.EncryptionKeyStructOutput;
        latestStateRoot: string;
        startTime: bigint;
        duration: bigint;
        metadataURI: string;
        ballotMode: ProcessRegistry.BallotModeStructOutput;
        census: ProcessRegistry.CensusStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setProcessCensus"
  ): TypedContractMethod<
    [_processID: BytesLike, _census: ProcessRegistry.CensusStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setProcessDuration"
  ): TypedContractMethod<
    [_processID: BytesLike, _duration: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setProcessResult"
  ): TypedContractMethod<
    [_processID: BytesLike, _result: BigNumberish[], _proof: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setProcessStatus"
  ): TypedContractMethod<
    [_processID: BytesLike, _newStatus: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "submitStateTransition"
  ): TypedContractMethod<
    [
      _processID: BytesLike,
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _proof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "CensusUpdated"
  ): TypedContractEvent<
    CensusUpdatedEvent.InputTuple,
    CensusUpdatedEvent.OutputTuple,
    CensusUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ProcessCreated"
  ): TypedContractEvent<
    ProcessCreatedEvent.InputTuple,
    ProcessCreatedEvent.OutputTuple,
    ProcessCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProcessDurationChanged"
  ): TypedContractEvent<
    ProcessDurationChangedEvent.InputTuple,
    ProcessDurationChangedEvent.OutputTuple,
    ProcessDurationChangedEvent.OutputObject
  >;
  getEvent(
    key: "ProcessStateRootUpdated"
  ): TypedContractEvent<
    ProcessStateRootUpdatedEvent.InputTuple,
    ProcessStateRootUpdatedEvent.OutputTuple,
    ProcessStateRootUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ProcessStatusChanged"
  ): TypedContractEvent<
    ProcessStatusChangedEvent.InputTuple,
    ProcessStatusChangedEvent.OutputTuple,
    ProcessStatusChangedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "CensusUpdated(bytes32,bytes32,string,uint256)": TypedContractEvent<
      CensusUpdatedEvent.InputTuple,
      CensusUpdatedEvent.OutputTuple,
      CensusUpdatedEvent.OutputObject
    >;
    CensusUpdated: TypedContractEvent<
      CensusUpdatedEvent.InputTuple,
      CensusUpdatedEvent.OutputTuple,
      CensusUpdatedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "ProcessCreated(bytes32,address)": TypedContractEvent<
      ProcessCreatedEvent.InputTuple,
      ProcessCreatedEvent.OutputTuple,
      ProcessCreatedEvent.OutputObject
    >;
    ProcessCreated: TypedContractEvent<
      ProcessCreatedEvent.InputTuple,
      ProcessCreatedEvent.OutputTuple,
      ProcessCreatedEvent.OutputObject
    >;

    "ProcessDurationChanged(bytes32,uint256)": TypedContractEvent<
      ProcessDurationChangedEvent.InputTuple,
      ProcessDurationChangedEvent.OutputTuple,
      ProcessDurationChangedEvent.OutputObject
    >;
    ProcessDurationChanged: TypedContractEvent<
      ProcessDurationChangedEvent.InputTuple,
      ProcessDurationChangedEvent.OutputTuple,
      ProcessDurationChangedEvent.OutputObject
    >;

    "ProcessStateRootUpdated(bytes32,bytes32)": TypedContractEvent<
      ProcessStateRootUpdatedEvent.InputTuple,
      ProcessStateRootUpdatedEvent.OutputTuple,
      ProcessStateRootUpdatedEvent.OutputObject
    >;
    ProcessStateRootUpdated: TypedContractEvent<
      ProcessStateRootUpdatedEvent.InputTuple,
      ProcessStateRootUpdatedEvent.OutputTuple,
      ProcessStateRootUpdatedEvent.OutputObject
    >;

    "ProcessStatusChanged(bytes32,uint8)": TypedContractEvent<
      ProcessStatusChangedEvent.InputTuple,
      ProcessStatusChangedEvent.OutputTuple,
      ProcessStatusChangedEvent.OutputObject
    >;
    ProcessStatusChanged: TypedContractEvent<
      ProcessStatusChangedEvent.InputTuple,
      ProcessStatusChangedEvent.OutputTuple,
      ProcessStatusChangedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
