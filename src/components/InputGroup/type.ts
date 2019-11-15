export interface IInputGroup {
  title?: string;
  type?: string;
  imageIcon?: string;
  placeholder?: string;
  icon?: boolean;
  name?: string;
  defaultValue?: string;
  required?: boolean;
  error?: string;
  image?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent): void;
  onBlur?(event: React.FocusEvent): void;
}
export interface IImagem {
  image: string | null | undefined;
  erro: string | null;
}
