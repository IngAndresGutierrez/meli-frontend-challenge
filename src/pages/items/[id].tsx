'use client'
import { useRouter } from 'next/router'

import SearchBar from '@/modules/common/components/SearchBar'
import ItemDetail from '@/modules/item-detail/components/ItemDetail'
import useGetDetailItem from '@/modules/item-detail/hooks/useGetDetailItem'
import useGetDescriptionItem from '@/modules/item-detail/hooks/useGetDescriptionItem'

const ItemDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const { itemDetail } = useGetDetailItem(id)
  const { itemDescription } = useGetDescriptionItem(id)

  return (
    <>
      <SearchBar />
      <ItemDetail item={itemDetail} itemDescription={itemDescription} />
    </>
  )
}

export default ItemDetailPage
