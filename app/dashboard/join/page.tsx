"use client"
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const Join = () => {
  const [meetingId,setMeetingId] = useState('')
  const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault()
    console.log(meetingId);
    
    redirect(`http://localhost:3000/dashboard/meetings/meeting?roomID=${meetingId}`)
  }
  return (
    <div className='flex justify-center items-center min-h-full'>
     <form className='flex flex-col items-center justify-center gap-y-8' onSubmit={handleSubmit}>
     <label htmlFor="">Enter meeting ID </label>
      <input type="text" required placeholder='' value={meetingId} onChange={(e)=>setMeetingId(e.target.value)} className="p-1 rounded-md text-black"/>
      <button className='bg-cyan-700 p-2 rounded-md hover:bg-cyan-700/90' type='submit'>Join Meeting</button>
     </form>
    </div>
  )
}

export default Join