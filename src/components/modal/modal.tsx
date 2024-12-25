import { Children, FC, useState } from "react";

import { MODAL_SIZE, MODAL_TYPE, ModalProps } from "./modal.type";
import { Button } from "@/stories/Button";

export const Modal: FC<ModalProps> = ({
  size = MODAL_SIZE.MEDIUM,
  type = MODAL_TYPE.SIMPLE,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const className = {
    [MODAL_SIZE.LARGE]: {
      [MODAL_TYPE.ROUNDED]:
        "bg-white shadow p-6 transition-all w-9/12 min-h-48 rounded-xl",
      [MODAL_TYPE.SIMPLE]: "bg-white shadow p-6 transition-all w-96 min-h-48",
    },
    [MODAL_SIZE.MEDIUM]: {
      [MODAL_TYPE.ROUNDED]:
        "bg-white shadow p-6 transition-all w-7/12 min-h-48 rounded-lg",
      [MODAL_TYPE.SIMPLE]: "bg-white shadow p-6 transition-all w-72 min-h-48",
    },
    [MODAL_SIZE.SMALL]: {
      [MODAL_TYPE.ROUNDED]:
        "bg-white shadow p-6 transition-all w-5/12 min-h-48 rounded-md",
      [MODAL_TYPE.SIMPLE]: "bg-white shadow p-6 transition-all w-48 min-h-48",
    },
  };
  return (
    <div className="h-screen">
      <button
        className="border-2 rounded-xl border-blue-500 p-2 text-white bg-blue-600 m-2"
        onClick={() => setOpen(true)}
      >
        Open Modal
      </button>
      <div
        className={`fixed top-0 left-0 inset-0 flex justify-center items-center transition-colors z-10 ${
          open ? "visible bg-black/20" : "invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${className[size][type]} ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <button
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
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
          <div className="p-4">{children}</div>
          <div className="flex justify-center">
            <button
              className="border-2 rounded-xl border-blue-500 py-2 px-4 text-white bg-blue-600 m-2"
              onClick={() => setOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
