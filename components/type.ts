export interface IDiamond {
  shape: string;
  size: number;
  facet: number; // грань
  color: number;
  clarity: number;
  cuts: string; // тип огранки
  price: number;
  profitPercent?: Number;
}
