import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import { PageError } from "../../pages/shared/page-error";

const Waiting = ({ children }: PropsWithChildren) => {
  const cargando = <div className="layout-cargando">Cargando</div>;

  return (
    <ErrorBoundary FallbackComponent={PageError}>
      <Suspense fallback={cargando}>
        <main>{children}</main>
      </Suspense>
    </ErrorBoundary>
  );
};

export { Waiting };
