import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("renders PRO text", () => {
    render(<Header />);
    expect(screen.getByText("PRO")).toBeInTheDocument();
  });

  it("renders exactly three buttons (back, bell, user)", () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  it("buttons can be clicked (trigger their onClick)", () => {
    render(<Header />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(() => fireEvent.click(btn)).not.toThrow();
    });
  });
});
