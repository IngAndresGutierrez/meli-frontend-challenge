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
}
