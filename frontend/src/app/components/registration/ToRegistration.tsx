'use client'
import Link from "next/link";
import { ButtonWithHint } from "../components/Button";

export function ToRegistration() {
  return (

    <Link href={"#registration"} className="md:hidden">
      <ButtonWithHint type="button">ลงทะเบียนตอนนี้</ButtonWithHint>
    </Link>
  )
}
