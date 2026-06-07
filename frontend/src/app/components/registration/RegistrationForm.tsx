'use client'

import { BRANCHES } from "@/app/lib/constants";
import { InputWithLabel } from "../components/InputWithLabel";
import { SelectWithLabel } from "../components/SelectWithLabel";
import { ButtonWithHint } from "../components/Button";
import { useForm } from "react-hook-form";
import { createRegistration, createRegistrationSchema } from "@/app/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

export function RegistrationForm() {


  const form = useForm<createRegistration>({
    resolver: zodResolver(createRegistrationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      branch: "",
      date: "",
    },
  })
  const errors = form.formState.errors
  const isValid = form.formState.isValid

  async function onSubmit(data: createRegistration) {
    alert(JSON.stringify(data, null, 2))
  }


  return <div className="px-4 w-full max-w-md">
    <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)} >
      <InputWithLabel
        label="ชื่อ"
        type="text"
        placeholder="กรุณากรอกชื่อ"
        required
        error={errors.name?.message}
        {...form.register("name")}
      />
      <InputWithLabel
        label="อีเมล"
        type="email"
        placeholder="กรุณากรอกอีเมล"
        required
        error={errors.email?.message}
        {...form.register("email")}
      />
      <InputWithLabel
        label="เบอร์โทรศัพท์"
        type="phone"
        placeholder="กรุณาเบอร์โทรศัพท์"
        required
        error={errors.phone?.message}
        {...form.register("phone")}
      />
      <SelectWithLabel
        label="สาขาที่สะดวกเข้ารับบริการ"
        placeholder="กรุณาเลือกสาขา"
        required
        options={BRANCHES.map((branch) => ({ value: branch, label: branch }))}
        error={errors.branch?.message}
        {...form.register("branch")}
      />

      <InputWithLabel
        label="วันที่สะดวกเข้ารับบริการ"
        placeholder="กรุณาเลือกวันที่"
        type="date"
        required
        error={errors.date?.message}
        {...form.register("date")}
      />

      <ButtonWithHint type="submit" hint={!isValid ? "กรุณาตรวจสอบรายละเอียดก่อนส่ง" : undefined}>ลงทะเบียน</ButtonWithHint>


    </form>
  </div>
}
