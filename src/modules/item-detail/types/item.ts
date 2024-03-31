export interface Item {
  id: string
  title: string
  price: string
  thumbnail: string
  installments: {
    quantity: string
    amount: string
  }
  shipping: {
    free_shipping: boolean
  }
  seller: {
    nickname: string
  }
  category_id: string
}

export interface ItemDescription {
  plain_text: string
}

export interface ItemDetailProps {
  item: Item
  itemDescription: ItemDescription
}
