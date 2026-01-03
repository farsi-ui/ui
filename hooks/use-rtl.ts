'use client'

import { useEffect, useState } from 'react'

export function useIsRTL() {
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    try {
      setIsRTL(typeof document !== 'undefined' && document.documentElement?.dir === 'rtl')
    } catch {
      setIsRTL(false)
    }
  }, [])

  return isRTL
}
