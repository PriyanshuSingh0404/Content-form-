"use client"

import type React from "react"

import { forwardRef } from "react"

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, id, disabled, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          id={id}
          placeholder=" "
          disabled={disabled}
          className={`peer w-full px-4 py-3 bg-background border-b-2 transition-all duration-200 focus:outline-none ${
            error ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          {...props}
        />
        <label
          htmlFor={id}
          className={`absolute left-4 top-3 text-sm font-medium transition-all duration-200 pointer-events-none ${
            error
              ? "text-destructive peer-placeholder-shown:text-muted-foreground"
              : "text-muted-foreground peer-placeholder-shown:text-muted-foreground peer-focus:text-primary"
          } peer-placeholder-shown:top-3 peer-focus:top-0 peer-focus:-translate-y-6 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-6`}
        >
          {label}
        </label>
        {error && <p className="text-xs font-medium text-destructive mt-1.5">{error}</p>}
      </div>
    )
  },
)

FloatingInput.displayName = "FloatingInput"
