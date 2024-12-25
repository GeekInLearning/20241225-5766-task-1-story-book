import { FC, useState } from "react";
import {
  TOAST_SIZE,
  TOAST_TYPE,
  TOAST_VARIANT,
  ToastProps,
} from "./toast.type";

const TOAST_VARIANT_DEFAULT_VALUE = {
  [TOAST_VARIANT.SUCCESS]: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-green-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "green",
    classWrapper:
      "absolute inset-y-0 right-0 flex gap-2 p-2 bg-green-100 text-green-500 border-2 rounded border-green-500 shadow-md shadow-green-300",
  },
  [TOAST_VARIANT.WARNING]: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-yellow-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "yellow",

    classWrapper:
      "absolute inset-y-0 right-0 flex gap-2 p-2 bg-yellow-100 text-yellow-500 border-2 rounded border-yellow-500 shadow-md shadow-yellow-300",
  },
  [TOAST_VARIANT.DANGER]: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-red-500"
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "red",
    classWrapper:
      "absolute inset-y-0 right-0 flex gap-2 p-2 bg-red-100 text-red-500 border-2 rounded border-red-500 shadow-md shadow-red-300",
  },
  [TOAST_VARIANT.DEFAULT]: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-gray-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "gray",
    classWrapper:
      "absolute inset-y-0 right-0 flex gap-2 p-2 bg-gray-100 text-gray-500 border-2 rounded border-gray-500 shadow-md shadow-gray-300",
  },
};

const TOAST_SIZE_DEFAULT_VALUE = {
  [TOAST_SIZE.LARGE]: {
    contentSize: "text-lg",
    widthWrapper: "w-8/12",
    titleSize: "text-2xl",
    iconSize: "w-10",
  },
  [TOAST_SIZE.MEDIUM]: {
    contentSize: "text-base",
    widthWrapper: "w-7/12",
    titleSize: "text-xl",
    iconSize: "w-8",
  },
  [TOAST_SIZE.SMALL]: {
    contentSize: "text-sm",
    widthWrapper: "w-6/12",
    titleSize: "text-lg",
    iconSize: "w-6",
  },
};

export const Toast: FC<ToastProps> = ({
  titleText,
  variant = TOAST_VARIANT.DEFAULT,
  type = TOAST_TYPE.NOTIFICATION,
  size = TOAST_SIZE.MEDIUM,
  children,
}: ToastProps) => {
  const [open, setOpen] = useState(true);
  const icon = {
    [TOAST_VARIANT.DEFAULT]: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-black"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    [TOAST_VARIANT.SUCCESS]: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-green-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    [TOAST_VARIANT.WARNING]: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-yellow-500"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    [TOAST_VARIANT.DANGER]: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 fill-red-500"
      >
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };
  const className = {
    [TOAST_VARIANT.DEFAULT]: {
      [TOAST_SIZE.LARGE]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-white text-black border rounded border-black shadow-md shadow-gray-300 w-6/12",
        classTitle: "flex-wrap font-bold text-2xl",
        classContent: "flex-wrap text-lg",
      },
      [TOAST_SIZE.MEDIUM]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-white text-black border rounded border-black shadow-md shadow-gray-300 w-5/12",
        classTitle: "flex-wrap font-bold text-xl",
        classContent: "flex-wrap text-md",
      },
      [TOAST_SIZE.SMALL]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-white text-black border rounded border-black shadow-md shadow-gray-300 w-4/12",
        classTitle: "flex-wrap font-bold text-lg",
        classContent: "flex-wrap text-sm",
      },
    },
    [TOAST_VARIANT.SUCCESS]: {
      [TOAST_SIZE.LARGE]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-green-100 text-green-500 border rounded border-green-500 shadow-md shadow-green-300 w-6/12",
        classTitle: "flex-wrap font-bold text-2xl",
        classContent: "flex-wrap text-lg",
      },
      [TOAST_SIZE.MEDIUM]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-green-100 text-green-500 border rounded border-green-500 shadow-md shadow-green-300 w-5/12",
        classTitle: "flex-wrap font-bold text-xl",
        classContent: "flex-wrap text-md",
      },
      [TOAST_SIZE.SMALL]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-green-100 text-green-500 border rounded border-green-500 shadow-md shadow-green-300 w-4/12",
        classTitle: "flex-wrap font-bold text-lg",
        classContent: "flex-wrap text-sm",
      },
    },
    [TOAST_VARIANT.WARNING]: {
      [TOAST_SIZE.LARGE]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-yellow-100 text-yellow-500 border rounded border-yellow-500 shadow-md shadow-yellow-300 w-6/12",
        classTitle: "flex-wrap font-bold text-2xl",
        classContent: "flex-wrap text-lg",
      },
      [TOAST_SIZE.MEDIUM]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-yellow-100 text-yellow-500 border rounded border-yellow-500 shadow-md shadow-yellow-300 w-5/12",
        classTitle: "flex-wrap font-bold text-xl",
        classContent: "flex-wrap text-md",
      },
      [TOAST_SIZE.SMALL]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-yellow-100 text-yellow-500 border rounded border-yellow-500 shadow-md shadow-yellow-300 w-4/12",
        classTitle: "flex-wrap font-bold text-lg",
        classContent: "flex-wrap text-sm",
      },
    },
    [TOAST_VARIANT.DANGER]: {
      [TOAST_SIZE.LARGE]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-red-100 text-red-500 border rounded border-red-500 shadow-md shadow-red-300 w-6/12",
        classTitle: "flex-wrap font-bold text-2xl",
        classContent: "flex-wrap text-lg",
      },
      [TOAST_SIZE.MEDIUM]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-red-100 text-red-500 border rounded border-red-500 shadow-md shadow-red-300 w-5/12",
        classTitle: "flex-wrap font-bold text-xl",
        classContent: "flex-wrap text-md",
      },
      [TOAST_SIZE.SMALL]: {
        classWrapper:
          "flex gap-2 mx-4 my-2 p-2 bg-red-100 text-red-500 border rounded border-red-500 shadow-md shadow-red-300 w-4/12",
        classTitle: "flex-wrap font-bold text-lg",
        classContent: "flex-wrap text-sm",
      },
    },
  };

  return (
    <div className="h-72 p-4 overflow-hidden">
      <button
        className="p-2 border rounded border-black"
        onClick={() => setOpen(true)}
      >
        open notification
      </button>
      <div
        className={`relative float-end top-0 right-0 transition-all ${
          className[variant][size].classWrapper
        } ${open ? "visible" : "invisible translate-x-full"}`}
      >
        {type === TOAST_TYPE.NOTIFICATION ? (
          <div className="">
            <div className="flex border-b p-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <div className="flex flex-1 justify-between">
                <div className={`${className[variant][size].classTitle}`}>
                  notification
                </div>
                <div className={`text-gray-500 self-center`}>11 min ago</div>
              </div>
              <button
                className="p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className={`p-2 ${className[variant][size].classContent}`}>
              {children}
            </div>
          </div>
        ) : (
          <div className="flex">
            <button
              className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className={`self-start`}>{variant && icon[variant]}</div>
            <div>
              <div className={`${className[variant][size].classTitle}`}>
                {titleText}
              </div>
              <div className={`${className[variant][size].classContent}`}>
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
