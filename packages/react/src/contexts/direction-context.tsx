'use client'

import * as React from 'react'
import { DirectionProvider as RadixDirectionProvider } from '@radix-ui/react-direction'

type Direction = 'ltr' | 'rtl'

const DirectionContext = React.createContext<Direction>('ltr')

function DirectionProvider({
  dir = 'rtl',
  children,
}: {
  dir?: Direction
  children: React.ReactNode
}) {
  return (
    <DirectionContext.Provider value={dir}>
      <RadixDirectionProvider dir={dir}>
        {children}
      </RadixDirectionProvider>
    </DirectionContext.Provider>
  )
}

function useDirection(): Direction {
  return React.useContext(DirectionContext)
}

function useIsRTL(): boolean {
  return useDirection() === 'rtl'
}

function useIsLTR(): boolean {
  return useDirection() === 'ltr'
}

export { DirectionProvider, useDirection, useIsRTL, useIsLTR }
export type { Direction }
