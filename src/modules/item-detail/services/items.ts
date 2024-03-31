import axios from 'axios'

const API_ITEMS = '/api/items'

export const getDetailItem = (id: string | string[] | undefined) => {
  return axios.get(`${API_ITEMS}/${id}`)
}

export const getDescriptionItem = (id: string | string[] | undefined) => {
  return axios.get(`${API_ITEMS}/${id}/description`)
}

export const getCategoriesItem = (id: string | string[] | undefined) => {
  return axios.get(`api/categories/${id}`)
}
