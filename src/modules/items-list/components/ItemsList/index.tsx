/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'

import ItemCard from '../ItemCard'
import { ItemsListProps } from '../../types/items'
import SimpleBackdrop from '@/modules/common/components/Backdrop'
import BreadcrumbsComponent from '@/modules/common/components/Breadcrumbs'
import { setCategoryId } from '@/redux/store/slices/itemsSlice'

const ItemsList: FC<ItemsListProps> = ({ items }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategoryId(items[0]?.category_id))
  }, [items])

  const renderItems = items?.map((item, index) => {
    const {
      id,
      title,
      price,
      thumbnail,
      installments,
      shipping,
      seller,
      category_id,
    } = item
    return (
      <div key={item.id}>
        {index < 4 && (
          <ItemCard
            id={id}
            title={title}
            price={price}
            seller={seller}
            shipping={shipping}
            thumbnail={thumbnail}
            installments={installments}
            category_id={category_id}
          />
        )}
      </div>
    )
  })

  return (
    <div className="items-list">
      <Grid className="items-list__container" container>
        <Grid item xs={12} md={4} alignItems={'flex-start'}>
          <BreadcrumbsComponent />
        </Grid>
        <Grid item xs={12} md={8}>
          {renderItems}
        </Grid>
      </Grid>
      <SimpleBackdrop open={!items?.length} />
    </div>
  )
}

export default ItemsList
