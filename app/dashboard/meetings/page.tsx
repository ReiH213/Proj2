"use client"

import Card from "@/app/ui/dashboard/card/Card"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import React, { useEffect } from "react"
import { FaPeopleArrows } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
const Meetings = () => {
  const { status } = useSession()
  useEffect(() => {
    if (status == "unauthenticated") {
      redirect('/login')
    }
  }, [status])
  const Icon = <FaPeopleArrows size="60px" />
  const Icon1 = <IoIosPeople size="60px" />
  return (
    <div className="flex flex-row justify-center items-center py-6 m-4 gap-x-[178px]">
      <div className="max-w-[25vw]">
        <Card title="Create a meeting" link='/dashboard/meetings/meeting' icon={Icon} />
      </div>
    </div>
  )
}

export default Meetings