import { render, screen, fireEvent } from "@testing-library/react";
import TemplateSelector from "@/components/TemplateSelector";

describe("TemplateSelector", () => {
  it("renders horizontal scroll container", () => {
    render(<TemplateSelector />);
    const container = screen.getByRole("list", { name: /Frame Templates/i });
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("overflow-x-auto");
  });

  it("renders heading text", () => {
    render(<TemplateSelector />);
    const heading = screen.getByRole("heading", { name: /Frame/i });
    expect(heading).toBeInTheDocument();
  });

  it("selects a template when clicked", () => {
    render(<TemplateSelector />);
    const scanMeDiv = screen.getByLabelText(/Scan Me/i);

    // initially not selected
    expect(scanMeDiv).not.toHaveClass("border-blue-400");

    // click to select
    fireEvent.click(scanMeDiv);
    expect(scanMeDiv).toHaveClass("border-blue-400");
  });
});
