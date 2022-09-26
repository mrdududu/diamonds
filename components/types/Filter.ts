export interface FilterState {
  settings: FilterSettingItem[];
  selValues: SelectedValue[];
}

export interface FilterSettingItem {
  key: string;
  name: string;
  filter: Filter;
}

export type Filter = FilterRange | FilterArray;

export interface FilterRange {
  type: 'range_array';
  items: FilterRangeItem[];
}

export interface FilterArray {
  type: 'array';
  items: string[] | number[];
}

export interface FilterRangeItem {
  min: string | number;
  max: string | number;
}

export interface SelectedValue {
  key: string | number;
  val: string | number | FilterRangeItem;
}
