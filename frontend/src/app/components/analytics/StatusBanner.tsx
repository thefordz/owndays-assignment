import { cn } from "@/app/lib/utils"

interface StatusBannerProps {
  label: string,
  count: number,
  className?: string
}

export function StatusBanner({ label, count, className }: StatusBannerProps) {
  return <div className={cn("rounded-lg bg-gray-200 flex-col p-5  shadow-md", className)}>
    <p className="text-lg">
      {label}
    </p>
    <p className="text-right text-4xl font-bold">{count}</p>
  </div>
}
