import { render } from '@testing-library/react'

import ItemList from '../../../modules/items-list/components/ItemsList'

test('renders ItemList correctly', () => {
  const { asFragment } = render(<ItemList />)
  expect(asFragment()).toMatchSnapshot()
})
