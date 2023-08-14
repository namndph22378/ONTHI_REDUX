export interface IProduct {
    id?: number | string;
    name: string;
    description: string;
    quantity: number;
    // origin: 'Việt Nam' | 'Trung Quốc' | 'Đài Loan';
    origin: string;

  }
  
  export interface IProductState {
    products : IProduct[]
  }
  