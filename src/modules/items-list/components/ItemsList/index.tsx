import { FC } from 'react'
import { Grid } from '@mui/material'

import './styles.css'
import ItemCard from '../ItemCard'
import { Item } from '../../types/items'

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
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={9}>
          {renderItems}
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemsList
