export interface IColumnList {
  key: string;
  label: string;
  isSort: boolean;
  isFilter: boolean;
  isDisabled: boolean;
  data?: Array<object>;
  style?: object;
}
