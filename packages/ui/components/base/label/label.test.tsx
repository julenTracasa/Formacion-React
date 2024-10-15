import { render, screen } from "@testing-library/react";
import { Label } from "./label";
import { axe } from "vitest-axe";
import React from "react";

describe("Componente Label", () => {
  it("se renderiza sin fallar", () => {
    render(<Label>Etiqueta de Prueba</Label>);
    const labelElement = screen.getByText("Etiqueta de Prueba");
    expect(labelElement).toBeInTheDocument();
  });

  it("es accesible", async () => {
    const { container } = await render(<Label>Etiqueta de Prueba</Label>);
    const results = await axe(container);
    if (results.violations.length > 0) console.log(results.violations);
    expect(results.violations.length).toBe(0);
  });

  it("renderiza el contenido de los hijos", () => {
    render(<Label>Etiqueta de Prueba</Label>);
    expect(screen.getByText("Etiqueta de Prueba")).toBeInTheDocument();
  });

  it("aplica una clase personalizada junto con la clase predeterminada", () => {
    render(<Label className="clase-personalizada">Etiqueta de Prueba</Label>);
    const labelElement = screen.getByText("Etiqueta de Prueba");
    expect(labelElement).toHaveClass("label");
    expect(labelElement).toHaveClass("clase-personalizada");
  });

  it("pasa propiedades adicionales al elemento label", () => {
    render(<Label htmlFor="inputDePrueba">Etiqueta de Prueba</Label>);
    const labelElement = screen.getByText("Etiqueta de Prueba");
    expect(labelElement).toHaveAttribute("for", "inputDePrueba");
  });
});
