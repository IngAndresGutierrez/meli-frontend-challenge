/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { getDetailItem } from '@/modules/items/services/items'

const useGetDetailItem = (id: string | string[] | undefined) => {
  const [itemDetail, setItemDetail] = useState([])

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
