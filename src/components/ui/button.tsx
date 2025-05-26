import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = '', ...props }) => {
  const base = "px-4 py-2 rounded transition font-semibold";
  const styles = variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "border border-gray-300 text-gray-700 hover:bg-gray-100";

  return <button {...props} className={`${base} ${styles} ${className}`}>{children}</button>;
};
