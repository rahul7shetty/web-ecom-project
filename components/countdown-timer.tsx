"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ days, hours, minutes, seconds }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft((prev) => ({ ...prev, seconds: prev.seconds - 1 }))
      } else if (timeLeft.minutes > 0) {
        setTimeLeft((prev) => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }))
      } else if (timeLeft.hours > 0) {
        setTimeLeft((prev) => ({ ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }))
      } else if (timeLeft.days > 0) {
        setTimeLeft((prev) => ({ ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold">{timeLeft.days.toString().padStart(2, "0")}</div>
        <div className="text-xs text-gray-500">Days</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
        <div className="text-xs text-gray-500">Hours</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
        <div className="text-xs text-gray-500">Minutes</div>
      </div>
      <div className="text-xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
        <div className="text-xs text-gray-500">Seconds</div>
      </div>
    </div>
  )
}
