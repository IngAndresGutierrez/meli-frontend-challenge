import { render } from '@testing-library/react'

import ItemDetail from '../../../modules/item-detail/components/ItemDetail'

const item = {
  id: '1',
  title: 'test item',
  price: '199999',
  thumbnail: '',
  installments: {
    quantity: '6',
    amount: '120000',
  },
  shipping: {
    free_shipping: true,
  },
  seller: {
    nickname: 'user_test',
  },
}

test('renders ItemDetail correctly', () => {
  const { asFragment } = render(
    <ItemDetail
      item={item}
      itemDescription={{ plain_text: 'test description' }}
    />
  )
  expect(asFragment()).toMatchSnapshot()
})
