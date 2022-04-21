import { render } from '@redwoodjs/testing/web'

import LoadingPage from './LoadingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoadingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingPage />)
    }).not.toThrow()
  })
})
