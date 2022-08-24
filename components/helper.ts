import { IDiamond } from './type';

export function mapApiDiamondToIDiamond(apiDiamond: any): IDiamond {
  const ret: IDiamond = {
    shape: '',
    size: 0,
    facet: 0,
    color: 0,
    clarity: 0,
    cuts: '',
    price: 0,
    profitPercent: null,
  };

  return ret;
}
