import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes, FC } from "react";

export interface PictureProps {
  container: HTMLAttributes<HTMLDivElement>;
  image: ImageProps;
  alt: string;
}
export const Picture: FC<PictureProps> = ({ container, image }) => (
  <div
    {...container}
    className={cn(
      "relative w-[50px] h-[50px] flex justify-center items-center",
      container.className
    )}
  >
    <Image
      {...image}
      fill
      alt=""
      className={cn(
        "w-[100%] h-[100%] object-contain object-center",
        image.className
      )}
    />
    {/* <div className="border bg-[#7D7D7D40] p-2 z-10 w-full h-full"/> */}
  </div>
);
