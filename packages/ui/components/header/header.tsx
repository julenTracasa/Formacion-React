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
    <header className="header">
      <div className="header-left">{izquierda}</div>
      <div className="header-center">{centro}</div>
      <div className="header-right">{derecha}</div>
    </header>
  );
}
