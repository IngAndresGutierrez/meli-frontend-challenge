/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

import './styles.css'
import { Item } from '../../types/items'

const ItemCardComponent: FC<Item> = ({ title, thumbnail }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={thumbnail} alt={title} width={160} />
      </div>
      <div className="card__information">
        <div className="card__title">Título del Producto</div>
        <div className="card__price">Precio: $XX.XX</div>
        <div className="card__attribute">Otro Atributo</div>
      </div>
    </div>
  )
}

export default ItemCardComponent
