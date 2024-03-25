import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

const SearchComponent = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = async () => {
    router.push(`items?search=${query}`)
  }

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input type="text" value={query} onChange={handleQuery} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

export default SearchComponent
