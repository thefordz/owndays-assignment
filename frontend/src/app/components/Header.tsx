
"use client"
import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";

export function Header() {

  const pathname = usePathname()


  return <header className="sticky top-0 w-full h-16 z-50 bg-white ">
    <div className=" w-full h-full flex items-center justify-between px-4">
      <Logo />
      <div className="flex gap-4">
        <Link href={'/'} className={`${pathname === "/" && "underline  "} font-bold underline-offset-6 hover:underline`}>Campaign</Link>
        <Link href={'/analytics'} className={`${pathname === "/analytics" && "underline"} font-bold hover underline-offset-6 hover:underline`}>Analytics</Link>
      </div>

    </div>
  </header>
}
