import { ButtonProps } from "@/stories/Button";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export enum BREADCUMB_VARIANT {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface BreadcumbProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BREADCUMB_VARIANT;
  datas: {
    label: string;
    path?: string;
    props?: AnchorHTMLAttributes<HTMLAnchorElement>[];
  }[];
}
