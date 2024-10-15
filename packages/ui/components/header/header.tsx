import React from "react";
import "./header.css";

export interface HeaderProps {
  izquierda?: React.ReactNode;
  centro?: React.ReactNode;
  derecha?: React.ReactNode;
}

export function Header({
  izquierda,
  centro,
  derecha,
}: React.PropsWithChildren<HeaderProps>) {
  return (
    <header className="header" role="banner" tabIndex={0} aria-label="cabecera">
      <div
        className="header-left"
        role="navigation"
        aria-label="Left Navigation"
        tabIndex={0}
      >
        {izquierda}
      </div>
      <div
        className="header-center"
        role="main"
        aria-label="Main Content"
        tabIndex={0}
      >
        {centro}
      </div>
      <div
        className="header-right"
        role="complementary"
        aria-label="Right Complementary"
        tabIndex={0}
      >
        {derecha}
      </div>
    </header>
  );
}
