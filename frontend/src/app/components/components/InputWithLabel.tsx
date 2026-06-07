import { cn } from "@/app/lib/utils";
import { InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  required?: boolean
  className?: string
  error?: string
}

export function InputWithLabel({ label, required, className, error, ...props }: InputWithLabelProps) {
  return <div className="flex flex-col space-y-0.5 w-full">
    {label && (
      <label>{label} {required && <span className="text-red-500">*</span>}</label>
    )}
    <input className={cn(className, "px-3 py-2.5 bg-gray-200 rounded-lg")} {...props} />
    {error && <span className="text-red-500">{error}</span>}
  </div>

}
