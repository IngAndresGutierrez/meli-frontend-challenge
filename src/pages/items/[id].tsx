'use client'
import useGetDetailItem from '@/modules/item-detail/hooks/useGetDetailItem'

import { useRouter } from 'next/router'

const ItemDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { itemDetail } = useGetDetailItem(id)

  console.log({ itemDetail })

  return (
    <>
      <h1>ItemDetailPage {id}</h1>
      <p>{JSON.stringify(itemDetail)}</p>
    </>
  )
}

export default ItemDetailPage
