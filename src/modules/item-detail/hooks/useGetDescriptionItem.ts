/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { ItemDescription } from '../types/item'
import { getDescriptionItem } from '../services/items'

const useGetDescriptionItem = (
  id: string | string[] | undefined
): { itemDescription: ItemDescription } => {
  const [itemDescription, setItemDescription] = useState({ plain_text: '' })

  useEffect(() => {
    if (id) {
      getDescriptionItemFunction()
    }
  }, [id])

  const getDescriptionItemFunction = async () => {
    try {
      const response = await getDescriptionItem(id)
      const itemDescription = response.data
      setItemDescription(itemDescription)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return { itemDescription }
}

export default useGetDescriptionItem
