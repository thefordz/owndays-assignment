

'use client'

import { BRANCHES } from "@/app/lib/constants";
import { Filters } from "@/app/lib/types";
import { InputWithLabel } from "../ui/InputWithLabel";
import { SelectWithLabel } from "../ui/SelectWithLabel";

interface FilterBarProps {
  filters: Filters,
  onFilterChange: (filters: Filters) => void;
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {

  const BRANCHE_OPTIONS = [
    { value: "", label: "ทุกสาขา" },
    ...BRANCHES.map((branch) => ({ value: branch, label: branch }))

  ]

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full ">
      <InputWithLabel className="w-full" label="ค้นหา" value={filters.name} placeholder="ค้นหาด้วยรายชื่อ" onChange={(e) => onFilterChange({ ...filters, name: e.target.value })} />
      <div className=" flex gap-4  md:items-center flex-row md:flex-row w-full ">
        <SelectWithLabel className="w-full max-w-md" label="สาขา" value={filters.branch} options={BRANCHE_OPTIONS} onChange={(e) => onFilterChange({ ...filters, branch: e.target.value })} />
        <InputWithLabel className="w-full max-w-md" label="วันที่" type="date" value={filters.date} placeholder="ค้นหาจากวันที่" onChange={(e) => onFilterChange({ ...filters, date: e.target.value })} />
      </div>

    </div>
  )
}
