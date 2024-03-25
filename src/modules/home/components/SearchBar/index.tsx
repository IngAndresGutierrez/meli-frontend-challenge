/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

const SearchBarComponent = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = async () => {
    router.push(`items?search=${query}`)
  }

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <header
      role="banner"
      data-siteid="MCO"
      className="nav-header nav-header-plus ui-navigation-v2"
    >
      <div className="nav-bounds nav-bounds-with-cart">
        <div className="nav-header-plus-logo nav-area nav-top-area nav-left-area">
          <a className="nav-logo" href="">
            Mercado Libre Colombia - Donde comprar y vender de todo
          </a>
        </div>
        <div className="nav-area nav-top-area nav-center-area">
          <div className="nav-search">
            <label className="nav-header-visually-hidden" htmlFor="cb1-edit">
              Ingresa lo que quieras encontrar
            </label>
            <input
              type="text"
              className="nav-search-input"
              id="cb1-edit"
              name="as_word"
              placeholder="Buscar productos, marcas y más…"
              maxLength={120}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              autoComplete="off"
              value={query}
              onChange={handleQuery}
              aria-activedescendant=""
              aria-controls="cb1-list"
              aria-autocomplete="list"
              aria-expanded="false"
              role="combobox"
            />
            <button className="nav-search-btn">
              <div
                role="img"
                aria-label="Buscar"
                className="nav-icon-search"
                onClick={handleSearch}
              ></div>
            </button>
            <div
              className="sb-suggestions"
              id="sb-suggestions-1"
              aria-hidden="true"
              style={{ top: '40px', width: '344px', position: 'absolute' }}
            >
              <ul
                className="sb-suggestions__list"
                role="listbox"
                id="cb1-list"
              ></ul>
              <div className="sb-suggestions__wrapper--additional">
                <ul className="sb-suggestions__list--additional"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-area nav-top-area nav-right-area">
          <a href="" className="exhibitor__picture">
            <img
              src="https://http2.mlstatic.com/D_NQ_927556-MLA74342696385_022024-OO.webp"
              title="LOYALTY AO 2024"
              alt="LOYALTY AO 2024"
            />
          </a>
        </div>
        <div className="nav-header-plus-cp-wrapper nav-area nav-bottom-area nav-left-area">
          <a
            className="nav-header-cp-anchor"
            data-js="cp"
            href=""
            data-modal-action="true"
          >
            <span className="nav-menu-cp-send">Ingresa tu</span>
            <span className="nav-menu-link-cp"> ubicación</span>
          </a>
        </div>
        <div className="nav-area nav-bottom-area nav-center-area">
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li className="nav-menu-item">
                <a
                  href=""
                  className="nav-menu-categories-link"
                  data-js="nav-menu-categories-trigger"
                  rel=""
                  aria-expanded="false"
                  role="button"
                >
                  Categorías
                </a>
                <div
                  className="nav-categs"
                  data-js="nav-categs"
                  aria-label="Categorías"
                  aria-modal="true"
                  tabIndex={-1}
                  role="dialog"
                  hidden={false}
                >
                  <ul
                    className="nav-categs-departments"
                    data-js="nav-categs-departments"
                  ></ul>
                  <div
                    className="nav-categs-detail"
                    data-js="nav-categs-detail"
                    aria-modal="true"
                    tabIndex={-1}
                    role="dialog"
                    hidden={false}
                  ></div>
                </div>
              </li>
              <li className="nav-menu-item">
                <a href="" className="nav-menu-item-link" rel="nofollow">
                  Ofertas
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="" className="nav-menu-item-link" rel="nofollow">
                  Historial
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="" className="nav-menu-item-link" rel="nofollow">
                  Supermercado
                  <span className="nav-link-tag nav-link-tag--small supermercado">
                    Nuevo
                  </span>
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="" className="nav-menu-item-link" rel="nofollow">
                  Moda
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="" className="nav-menu-item-link" rel="nofollow">
                  Vender
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="" className="nav-menu-item-link" rel="nofollow">
                  Ayuda / PQR
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-header-plus-menu-wrapper nav-area nav-bottom-area nav-right-area">
          <nav id="nav-header-menu">
            <a href="" data-link-id="registration" rel="nofollow">
              Crea tu cuenta
            </a>
            <a href="" data-link-id="login" rel="nofollow">
              Ingresa
            </a>
            <a href="" data-link-id="purchases" rel="nofollow">
              Mis compras
            </a>
          </nav>
          <a
            href=""
            title="Carrito"
            className="nav-cart nav-cart-empty"
            id="nav-cart"
          >
            <i className="nav-icon-cart"></i>
            <span className="nav-header-visually-hidden">
              0 productos en tu carrito
            </span>
            <span className="nav-icon-cart-quantity"></span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default SearchBarComponent
