import "./button.css";
import type { ButtonHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import classNames from "classnames";
import useComponentsTranslation from "../../../hooks/use-translation";

export type ButtonProps = BaseButtonProps;

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(function Button(
  {
    children,
    variant = "default",
    size = "default",
    disabled = false,
    type = "button",
    wordSize = "default",
    ...props
  },
  ref
) {
  const buttonClasses = classNames(
    "button",
    `button---${variant}`,
    `button--size--${size}`,
    disabled ? `button--${variant}-disabled button--disabled` : "",
    `button--wordSize--${wordSize}`,
    props.className
  );
  if (ref) {
    confirm();
  }

  return (
    <BaseButton
      {...props}
      className={buttonClasses}
      // disabled={disabled}
      type={type}
      variant={variant}
    >
      {children}
    </BaseButton>
  );
});

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "default" | "options" | "transparent";
  size?: "default" | "small" | "large" | "icon" | "icon-xl";
  disabled?: boolean;
  wordSize?: "default" | "small";
  textoAccesibilidad?: string;
}

const BaseButton = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<BaseButtonProps>
>(function BaseButton(
  { children, disabled = false, type = "button", textoAccesibilidad, ...props },
  ref
) {
  const { t } = useComponentsTranslation();
  return (
    <button
      aria-label={textoAccesibilidad ?? t("button.ariaLabel")}
      disabled={disabled}
      ref={ref}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});

export interface ButtonOption {
  text: string;
  onClick: () => void;
}
