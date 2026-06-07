import { RegistrationForm } from "./RegistrationForm";

export function RegistrationSection() {
  return <div id="registration" className="min-h-[calc(100vh-64px)]  flex items-center justify-center flex-col  space-y-6">
    <p className="text-2xl">ลงทะเบียนเข้าร่วมกิจกรรม</p>
    <RegistrationForm />

  </div>
}
