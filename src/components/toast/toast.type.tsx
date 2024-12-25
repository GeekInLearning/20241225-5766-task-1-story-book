import { ButtonProps } from "@/stories/Button";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export enum TOAST_VARIANT {
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  DEFAULT = "default",
}

export enum TOAST_SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TOAST_TYPE {
  NOTIFICATION = "notification",
  INFORMATION = "information",
}

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TOAST_VARIANT;
  size?: TOAST_SIZE;
  type?: TOAST_TYPE;
  titleText: string;
}
