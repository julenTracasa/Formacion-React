import React from "react";
import { FallbackProps } from "react-error-boundary";

type PageErrorProps = Partial<FallbackProps>;

export const PageError = ({ error, resetErrorBoundary }: PageErrorProps) => {
  return (
    <div>
      <h1>Pagina de error</h1>
      <h2>{error?.message}</h2>
      {resetErrorBoundary && (
        <button onClick={resetErrorBoundary}>Reintentar</button>
      )}
    </div>
  );
};
