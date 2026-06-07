'use client'

import { useState, useEffect } from "react"
import { Filters, Registration } from "@/app/lib/types"
import { getRegistrationCount, getRegistrations, getVisitorCount } from "@/app/lib/api"
import { FilterBar } from "./FilterBar"
import { RegistrationTable } from "./RegistrationTable"
import { StatusBanner } from "./StatusBanner"

export function AnalyticsSection() {

  const [data, setData] = useState<Registration[] | []>([])
  const [registrationCount, setRegistrationCount] = useState<number>(0)
  const [visitorCount, setVisitorCount] = useState<number>(0)
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

    async function fetchRegistrationCount() {
      try {
        const data = await getRegistrationCount()
        setRegistrationCount(data)
      }
      catch {
        setRegistrationCount(0)
      }
    }

    async function fetchVisitorCount() {
      try {
        const data = await getVisitorCount()
        setVisitorCount(data)
      }
      catch {
        setVisitorCount(0)
      }
    }

    fetchData()
    fetchRegistrationCount()
    fetchVisitorCount()

  }, [filters])


  if (loading) {
    <div className="">{<span>กำลังโหลด ...</span>}</div>
  }
  if (error) {
    <div className=""><span>{error}</span></div>
  }

  return <div className="max-w-7xl mx-auto w-full space-y-4 py-6">

    <div className="grid grid-cols-2 gap-4">
      <StatusBanner label="จำนวนคนลงทะเบียนทั้งหมด" count={registrationCount} />
      <StatusBanner label="จำนวนผู้เข้าชมกิจกรรม" count={visitorCount} />
    </div>

    <FilterBar filters={filters} onFilterChange={setFilters} />

    <RegistrationTable data={data} />
  </div>

}
