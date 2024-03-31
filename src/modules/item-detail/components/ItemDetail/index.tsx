/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'

import { ItemDetailProps } from '../../types/item'
import SimpleBackdrop from '@/modules/common/components/Backdrop'
import { generateRandomRating } from '@/modules/items-list/utils/random'
import cardIcons from '../../../../../public/images/card-icons.png'
import warrantyImage from '../../../../../public/images/warranty.png'

const ItemDetail: FC<ItemDetailProps> = ({ item, itemDescription }) => {
  const { thumbnail, title, price, installments, seller, shipping } = item

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

  console.log({ item })

  return (
    <>
      <div className="item-detail">
        <div className="item-detail__container">
          <div className="item-detail__column-one">
            <div className="item-detail__image">
              {thumbnail && (
                <img src={thumbnail} alt={title} width={'97%'} height={'97%'} />
              )}
            </div>
          </div>

          <div className="item-detail__column-two">
            <div className="item-detail__title">{title}</div>
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

            <div className="item-detail__price">$ {price}</div>
            {installments?.quantity && (
              <div className="item-detail__installments">
                en
                <span className="item-detail__installments--text">
                  {installments?.quantity}x $ {installments?.amount}
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

          <div className="item-detail__column-three">
            <div className="item-detail__buy-box">
              <Image src={cardIcons} alt="card-icons" height={70} />

              {shipping?.free_shipping && (
                <div className="item-detail__free-shipping">
                  <span className="item-detail__free-shipping--text">
                    Envío gratis
                  </span>{' '}
                  a todo el pais
                </div>
              )}

              <div className="item-detail__shipping-time">
                <p className="item-detail__shipping-time--text">
                  Conoce los tiempos y las formas de envío.
                </p>

                <div>
                  <a
                    className="item-detail__shipping-time--action"
                    href="https://www.mercadolibre.com.co/gz/shipping-calculator?noIndex=true&amp;item_id=MCO2279791992&amp;new_version=true&amp;modal=false&amp;informative=true&amp;page_context=vpp&amp;location=true&amp;quantity=1&amp;can_go_cart_checkout=true&amp;calculator_experiment=true&amp;mode=embed&amp;flow=true"
                  >
                    Calcular cuándo llega
                  </a>
                </div>
              </div>

              <div className="item-detail__stock">
                <p className="item-detail__stock--text">Stock disponible</p>

                <div className="item-detail__stock-amount">
                  <span className="item-detail__stock-amount--text">
                    Cantidad:
                  </span>

                  <span className="item-detail__stock-amount--units">
                    1 unidad
                  </span>

                  <span className="item-detail__stock-amount--enable">
                    (5 disponibles)
                  </span>
                </div>
              </div>

              <div className="item-detail__actions-container">
                <button className="item-detail__actions-container--buy-button">
                  Comprar ahora
                </button>

                <button className="item-detail__actions-container--add-cart-button">
                  Agregar al carrito
                </button>
              </div>

              <div className="item-detail__seller">
                <div className="item-detail__seller-container">
                  <div>
                    <span className="item-detail__seller--text">
                      Vendido por
                    </span>
                    <span className="item-detail__seller--nickname">
                      {seller?.nickname || 'USERDUMMY'}
                    </span>
                  </div>
                  <div>
                    <span className="item-detail__seller--lead">
                      MercadoLíder |
                      <span className="item-detail__seller--sales">
                        +1000 ventas
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="item-detail__warranty">
                <Image src={warrantyImage} alt="warranty" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimpleBackdrop open={Boolean(!item.thumbnail)} />
    </>
  )
}

export default ItemDetail
