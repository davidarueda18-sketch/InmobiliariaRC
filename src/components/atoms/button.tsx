import React, { forwardRef } from 'react';

const VARIANTS = {
  primary: "bg-eerie-black text-white hover:bg-dark-gray",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border-2 border-eerie-black text-eerie-black hover:bg-dark-gray",
  danger: "bg-red-600 text-white hover:bg-red-700",
} as const;

const SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",  
  lg: "px-8 py-3 text-lg",
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", isLoading, disabled, ...props }, ref) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none focus:ring focus:ring-offset disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = VARIANTS[variant];
    const sizeStyles = SIZES[size];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? "Cargando..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";