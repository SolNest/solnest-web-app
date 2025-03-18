/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const H: FC<HeadingProps> = ({ level = 2, ...rest }) => {
  const TagName = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <TagName
      {...(rest as any)}
      className={cn(
        "font-sans font-bold antialiased tracking-[-2%] leading-[42px]",
        rest.className
      )}
    />
  );
};

export const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({ ...rest }) => (
  <p
    {...(rest as any)}
    className={cn(
      "font-sans antialiased text-base font-medium",
      rest.className
    )}
  />
);

export const Row = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} {...rest} className={cn("flex gap-4", className)} />
  )
);

Row.displayName = "Row";

export const Column = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div ref={ref} {...rest} className={cn("flex flex-col gap-4", className)} />
));

Column.displayName = "Column";
