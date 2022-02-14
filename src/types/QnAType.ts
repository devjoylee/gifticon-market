export interface QTD {
  QnATypeData: {
    id: number;
    key: string;
    name: string;
  }[];
}

export interface QCD {
  QnAContentData: {
    id: number;
    answer: string;
    question: string;
  }[];
  name: string;
}
