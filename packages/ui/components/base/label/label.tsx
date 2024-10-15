import classNames from "classnames";
import "./label.css";
import type { PropsWithChildren } from "react";
import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({
  children,
  className,
  ...props
}: PropsWithChildren<LabelProps>) {
  return (
    <label
      className={classNames(className, "label")}
      {...props}
      aria-label={props["aria-label"] || "label"}
    >
      {children}
    </label>
  );
}
