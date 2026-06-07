import { Router } from "express";
import { ReadData, WriteData } from "../lib/db";
import { VISITOR_FILE } from "../lib/constants";
import { Visitor } from "../lib/types";

const router = Router();

router.post("/", (_req, res) => {
  let data = ReadData<Visitor>(VISITOR_FILE);
  const nextId = data.length ? Math.max(...data.map((v) => v.id)) + 1 : 1;
  const newVisitor: Visitor = {
    id: nextId,
    visitedAt: new Date().toISOString(),
  };
  data.push(newVisitor);
  WriteData(VISITOR_FILE, data);

  return res.status(201).json(newVisitor);
});

router.get("/", (_req, res) => {
  let registrationData = ReadData<Visitor>(VISITOR_FILE);

  const count = registrationData.length;

  return res.json(count);
});

export default router;
