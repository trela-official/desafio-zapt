import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { cardItems } from "templates/UserPage/mock";

import Card from ".";

describe("<Card />", () => {
  it("should render the heading", () => {
    renderWithTheme(<Card {...cardItems[0]} />);

    expect(
      screen.getByRole("heading", {
        name: /”Não consigo mais viver sem os produtos do Sítio, a diferença do que eu comprava antes e agora é abissal”/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Patricia Godoy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /São Paulo/i })
    ).toBeInTheDocument();
  });
});
