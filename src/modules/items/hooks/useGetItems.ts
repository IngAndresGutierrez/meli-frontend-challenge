/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getItems } from '@/modules/items/services/items'
import { setItems } from '@/redux/store/slices/itemsSlice'

const useGetItems = (query: string) => {
  const dispatch = useDispatch()
  const [items, setItemsState] = useState([])

  useEffect(() => {
    if (query) {
      getItemsFunction()
    }
  }, [query])

  const getItemsFunction = async () => {
    try {
      const response = await getItems(query)
      const items = response.data.results
      setItemsState(items)
      dispatch(setItems(items))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return { items }
}

export default useGetItems
