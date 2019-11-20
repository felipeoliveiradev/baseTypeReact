export interface IHeader {
  // onToken: string | boolean | void;
  sitekey?: void | string | boolean | undefined;
  action?: void | string | boolean | undefined;
  props?: IProps;
  // onChange(): React.ChangeEvent;
}
export interface IProps {
  name?: string;
}
export interface IRecapcha {
  reset(): void | boolean | string;
}
export interface IRef {
  recaptcha: IRecapcha;
}
