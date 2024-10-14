import { Header } from "@repo/ui";
import React from "react";
import { Outlet } from "react-router-dom";
import { Waiting } from "./shared/components/waiting";

const AppLayout: React.FC = () => {
  return (
    <>
      <Header centro={<div>{"Prueba"}</div>} />
      <Waiting>
        <Outlet />
      </Waiting>
    </>
  );
};

export default AppLayout;
