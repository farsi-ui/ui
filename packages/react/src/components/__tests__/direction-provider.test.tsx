import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { DirectionProvider, useDirection, useIsRTL } from '../../contexts/direction-context'

function DirectionDisplay() {
  const dir = useDirection()
  const isRTL = useIsRTL()
  return <span data-testid="dir">{isRTL ? 'rtl' : 'ltr'}</span>
}

describe('DirectionProvider', () => {
  it('defaults to RTL', () => {
    render(
      <DirectionProvider>
        <DirectionDisplay />
      </DirectionProvider>
    )
    expect(screen.getByTestId('dir')).toHaveTextContent('rtl')
  })

  it('supports LTR direction', () => {
    render(
      <DirectionProvider dir="ltr">
        <DirectionDisplay />
      </DirectionProvider>
    )
    expect(screen.getByTestId('dir')).toHaveTextContent('ltr')
  })
})
