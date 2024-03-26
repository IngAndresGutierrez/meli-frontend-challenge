import { FC } from 'react'
import { Grid } from '@mui/material'

import ItemCard from '../ItemCard'
import { Item } from '../../types/items'
import SimpleBackdrop from '@/modules/common/Backdrop'

const ItemsList: FC<{ items: Item[] }> = ({ items }) => {
  const renderItems = items?.map((item, index) => {
    const { id, title, price, thumbnail, installments, shipping } = item
    return (
      <div key={item.id}>
        {index < 4 && (
          <ItemCard
            id={id}
            title={title}
            price={price}
            shipping={shipping}
            thumbnail={thumbnail}
            installments={installments}
          />
        )}
      </div>
    )
  })

  return (
    <div className="items-list">
      <Grid className="items-list__container" container>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={8}>
          {renderItems}
        </Grid>
      </Grid>
      <SimpleBackdrop open={!items?.length} />
    </div>
  )
}

export default ItemsList
