import { render, screen, fireEvent } from "@testing-library/react";
import FrameOptions from "@/components/FrameOptions";

describe("FrameOptions", () => {
  it("renders color input with default value", () => {
    render(<FrameOptions />);
    const colorInput = screen.getByLabelText(
      /Frame Color/i
    ) as HTMLInputElement;
    expect(colorInput).toBeInTheDocument();
    expect(colorInput.value).toBe("#000000");

    // change color
    fireEvent.change(colorInput, { target: { value: "#ff0000" } });
    expect(colorInput.value).toBe("#ff0000");

    // check displayed color text also updates
    expect(screen.getByText("#ff0000")).toBeInTheDocument();
  });

  it("renders text input with default value", () => {
    render(<FrameOptions />);
    const textInput = screen.getByLabelText(/Frame Text/i) as HTMLInputElement;
    expect(textInput).toBeInTheDocument();
    expect(textInput.value).toBe("SCAN ME");

    // change text
    fireEvent.change(textInput, { target: { value: "HELLO" } });
    expect(textInput.value).toBe("HELLO");
  });

  it("renders labels correctly associated with inputs", () => {
    render(<FrameOptions />);
    const colorLabel = screen.getByText(/Frame Color:/i);
    const textLabel = screen.getByText(/Frame Text:/i);

    expect(colorLabel).toBeInTheDocument();
    expect(textLabel).toBeInTheDocument();

    // both labels are associated with inputs via htmlFor
    const colorInput = screen.getByLabelText(/Frame Color/i);
    const textInput = screen.getByLabelText(/Frame Text/i);

    expect(colorInput).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
  });
});
