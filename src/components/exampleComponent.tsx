import React, { useState, useEffect } from 'react'

export const ExampleComponent = (): JSX.Element => {
  const initialCount = 0
  const timeBeforeIncrement = 1000
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, timeBeforeIncrement)
  }, [count])

  return <p>This is an example component. {count} seconds have passed.</p>
}
