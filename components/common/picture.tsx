"use client";
/* eslint-disable jsx-a11y/alt-text */
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes, FC } from "react";

export interface PictureProps {
  container: HTMLAttributes<HTMLDivElement>;
  image: ImageProps;
  invertInLightkMode?: boolean;
}
export const Picture: FC<PictureProps> = ({ container, image }) => {
  return (
    <div
      {...container}
      className={cn(
        "relative w-[50px] h-[50px] flex justify-center items-center",
        container.className
      )}
    >
      {}
      <Image
        {...image}
        fill
        className={cn(
          "w-[100%] h-[100%] object-contain object-center",
          image.className
        )}
      />
    </div>
  );
};
