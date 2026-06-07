'use client'

import { useState, useEffect } from "react"
import { Filters, Registration } from "@/app/lib/types"
import { getRegistrations } from "@/app/lib/api"
import { FilterBar } from "./FilterBar"

export function AnalyticsSection() {

  const [data, setData] = useState<Registration[] | []>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<Filters>({
    name: "",
    branch: "",
    date: ""
  })

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const data = await getRegistrations(filters)
        setData(data)
      }
      catch {
        setData([])
        setError("เกิดข้อผิดพลาด")
      }
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [filters])


  if (loading) {
    <div className="">{<span>กำลังโหลด ...</span>}</div>
  }
  if (error) {
    <div className=""><span>{error}</span></div>
  }

  return <div className="max-w-7xl mx-auto w-full">
    <FilterBar filters={filters} onFilterChange={setFilters} />

    {JSON.stringify(data, null, 2)}
  </div>

}
