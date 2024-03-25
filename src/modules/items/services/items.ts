import axios from 'axios'

const API_ITEMS = '/api/items'

export const getItems = (query: string) => {
  return axios.get(`${API_ITEMS}?q=${query}`)
}

export const getDetailItem = (id: string | string[] | undefined) => {
  return axios.get(`${API_ITEMS}/${id}`)
}
