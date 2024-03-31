import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBar = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = async () => {
    router.push({
      pathname: '/items',
      query: { search: query },
    })
  }

  const handleQuery = (e) => {
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
          <a className="nav-logo">
            Mercado Libre Colombia - Donde comprar y vender de todo
          </a>
        </div>
        <div className="nav-area nav-top-area nav-center-area">
          <div className="nav-search" role="search">
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
                onClick={handleSearch}
                className="nav-icon-search"
              ></div>
            </button>
            <div
              className="sb-suggestions"
              id="sb-suggestions-1"
              aria-hidden="true"
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

        <div className="nav-area nav-bottom-area nav-center-area">
          <div className="nav-menu">
            <ul className="nav-menu-list">
              <li className="nav-menu-item">
                <a
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
                <a className="nav-menu-item-link" rel="nofollow">
                  Ofertas
                </a>
              </li>
              <li className="nav-menu-item">
                <a className="nav-menu-item-link" rel="nofollow">
                  Historial
                </a>
              </li>
              <li className="nav-menu-item">
                <a className="nav-menu-item-link" rel="nofollow">
                  Supermercado
                  <span className="nav-link-tag nav-link-tag--small supermercado">
                    Nuevo
                  </span>
                </a>
              </li>
              <li className="nav-menu-item">
                <a className="nav-menu-item-link" rel="nofollow">
                  Moda
                </a>
              </li>
              <li className="nav-menu-item">
                <a className="nav-menu-item-link" rel="nofollow">
                  Vender
                </a>
              </li>
              <li className="nav-menu-item">
                <a className="nav-menu-item-link" rel="nofollow">
                  Ayuda / PQR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SearchBar
