import { Router } from "express";
import { ReadData, WriteData } from "../lib/db";
import { REGISTRATION_FILE } from "../lib/constants";
import { createRegistrationSchema } from "../lib/validation";
import { Filters, Registration } from "../lib/types";

const router = Router();

router.post("/", (req, res) => {
  let data = ReadData<Registration>(REGISTRATION_FILE);

  const result = createRegistrationSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.join("."),
      message: issue.message,
    }));
    return res.status(400).json({
      error: "ข้อมูลไม่ถูกต้อง",
      errors,
    });
  }

  const nextId = data.length
    ? Math.max(...data.map((registrationData) => registrationData.id)) + 1
    : 1;

  const newData: Registration = {
    id: nextId,
    ...result.data,
    createdAt: new Date().toISOString(),
  };

  data.push(newData);
  WriteData(REGISTRATION_FILE, data);

  return res.status(201).json(newData);
});

router.get("/", (req, res) => {
  let registrationData = ReadData<Registration>(REGISTRATION_FILE);

  const filters = req.query as Filters;

  const { name, branch, date } = filters;

  if (name) {
    registrationData = registrationData.filter((data) =>
      data.name.toLowerCase().trim().includes(name.toLowerCase().trim()),
    );
  }

  if (branch) {
    registrationData = registrationData.filter(
      (data) => data.branch === branch,
    );
  }

  if (date) {
    registrationData = registrationData.filter((data) => data.date === date);
  }

  return res.json(registrationData);
});

router.get("/count", (_req, res) => {
  let registrationData = ReadData<Registration>(REGISTRATION_FILE);

  const registrationCount = registrationData.length;

  return res.json(registrationCount);
});

export default router;
