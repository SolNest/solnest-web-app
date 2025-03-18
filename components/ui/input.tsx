import * as React from "react";
import { cn } from "@/lib/utils";
import { Row } from "../view/layout";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const _Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-6 w-full rounded-md border border-input bg-background text-base ring-offset-none file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

_Input.displayName = "_Input";

interface Props extends InputProps {
  container?: React.HTMLAttributes<HTMLDivElement>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  leftElementAsOne?: boolean;
  styleLeftElParent?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      container,
      leftElement,
      leftElementAsOne = false,
      rightElement,
      styleLeftElParent,
      ...props
    },
    ref
  ) => (
    <Row
      {...container}
      className={cn(
        "items-center h-[55px] py-2 px-4 w-full rounded-3xl border border-muted-foreground bg-background text-base text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium focus-visible:outline-none focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        container?.className,
        {
          "justify-between": leftElementAsOne,
        }
      )}
    >
      {leftElementAsOne ? (
        <Row className={cn(styleLeftElParent)}>
          {leftElement}
          <_Input
            {...props}
            ref={ref}
            className={cn(
              "px-2 h-full border-0 outline-none focus-visible:ring-0",
              props.className
            )}
          />
        </Row>
      ) : (
        <>
          {leftElement}
          <_Input
            {...props}
            ref={ref}
            className={cn(
              "px-2 h-full border-0 outline-none focus-visible:ring-0",
              props.className
            )}
          />
        </>
      )}
      {rightElement}
    </Row>
  )
);

Input.displayName = "Input";

export { Input };
