

import { Registration } from "@/app/lib/types"
import { Td, Th } from "./TableCell"

interface TableProps {
  data: Registration[]
}

export function RegistrationTable({ data }: TableProps) {
  return <div className="w-full overflow-x-auto rounded-lg">
    <table className="w-full min-w-2xl ">
      <thead className="w-full ">
        <tr className="px-4">
          <Th>ไอดี</Th>
          <Th>ชื่อ</Th>
          <Th>เบอร์โทรศัพท์</Th>
          <Th>อีเมล</Th>
          <Th>สาขา</Th>
          <Th>วันที่</Th>

        </tr>
      </thead>
      <tbody className="w-full overflow-hidden">
        {!data || data.length === 0 ? (<tr>
          <Td colSpan={6} className="text-center py-4">ไม่พบข้อมูล</Td>
        </tr>) : (data.map((value) => (
          <tr key={value.id} className="hover:bg-gray-200 transition-colors">
            <Td>{value.id}</Td>
            <Td>{value.name}</Td>
            <Td>{value.phone}</Td>
            <Td>{value.email}</Td>
            <Td>{value.branch}</Td>
            <Td className="text-left">{value.date}</Td>
          </tr>
        ))


        )}
      </tbody>
    </table>
  </div>
}
