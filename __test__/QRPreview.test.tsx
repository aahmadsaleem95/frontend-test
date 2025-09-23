import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QRPreview from "../src/components/QRPreview";

describe("QRPreview", () => {
  it("renders QR code and button", () => {
    render(<QRPreview />);

    // check QR code canvas
    expect(screen.getByRole("img")).toBeInTheDocument();

    // check button
    expect(screen.getByText("GET THE APP")).toBeInTheDocument();

    // check status
    expect(screen.getByText(/Scannability: Excellent/i)).toBeInTheDocument();

    // check QR code component
    expect(screen.getByTestId("qr-code")).toBeInTheDocument();
  });
});
