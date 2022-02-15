export interface conItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip: string | null;
  warning: string;
  discountRate: number;
  info: string | null;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: conCategory2;
  options: option[];
}

export interface conCategory2 {
  id: number;
  name: number;
  adminUserId: number;
  createdAt: string;
  priority: number;
  conCategory1Id: number;
  info: string;
  imageUrl: string;
  conCategory1: conCategory1;
}

export interface conCategory1 {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}

export interface option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}
