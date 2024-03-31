import { render } from '@testing-library/react'

import Backdrop from '../../../modules/common/components/Backdrop'

test('renders Backdrop correctly', () => {
  const { asFragment } = render(<Backdrop />)
  expect(asFragment()).toMatchSnapshot()
})
