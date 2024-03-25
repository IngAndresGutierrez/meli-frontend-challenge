'use client'
import { useSearchParams } from 'next/navigation'

import SearchBar from '@/modules/home/components/SearchBar'
import useGetItems from '@/modules/items-list/hooks/useGetItems'
import ItemsList from '@/modules/items-list/components/ItemsList'

const ItemsPage = () => {
  const searchParams = useSearchParams()
  const searchQueryParam = searchParams?.get('search')
  const { items } = useGetItems(searchQueryParam || '')

  return (
    <>
      <SearchBar />
      <ItemsList items={items} />
    </>
  )
}

export default ItemsPage
