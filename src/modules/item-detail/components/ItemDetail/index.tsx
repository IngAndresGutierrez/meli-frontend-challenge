/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { Rating } from '@mui/material'

import { ItemDetailProps } from '../../types/item'
import SimpleBackdrop from '@/modules/common/Backdrop'
import { generateRandomRating } from '@/modules/items-list/utils/random'

const ItemDetail: FC<ItemDetailProps> = ({ item, itemDescription }) => {
  console.log({ itemDescription: itemDescription.plain_text.split('\n') })
  const descriptionList = itemDescription?.plain_text?.split('\n')

  const renderDescription = descriptionList.map((item, index) => {
    if (item) {
      return (
        <li className="item-detail__description--text" key={index}>
          {item}
        </li>
      )
    }
  })

  return (
    <>
      <div className="item-detail">
        <div className="item-detail__container">
          <div className="item-detail__column-one">
            <div className="item-detail__image">
              <img
                src={item?.thumbnail}
                alt={item?.title}
                width={'90%'}
                height={'90%'}
              />
            </div>
          </div>

          <div className="item-detail__column-two">
            <div className="item-detail__title">{item?.title}</div>
            <div className="item-detail__rating">
              <Rating
                readOnly
                size="medium"
                precision={0.1}
                name="half-rating-read"
                sx={{ color: '#3483fa' }}
                defaultValue={generateRandomRating()}
                className="item-card__column-rating--color"
              />
            </div>

            <div className="item-detail__price">$ {item.price}</div>
            {item?.installments?.quantity && (
              <div className="item-detail__installments">
                en
                <span className="item-detail__installments--text">
                  {item?.installments?.quantity}x $ {item?.installments?.amount}
                </span>
              </div>
            )}

            <div className="item-detail__payment-methods">
              <a
                className="item-detail__payment-methods--link"
                href="https://articulo.mercadolibre.com.co/noindex/services/MCO1373318899/payments?new_version=true&amp;modal=false&amp;newIndex=true%3Fcontrolled%3Dtrue"
              >
                Ver los medios de pago
              </a>
            </div>

            <div className="item-detail__description">
              <h2 className="item-detail__description--title">
                Lo que tienes que saber de este producto
              </h2>
              <ul className="item-detail__description--list">
                {renderDescription}
              </ul>
            </div>
          </div>

          <div className="item-detail__column-three">1</div>
        </div>
      </div>

      <SimpleBackdrop open={Boolean(!item)} />
    </>
  )
}

export default ItemDetail
