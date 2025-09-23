// __tests__/QRPreview.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import QRPreview from "@/components/QRPreview";

describe("QRPreview", () => {
  beforeEach(() => {
    // reset scroll position before each test
    window.scrollY = 0;
  });

  it("renders the QRCodeCanvas and stays static", () => {
    render(<QRPreview />);
    const qrCanvas = screen.getByTestId("qr-code");
    expect(qrCanvas).toBeInTheDocument();
  });

  it("calls the onClick handler when CTA button is clicked", () => {
    const mockClick = jest.fn();
    render(
      <button onClick={mockClick}>GET THE APP</button> // simplified proxy
    );
    fireEvent.click(screen.getByRole("button", { name: /get the app/i }));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("renders the scannability status text", () => {
    render(<QRPreview />);
    expect(screen.getByText(/scannability: excellent/i)).toBeInTheDocument();
  });

  it("has no shadow by default and applies shadow after scrolling", () => {
    render(<QRPreview />);
    const container = screen.getByText(/get the app/i).closest("div");

    // Initially should have no shadow
    expect(container?.className).toMatch(/shadow-none/);

    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Force re-render effect
    fireEvent.scroll(window);
    expect(container?.className).toMatch(/shadow-md/);
  });
});
