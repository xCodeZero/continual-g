declare type CreateUserParams = {
  affiliateId: string;
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  state: string;
  idType: string;
  idImage: string;
  bankAccount: string;
  bank: string;
};

declare type ReserveSlotParams = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
  profession: string;
  reason: string[];
  question: string;
  agree: boolean;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  creditCoins: number;
  creditBalance: number;
  suspended: string;
  userRole: number;
  phoneNumber: string;
  address: string;
  state: string;
  idType: string;
  idImage: string;
  bio: string;
  photo: string;
  coverPhoto: string;
  bankAccount: string;
  bank: string;
};

declare type CreateTransactionData = {
  userId: Types.ObjectId;
  source: "CREDIT" | "ORDER";
  source_id: string;
  amount: number;
  status?: "PENDING" | "SUCCESS" | "FAIL";
};

declare type CreatTopupData = {
  userId: Types.ObjectId;
  source: "CREDIT" | "ORDER";
  source_id: string;
  amount: number;
  image: string;
  status?: "PENDING" | "SUCCESS" | "FAIL";
};

declare type CreateEarningsData = {
  userId: Types.ObjectId;
  source: string;
  source_id: string;
  amount: number;
  status?: "PENDING" | "SUCCESS" | "FAIL";
};

declare type CreateCashoutData = {
  userId: Types.ObjectId;
  source: string;
  source_id: string;
  amount: number;
  tax: number;
  fee: number;
  bankAccount: string;
  bankAccountName: string;
  bank: string;
  originalAmount: number;
  status?: "PENDING" | "SUCCESS" | "FAIL";
};

declare type UpdateTransactionData = {
  userId: Types.ObjectId;
  source: "CREDIT" | "ORDER";
  source_id: string;
  amount: number;
  status: "PENDING" | "SUCCESS" | "FAIL";
};

declare type PackageData = {
  name: string;
  image: string;
  per_person_price_in_credit: number;
  location: string;
  total_days: number;
  total_people_allowed: number;
  status?: "PENDING" | "SUCCESS" | "FAIL" | "PROCESSING" | "ON DELIVERY";
  average_rating?: number;
  total_rating?: number;
};

declare type OrderData = {
  userId: Types.ObjectId;
  packageId: Types.ObjectId;
  status: "PENDING" | "SUCCESS" | "FAIL";
  rate?: 1 | 2 | 3 | 4 | 5 | 6;
};

declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  userId: string;
};

export interface IStatistics {
  orders?: Orders;
  totalPackages?: number;
  totalTransactions?: number;
  totalEarnings?: number;
  totalEarningsAmount?: number;
  totalCashout?: number;
  totalCashoutAmount?: number;
}

export interface Orders {
  totalCount?: number;
  totalOrderAmount?: number;
}

export interface IChart {
  chartData: { [key: string]: number };
  chartDataIncome: { [key: string]: number };
  Jan?: number;
  Feb?: number;
  Mar?: number;
  Apr?: number;
  May?: number;
  Jun?: number;
  Jul?: number;
  Aug?: number;
  Sep?: number;
  Oct?: number;
  Nov?: number;
  Dec?: number;
}

export interface IOrderResponse {
  _id?: string;
  userId?: CreateUserParams;
  packageId?: PackageData;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITransactionResponse {
  _id?: string;
  userId?: string;
  source?: string;
  source_id?: string;
  amount?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ITopupResponse {
  _id?: string;
  userId?: string;
  source?: string;
  source_id?: string;
  amount?: number;
  image?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IEarningsResponse {
  _id?: string;
  userId?: string;
  source?: string;
  source_id?: string;
  amount?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICashoutResponse {
  _id?: string;
  userId?: string;
  source?: string;
  source_id?: string;
  fee?: number;
  tax?: number;
  amount?: number;
  bankAccount?: string;
  bankAccountName?: string;
  bank?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

declare interface IPackagesResponse {
  _id?: string;
  name?: string;
  image?: string;
  per_person_price_in_credit?: number;
  location?: string;
  total_days?: number;
  total_people_allowed?: number;
  status?: boolean;
  average_rating?: number;
  total_rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}
