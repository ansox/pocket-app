import { render } from '@redwoodjs/testing/web'

import CardArticle from './CardArticle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardArticle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardArticle />)
    }).not.toThrow()
  })
})
