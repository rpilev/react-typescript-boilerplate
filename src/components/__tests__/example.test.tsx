import React from 'react'
import { render } from '@testing-library/react'

import { ExampleComponent } from '@app/components'

describe(' App', () => {
  test('should render correctly', () => {
    const ExampleComponentRender = render(<ExampleComponent />)

    expect(ExampleComponentRender).toBeDefined()
    expect(ExampleComponentRender).toMatchSnapshot()
  })
})
