import { render, screen } from "@testing-library/react";
import Notification from "../notification/index";

describe("When everything is ok", () => {
  test("Should show notification when you add a pokemon to your pokedex", () => {
    render(<Notification added={true} />);
    const fromScreen = screen.getByText("Pokemon captured!");
    expect(fromScreen).toBeInTheDocument();
  });

  test("Should show notification when you remove a pokemon from your pokedex", () => {
    render(<Notification added={false} />);
    const fromScreen = screen.getByText("Pokemon released!");
    expect(fromScreen).toBeInTheDocument();
  });
});

describe("When everything is not ok", () => {
  test("Should show notification when error props equal true", () => {
    render(<Notification error={true} />);
    const fromScreen = screen.getByText("Oops! Looks like it's not a Pokemon");
    expect(fromScreen).toBeInTheDocument();
  });
});
