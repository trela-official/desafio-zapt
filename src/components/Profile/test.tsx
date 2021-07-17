import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import Profile from ".";

const profileItems = {
  profileImg: "/img/patricia-godoy.png",
  name: "John Doe",
  state: "Bahia",
  city: "Salvador",
};

describe("<Profile />", () => {
  it("should render the heading", () => {
    renderWithTheme(<Profile {...profileItems} />);

    expect(
      screen.getByRole("heading", { name: /John Doe/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /Bahia/i })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Salvador/i })
    ).toBeInTheDocument();
  });
});
