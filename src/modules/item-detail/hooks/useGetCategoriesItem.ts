/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { getCategoriesItem } from '../services/items'

const useGetCategoriesItem = (
  id: string | string[] | undefined
): { itemCategories: string[] } => {
  const [itemCategories, setItemCategories] = useState([])

  useEffect(() => {
    if (id) {
      getCategoriesItemFunction()
    }
  }, [id])

  const getCategoriesItemFunction = async () => {
    try {
      const response = await getCategoriesItem(id)
      const itemCategories = response?.data?.path_from_root
      setItemCategories(itemCategories)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return { itemCategories }
}

export default useGetCategoriesItem
