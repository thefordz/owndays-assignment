import { BRANCHES } from "@/app/lib/constants";
import { InputWithLabel } from "../components/InputWithLabel";
import { SelectWithLabel } from "../components/SelectWithLabel";
import { ButtonWithHint } from "../components/Button";

export function RegistrationForm() {



  return <div className="px-4 w-full max-w-md">
    <form className="w-full space-y-6">
      <InputWithLabel
        label="ชื่อ"
        type="text"
        placeholder="กรุณากรอกชื่อ"
        required
      />
      <InputWithLabel
        label="อีเมล"
        type="email"
        placeholder="กรุณากรอกอีเมล"
        required
      />
      <InputWithLabel
        label="เบอร์โทรศัพท์"
        type="text"
        placeholder="กรุณาเบอร์โทรศัพท์"
        required
      />
      <SelectWithLabel
        label="สาขาที่สะดวกเข้ารับบริการ"
        placeholder="กรุณาเลือกสาขา"
        required
        options={BRANCHES.map((branch) => ({ value: branch, label: branch }))}
      />

      <InputWithLabel
        label="วันที่สะดวกเข้ารับบริการ"
        placeholder="กรุณาเลือกวันที่"
        type="date"
        required
      />

      <ButtonWithHint hint="กรุณาตรวจสอบรายละเอียดก่อนส่ง">ลงทะเบียน</ButtonWithHint>

    </form>
  </div>
}
