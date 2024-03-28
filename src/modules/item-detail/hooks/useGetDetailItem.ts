/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { Item } from '../types/item'
import { getDetailItem } from '../services/items'
import { emptyItem } from '../utils/constants/item'

const useGetDetailItem = (
  id: string | string[] | undefined
): { itemDetail: Item } => {
  const [itemDetail, setItemDetail] = useState(emptyItem)

  useEffect(() => {
    if (id) {
      getDetailItemFunction()
    }
  }, [id])

  const getDetailItemFunction = async () => {
    try {
      const response = await getDetailItem(id)
      const itemDetail = response.data
      setItemDetail(itemDetail)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  return { itemDetail }
}

export default useGetDetailItem
