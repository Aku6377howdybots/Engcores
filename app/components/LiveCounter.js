'use client'
import { useState, useEffect } from 'react'

export default function LiveCounter() {
  const [count, setCount] = useState(847)

  useEffect(() => {
    const update = () => {
      setCount(prev => {
        const change = Math.floor(Math.random() * 40) - 18
        const next = prev + change
        return Math.min(2000, Math.max(50, next))
      })
    }
    const interval = setInterval(update, 3000)
    setCount(Math.floor(Math.random() * (1200 - 200 + 1)) + 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="live-counter">
      <span className="live-dot" />
      <span className="live-num">{count.toLocaleString()}</span>
      <span className="live-label">people viewing right now</span>
    </div>
  )
}
