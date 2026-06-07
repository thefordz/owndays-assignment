

import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface ThProps {
  children: ReactNode
}
interface TdProps {
  children: ReactNode
  colSpan?: number,
  className?: string
}

export function Th({ children }: ThProps) {
  return (

    <th className="py-3 bg-gray-200">{children}</th>
  )

}

export function Td({ children, colSpan, className }: TdProps) {
  return (

    <td colSpan={colSpan} className={cn("py-4 text-center border-b border-gray-200", className)}>{children}</td>
  )

}
