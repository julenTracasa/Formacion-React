import { render } from "@testing-library/react";
import { Header } from "./header";
import { axe } from "vitest-axe";
import React from "react";

describe("Header", () => {
  it("carga sin error", () => {
    render(<Header />);
  });

  it("es accesible", async () => {
    const { container } = await render(<Header />);
    const results = await axe(container);
    if (results.violations.length > 0) console.log(results.violations);
    expect(results.violations.length).toBe(0);
  });

  it("carga todas las partes que componen la Header", () => {
    const leftComponent = <div>Left Component</div>;
    const centerComponent = <div>Center Component</div>;
    const rightComponent = <div>Right Component</div>;

    const { getByText } = render(
      <Header
        izquierda={leftComponent}
        centro={centerComponent}
        derecha={rightComponent}
      />
    );

    expect(getByText("Left Component")).toBeInTheDocument();
    expect(getByText("Center Component")).toBeInTheDocument();
    expect(getByText("Right Component")).toBeInTheDocument();
  });
});
