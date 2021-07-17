import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Heading from ".";

describe("<Heading />", () => {
  it("should render a white heading by default", () => {
    renderWithTheme(<Heading>Zapt</Heading>);
    expect(screen.getByRole("heading", { name: /Zapt/i })).toHaveStyle({
      color: "#ffffff",
    });
  });

  it("should render a black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Zapt</Heading>);
    expect(screen.getByRole("heading", { name: /Zapt/i })).toHaveStyle({
      color: "#000000",
    });
  });

  it("should render a gray heading when gray color is passed", () => {
    renderWithTheme(<Heading color="gray">Zapt</Heading>);
    expect(screen.getByRole("heading", { name: /Zapt/i })).toHaveStyle({
      color: "#7B7B7B",
    });
  });
});
