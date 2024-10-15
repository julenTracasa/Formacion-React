import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import { axe } from "vitest-axe";
import React from "react";

describe("<Button />", () => {
  it("se renderiza sin fallar", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/click me/i)).toBeDefined();
  });

  it("es accesible", async () => {
    const { container } = await render(<Button>Click me</Button>);
    const results = await axe(container);
    if (results.violations.length > 0) console.log(results.violations);
    expect(results.violations.length).toBe(0);
  });

  it('maneja el estado "disabled"', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText(/disabled button/i);
    expect((button as HTMLButtonElement).disabled).toBe(true);
  });

  it("aplica clases de variante y tamaño", () => {
    render(
      <Button size="large" variant="primary">
        Primary Large
      </Button>
    );
    const button = screen.getByText(/primary large/i);
    expect(button.className).toContain("button--primary");
    expect(button.className).toContain("button--size--large");
  });

  it("reenvía la referencia al elemento input", () => {
    const ref = { current: null };
    render(<Button ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
