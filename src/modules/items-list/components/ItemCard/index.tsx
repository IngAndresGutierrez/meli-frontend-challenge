/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

import { Item } from '../../types/items'
import { Rating } from '@mui/material'
import { generateRandomRating } from '../../utils/random'

const ItemCardComponent: FC<Item> = ({
  title,
  price,
  shipping,
  thumbnail,
  installments,
}) => {
  return (
    <div className="item-card">
      <div className="item-card__image">
        <img src={thumbnail} alt={title} width={160} />
      </div>

      <div className="item-card__info">
        <div className="item-card__title">
          <span className="item-card__title-text">{title}</span>
        </div>

        <div className="item-card__columns">
          <div className="item-card__column-group">
            <div className="item-card__column">
              <div className="item-card__column-content">
                <div className="item-card__column-header">
                  <span className="item-card__column-price">${price}</span>
                </div>
                {installments?.quantity && (
                  <span className="item-card__column-installments">
                    en {installments?.quantity} x $ {installments?.amount}
                  </span>
                )}
              </div>
            </div>

            <div className="item-card__column">
              <div className="item-card__column-shipping">
                {shipping?.free_shipping && (
                  <span className="item-card__column-shipping-text">
                    Envío gratis
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="item-card__column-group-right">
            <div className="item-card__column">
              <div className="item-card__column-rating">
                <Rating
                  readOnly
                  size="small"
                  precision={0.1}
                  name="half-rating-read"
                  sx={{ color: '#3483fa' }}
                  defaultValue={generateRandomRating()}
                  className="item-card__column-rating--color"
                />
              </div>
              <div className="item-card__column-variants">
                <span className="item-card__column-variants-text">
                  Disponible en 2 colores
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCardComponent
