import { FC } from "react";
import { CardProps } from "./card.type";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/stories/Button";

export const Card: FC<CardProps> = ({
  title,
  label,
  variant = "light",
  image = "https://placehold.co/600x400",
}) => {
  const variants = {
    dark: "bg-gray-800 border-gray-700 text-white",
    light: "bg-white border border-gray-200 text-gray-900",
  }[variant];
  return (
    <div className={`max-w-sm rounded-lg shadow ${variants}`}>
      <Link href="#">
        <Image
          className="rounded-t-lg"
          src={image}
          alt={title}
          width={600}
          height={600}
        ></Image>
      </Link>
      <div className="p-5">
        <Link href={"#"}>
          <h5 className="mb-2 text-2xl font-bold tracking-light">{title}</h5>
        </Link>
        <p className="mb-3 font-normal">{label}</p>
        <Button label="Button" primary></Button>
      </div>
    </div>
  );
};
