'use client'
import { cn } from "@/app/lib/utils";
import { SelectHTMLAttributes } from "react";

interface Option {
  label: string,
  value: string,
}

interface SelectWithLabelProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  required?: boolean
  placeholder?: string
  className?: string
  error?: string
  options: Option[]
}

export function SelectWithLabel({ label, required, placeholder, className, error, options, ...props }: SelectWithLabelProps) {
  return <div className="flex flex-col space-y-0.5 w-full">
    {label && (
      <label>{label} {required && <span className="text-red-500">*</span>}</label>
    )}
    <select className={cn(className, "px-3 py-2.5 bg-gray-200 rounded-lg  appearance-none")}  {...props} >

      {placeholder && <option className="" value={""}>{placeholder}</option>}
      {options.map((option) => (
        <option className="" key={option.value} value={option.value}>{option.label}</option>
      ))}



    </select>
    {error && <span className="text-red-500">{error}</span>}
  </div>

}
