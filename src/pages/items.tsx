'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Item } from '@/modules/items/types/items'
import useGetItems from '@/modules/items/hooks/useGetItems'
import SearchBarComponent from '@/modules/home/components/SearchBar'

const ItemsPage = () => {
  const searchParams = useSearchParams()
  const searchQueryParam = searchParams?.get('search')
  const { items } = useGetItems(searchQueryParam || '')

  return (
    <>
      <SearchBarComponent />
      <ul>
        {items.map((item: Item) => (
          <Link key={item.id} href={`items/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default ItemsPage
