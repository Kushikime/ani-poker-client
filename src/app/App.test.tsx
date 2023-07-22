import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("has to render h1", () => {
    render(<App />);

    expect(screen.getByRole('heading', {level: 1}).textContent).toBe('Hello world');
  });
});
