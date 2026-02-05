'use client'

import { useEffect, useState } from 'react'

export function useIsRTL() {
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    try {
      const direction = document.documentElement?.dir
      setIsRTL(direction === 'rtl')
    } catch (error) {
      console.error('[v0] Failed to detect RTL direction:', error)
      setIsRTL(false)
    }
  }, [])

  return isRTL
}
