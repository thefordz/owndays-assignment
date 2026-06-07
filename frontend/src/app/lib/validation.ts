import z from "zod";
import { BRANCHES } from "./constants";

export const createRegistrationSchema = z.object({
  name: z.string().min(1, "กรุณากรอกชื่อ"),
  email: z.email("กรุณากรอกอีเมลให้ถูกต้อง").trim().min(1, "กรุณากรอกอีเมล"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก")
    .min(1, "กรุณากรอกเบอร์โทรศัพท์"),
  date: z.string().min(1, "กรุณากรอกวันเข้ารับบริการ"),
  branch: z.enum(BRANCHES, "กรุณาเลือกสาขาเข้ารับบริการ"),
});

export type createRegistration = z.infer<typeof createRegistrationSchema>;
