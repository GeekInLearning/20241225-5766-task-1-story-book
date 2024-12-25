import { FC } from "react";
import { BREADCUMB_VARIANT, BreadcumbProps } from "./breadcumb.type";

export const Breadcumb: FC<BreadcumbProps> = ({
  datas,
  variant = BREADCUMB_VARIANT.MEDIUM,
  children = <>{">"}</>,
}) => {
  const className = {
    [BREADCUMB_VARIANT.LARGE]: "flex flex-wrap gap-4 items-center text-lg",
    [BREADCUMB_VARIANT.MEDIUM]: "flex flex-wrap gap-4 items-center text-base",
    [BREADCUMB_VARIANT.SMALL]: "flex flex-wrap gap-4 items-center text-sm",
  };
  return (
    <div className={className[variant]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="size-6 stroke-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      {datas.flatMap((data, ind) => {
        const isLast = ind === datas.length - 1;
        if (isLast) return [<div>{data?.label}</div>];
        return [
          <a className="text-blue-500" {...data.props} href={data.path ?? "#"}>
            {data.label}
          </a>,
          <div>{children}</div>,
        ];
      })}
    </div>
  );
};
