import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export enum MODAL_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum MODAL_TYPE {
  SIMPLE = "simple",
  ROUNDED = "rounded",
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  type?: MODAL_TYPE;
  size?: MODAL_SIZE;
}
