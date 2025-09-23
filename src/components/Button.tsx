import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-lg text-sm font-medium transition-colors";
  const variantClasses = clsx({
    "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
    "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50":
      variant === "secondary",
  });

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}
