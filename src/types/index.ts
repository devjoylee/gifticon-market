export interface Category {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface ConCategory1 {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  createdAt?: string;
  priority?: number;
  info?: string;
}

export interface ConCategory2 {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conCategory1: ConCategory1;
  info?: any;
  adminUserId?: number;
  priority?: number;
  createdAt?: string;
}

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
  createdAt?: string;
  sfId?: string;
  ncSellingPrice?: number;
  information?: any;
  tip?: any;
  warning?: string;
  discountRate?: number;
  askingPrice?: number;
  isRefuse?: number;
  isBlock?: number;
  info?: any;
  isOnlyAccount?: number;
  conCategory2Id?: number;
  conCategory2?: ConCategory2;
}

export interface Options {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface QaType {
  id: number;
  key: string;
  name: string;
}

export interface Qa {
  id: number;
  question: string;
  answer: string;
}
