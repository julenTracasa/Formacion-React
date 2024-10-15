import classNames from "classnames";
import "./barra-herramientas.css";
import React from "react";

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  left?: React.ReactNode;
  showLeftOnMobile?: boolean;
}

export function BarraHerramientas({
  children,
  left,
  showLeftOnMobile = false,
  className,
  ...props
}: React.PropsWithChildren<ToolbarProps>) {
  return (
    <div className={classNames("toolbar", className)} {...props}>
      <div
        className={classNames("toolbar-section toolbar-left", {
          "hide-left-on-mobile": !showLeftOnMobile,
        })}
      >
        {left}
      </div>
      <div className="toolbar-section toolbar-right">{children}</div>
    </div>
  );
}
