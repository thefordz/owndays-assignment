import path from "path";
import fs from "fs";

const DB_DIR = path.join(__dirname, "../db/");

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR);
}

export function WriteData<T>(filename: string, data: T[]) {
  const filePath = path.join(DB_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function ReadData<T>(filename: string): T[] {
  const filePath = path.join(DB_DIR, filename);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}
