import { RegistrationForm } from "./RegistrationForm";

export function RegistrationSection() {
  return <div id="registration" className="min-h-screen  flex items-center justify-center flex-col  space-y-4">
    <p>ลงทะเบียนเข้าร่วมกิจกรรม</p>
    <RegistrationForm />

  </div>
}
