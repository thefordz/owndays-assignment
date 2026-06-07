import { cn } from "@/app/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonWithHintProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  hint?: string
}

export function ButtonWithHint({ children, className, hint, ...props }: ButtonWithHintProps) {
  return (
    <div className={cn(className, "space-y-0.5")}>
      <button className={"px-3 py-2.5 border w-full cursor-pointer bg-white text-black hover:bg-black hover:text-white transition-colors disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-white"} {...props}>{children}</button>

      {hint &&

        <p className=" text-sm text-gray-500">{hint}</p>
      }

    </div>
  )
}
