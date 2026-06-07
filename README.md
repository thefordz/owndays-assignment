# Owndays Campaign | Assignment

## Features

- ฟอร์มลงทะเบียน: ชื่อ, อีเมล, เบอร์โทร, สาขา, วันที่ พร้อม validation ทั้ง api และ frontend
- Dashboard: ตารางผู้ลงทะเบียน, ค้นหา/กรองตามชื่อ-สาขา-วันที่, จำนวนคนลงทะเบียนทั้งหมด, จำนวนคนเข้าดูหน้ากิจกรรม
- นับยอดผู้เข้าชมหน้ากิจกรรม

## Tech Stack

| ส่วน | เทคโนโลยี |
|---|---|
| Frontend | Next.js (App Router), TypeScript, Tailwind CSS |
| Form & Validation | React Hook Form + Zod |
| HTTP Client | Axios |
| Backend | Express.js, TypeScript |
| Database | JSON file |

## Project Structure

```
owndays-assignment/
├── backend/          # Express API
│   ├── src/
│   │   ├── lib/      # db, types, validation, constants
│   │   ├── routes/   # registration, visit routes
│   │   └── server.ts
│   └── data/         # JSON database (สร้างอัตโนมัติ)
└── frontend/         # Next.js app
    └── src/
        ├── app/         # pages & layout
        ├── components/  # UI components
        └── lib/         # axios, api, schema, types
```

## Getting Started

### 1. Setup Backend

```bash
cd backend
```

สร้างไฟล์ `.env`:

```
PORT="3000"
FRONTEND_URL="http://localhost:4000"
```

ติดตั้ง package และรัน:

```bash
npm install
npm run dev
```

Backend จะรันที่ `http://localhost:3000`

### 2. Setup Frontend

```bash
cd frontend
```

สร้างไฟล์ `.env`:

```
NEXT_PUBLIC_BASE_API="http://localhost:3000/api"
```

ติดตั้ง package และรัน:

```bash
npm install
npm run dev
```

Frontend จะรันที่ `http://localhost:4000`

## API Endpoints

| Method | Path | คำอธิบาย |
|---|---|---|
| GET | `/api/registration` | ดึงรายการทั้งหมด (รองรับ query: `name`, `branch`, `date`) |
| GET | `/api/registration/count` | ดึงจำนวนผู้เข้าหน้ากิจกรรม |
| POST | `/api/registration` | เพิ่มผู้ลงทะเบียน |
| POST | `/api/visitor` | บันทึกการเข้าชม |
| GET | `/api/visitor` | จำนวนการเข้าชม |

## References & AI Usage
- **owndays** (https://www.owndays.com) ใช้สำหรับอ้างอิง design ของหน้าเว็บ
- **shadcn/ui** (https://ui.shadcn.com) — ผมเคยใช้ Shadcn UI และชอบ reusable ui components เลยนำมาปรับใช้ในโปรเจค
- **w3** (https://www.w3schools.com/html/html_tables.asp) เรื่องการทำ table
- **AI** — ใช้ช่วยในเรื่องต่อไปนี้:
  - ศึกษาการทำ JSON file database เช่น path กับ fs
  - ช่วย setup typeScript สำหรับ express
  - ตรวจสอบความถูกต้องของ API ตอนเจอบัค
  - ช่วยเขียน README

## Credits

Photo by [Jocelyn Morales](https://unsplggVGash.com/@molnj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/silver-framed-eyeglasses-on-white-table-Mv7kokwzIMw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
