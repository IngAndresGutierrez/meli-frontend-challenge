import { FC } from 'react'
import { Grid } from '@mui/material'

import './styles.css'
import ItemCard from '../ItemCard'
import { Item } from '../../types/items'

const ItemsList: FC<{ items: Item[] }> = ({ items }) => {
  const renderItems = items?.map((item, index) => {
    const { id, title, thumbnail } = item
    return (
      <>
        {index < 4 && (
          <ItemCard key={item.id} id={id} title={title} thumbnail={thumbnail} />
        )}
      </>
    )
  })

  return (
    <div className="list">
      <Grid className="list__container" container>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={9}>
          {renderItems}
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemsList
