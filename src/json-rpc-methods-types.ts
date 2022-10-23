type EmptyArray = [];

export type TransactionCallPayload = {
  from: string;
  to: string;
  gas?: string;
  gasPrice?: string;
  maxPriorityFeePerGas?: string;
  maxFeePerGas?: string;
  value?: string;
  data?: string;
};

export type TransactionPayload = {
  from: string;
  to?: string;
  gas?: string;
  gasPrice?: string;
  maxPriorityFeePerGas?: string;
  maxFeePerGas?: string;
  value?: string;
  data?: string;
  nonce?: string;
};

export type Transaction = {
  accessList?: string[];
  blockHash: string;
  blockNumber: string;
  chainId?: string;
  from: string;
  gas?: string;
  gasLimit?: string;
  gasPrice?: string;
  hash: string;
  maxPriorityFeePerGas?: string;
  maxFeePerGas?: string;
  nonce: string;
  r: string;
  s: string;
  to?: string | null;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
  input: string;
};
export type PendingTransaction = {
  accessList?: string[];
  blockHash?: null;
  blockNumber?: null;
  chainId?: string;
  from: string;
  gas?: string;
  gasPrice?: string;
  gasLimit?: string;
  hash: string;
  maxPriorityFeePerGas?: string;
  maxFeePerGas?: string;
  nonce: string;
  r: string;
  s: string;
  to?: string | null;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
  input: string;
};

export type Block = {
  number: string;
  hash: string;
  parentHash: string;
  nonce: string;
  sha3Uncle: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transactions: string[];
  uncles: string[];
};

export type PendingBlock = {
  number?: null;
  hash?: string;
  parentHash: string;
  nonce?: null;
  sha3Uncle: string;
  logsBloom?: null;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transactions: string[];
  uncles: string[];
};

export type TransactionReceipt = {
  blockHash: string;
  blockNumber: string;
  contractAddress?: string | null;
  cumulativeGasUsed: string;
  effectiveGasPrice: string;
  from: string;
  gasUsed: string;
  logs: Log[];
  logsBloom: string;
  root?: string;
  status?: "0x0" | "0x1";
  to?: string | null;
  transactionHash: string;
  transactionIndex: string;
  type: string;
  confirmations?: string;
  byzantium?: boolean;
};

export type FilterObject = {
  address?: string;
  fromBlock?: string;
  toBlock?: string;
  topics?: string[];
  blockHash?: string;
};

export type Log = {
  removed: boolean;
  logIndex: string;
  transactionIndex: string;
  transactionHash: string;
  blockHash: string;
  blockNumber: string;
  address: string;
  data: string;
  topics: string[];
};

export type PendingLog = {
  removed: boolean;
  logIndex?: null;
  transactionIndex?: null;
  transactionHash?: null;
  blockHash?: null;
  blockNumber?: null;
  address: string;
  data: string;
  topics: string[];
};

type EthAccounts = {
  method: "eth_accounts";
  params: EmptyArray;
  response: string[];
};

type EthBlockNumber = {
  method: "eth_blockNumber";
  params: EmptyArray;
  response: string;
};

type EthCall = {
  method: "eth_call";
  params: [callPayload: TransactionCallPayload, blockTag: string];
  response: unknown;
};

type EthChainId = {
  method: "eth_chainId";
  params: EmptyArray;
  response: string;
};

type EthCoinbase = {
  method: "eth_coinbase";
  params: unknown;
  response: unknown;
};

type EthEstimateGas = {
  method: "eth_estimateGas";
  params: [callPayload: TransactionCallPayload];
  response: string;
};

type EthFeeHistory = {
  method: "eth_feeHistory";
  params: [string, string, []];
  response: {
    baseFeePerGas: string[];
    gasUsedRatio: string[];
    reward?: string[];
    oldestBlock: string;
  };
};

type EthGetBalance = {
  method: "eth_getBalance";
  params: [address: string, blockTag: string];
  response: string;
};

type EthGasPrice = {
  method: "eth_gasPrice";
  params: EmptyArray;
  response: string;
};

type EthGetBlockByHash = {
  method: "eth_getBlockByHash";
  params: [blockHash: string, showTransactionDetailsFlag: boolean];
  response: Block | PendingBlock | null;
};

type EthGetBlockByNumber = {
  method: "eth_getBlockByNumber";
  params: [blockTag: string, showTransactionDetailsFlag: boolean];
  response: Block | PendingBlock | null;
};

type EthGetBlockTransactionCountByHash = {
  method: "eth_getBlockTransactionCountByHash";
  params: [blockHash: string];
  response: string;
};

type EthGetBlockTransactionCountByNumber = {
  method: "eth_getBlockTransactionCountByNumber";
  params: [blockTag: string];
  response: string;
};

type EthGetCode = {
  method: "eth_getCode";
  params: [address: string, blockTag: string];
  response: string;
};

type EthGetLogs = {
  method: "eth_getLogs";
  params: [filterObject: FilterObject];
  response: Log[] | PendingLog[];
};

type EthGetStorageAt = {
  method: "eth_getStorageAt";
  params: [address: string, storagePosition: string, blockTag: string];
  response: string;
};

type EthGetTransactionByBlockHashAndIndex = {
  method: "eth_getTransactionByBlockHashAndIndex";
  params: [blockHash: string, transactionIndex: string];
  response: Transaction | PendingTransaction | null;
};

type EthGetTransactionByBlockNumberAndIndex = {
  method: "eth_getTransactionByBlockNumberAndIndex";
  params: [blockTag: string, transactionIndex: string];
  response: Transaction | PendingTransaction | null;
};

type EthGetTransactionByHash = {
  method: "eth_getTransactionByHash";
  params: [transactionHash: string];
  response: Transaction | PendingTransaction | null;
};

type EthGetTransactionCount = {
  method: "eth_getTransactionCount";
  params: [address: string, blockTag: string];
  response: string;
};

type EthGetTransactionReceipt = {
  method: "eth_getTransactionReceipt";
  params: [transactionHash: string];
  response: TransactionReceipt | null;
};

type EthGetUncleByBlockHashAndIndex = {
  method: "eth_getUncleByBlockHashAndIndex";
  params: [blockHash: string, uncleIndexPosition: string];
  response: Block | null;
};
type EthGetUncleByBlockNumberAndIndex = {
  method: "eth_getUncleByBlockNumberAndIndex";
  params: [blockTag: string, uncleIndexPosition: string];
  response: Block | null;
};

type EthGetUncleCountByBlockHash = {
  method: "eth_getUncleCountByBlockHash";
  params: [blockHash: string];
  response: string;
};
type EthGetUncleCountByBlockNumber = {
  method: "eth_getUncleCountByBlockNumber";
  params: [blockTag: string];
  response: string;
};

type EthGetWork = {
  method: "eth_getWork";
  params: EmptyArray;
  response: string[];
};

type EthMining = {
  method: "eth_mining";
  params: EmptyArray;
  response: boolean;
};

type EthHashrate = {
  method: "eth_hashrate";
  params: EmptyArray;
  response: string;
};

type EthProtocolVersion = {
  method: "eth_protocolVersion";
  params: EmptyArray;
  response: string;
};

type EthSendRawTransaction = {
  method: "eth_sendRawTransaction";
  params: [transactionData: string];
  response: string;
};

type EthSendTransaction = {
  method: "eth_sendTransaction";
  params: [transactionPayload: TransactionPayload];
  response: string;
};

type EthSign = {
  method: "eth_sign";
  params: [address: string, data: string];
  response: string;
};

type EthSignTransaction = {
  method: "eth_signTransaction";
  params: [transationPayload: TransactionPayload];
  response: string;
};

type EthSubmitWork = {
  method: "eth_submitWork";
  params: [string, string, string];
  response: boolean;
};

type EthSyncing = {
  method: "eth_syncing";
  params: EmptyArray;
  response: unknown;
};

type NetListening = {
  method: "net_listening";
  params: EmptyArray;
  response: boolean;
};

type NetPeerCount = {
  method: "net_peerCount";
  params: EmptyArray;
  response: string;
};

type NetVersion = {
  method: "net_version";
  params: EmptyArray;
  response: string;
};

type EthSubscribe = {
  method: "eth_subscribe";
  params:
    | ["newHeads"]
    | ["logs", { address?: string | string[]; topics?: string[] }]
    | ["newPendingTransactions"]
    | ["syncing"];
  response: string;
};

type EthUnsubscribe = {
  method: "eth_unsubscribe";
  params: [subscriptionId: string];
  response: boolean;
};

type EthPersonalSign = {
  method: "eth_personalSign";
  params: unknown[];
  response: string;
};

type EthSignTypedData = {
  method: "eth_signTypedData";
  params: [
    address: string,
    typedData: {
      types?: unknown;
      primaryType?: string;
      domain?: unknown;
      message?: unknown;
    }
  ];
  response: string;
};

type EthRequestAccounts = {
  method: "eth_requestAccounts";
  params: EmptyArray;
  response: string[];
};

export type JsonRPCMethod =
  | EthAccounts
  | EthBlockNumber
  | EthCall
  | EthChainId
  | EthCoinbase
  | EthEstimateGas
  | EthFeeHistory
  | EthGetBalance
  | EthGasPrice
  | EthGetBlockByHash
  | EthGetBlockByNumber
  | EthGetBlockTransactionCountByHash
  | EthGetBlockTransactionCountByNumber
  | EthGetCode
  | EthGetLogs
  | EthGetStorageAt
  | EthGetTransactionByBlockHashAndIndex
  | EthGetTransactionByBlockNumberAndIndex
  | EthGetTransactionByHash
  | EthGetTransactionCount
  | EthGetTransactionReceipt
  | EthGetUncleByBlockHashAndIndex
  | EthGetUncleByBlockNumberAndIndex
  | EthGetUncleCountByBlockHash
  | EthGetUncleCountByBlockNumber
  | EthGetWork
  | EthMining
  | EthHashrate
  | EthProtocolVersion
  | EthSendRawTransaction
  | EthSendTransaction
  | EthSign
  | EthSubmitWork
  | EthSyncing
  | NetListening
  | NetPeerCount
  | NetVersion
  | EthSubscribe
  | EthUnsubscribe
  | EthSignTransaction
  | EthPersonalSign
  | EthSignTypedData
  | EthRequestAccounts;

export type JsonRPCMethodName = JsonRPCMethod["method"];
