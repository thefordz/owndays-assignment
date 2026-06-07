
import Image from "next/image";
import { ToRegistration } from "./ToRegistration";

export function Campaign() {
  return (

    <div className="relative  min-h-[calc(100vh-64px)]">
      <Image src={"/bg.jpeg"} alt="Photo by Jocelyn Morales on Unsplash" fill className="object-cover " />

      <div className="absolute bg-black/40 inset-0 z-0" />

      <div className="relative z-10 h-full flex items-center justify-between flex-col p-10">
        <div className="flex  w-full justify-end">
          <span className="w-15 h-15 rotate-12 rounded-full bg-white text-black flex items-center justify-center text-xl font-extrabold">
            Free
          </span>
        </div>

        <div>
          <h1 className="bg-black text-white px-3 py-2 font-semibold text-3xl xl:text-6xl ">New Day New Eye</h1>
          <span className="font-extrabold uppercase text-white block text-right lg:text-xl">By Owndays</span>

        </div>

        <div className="space-y-4">
          <p className="text-white  indent-8 tracking-wide">
            นี่คือโอกาสสำหรับคนสายตาสั้น ตอนนี้ Owndays มีกิจกรรมตัดแว่น
            <span className="font-bold underline underline-offset-2">ฟรีทั่วประเทศ</span>
          </p>
          <p className="text-white  indent-8 tracking-wider">
            สำหรับใครที่สนใจเข้าร่วมกิจกรรม สามารถกรอกรายละเอียดการเข้ารับบริการในแบบฟอร์มได้เลย

          </p>

          <ToRegistration />
        </div>
      </div>

    </div>
  )
}
