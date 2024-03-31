import { NextApiRequest, NextApiResponse } from 'next'

const DETAIL_ITEM_URL = 'https://api.mercadolibre.com'
const DETAIL_ITEM_PATH = '/items'

export const getDetailItemById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query
  const author = {
    name: 'Andres',
    lastname: 'Gutierrez',
  }

  if (!id) {
    return res.status(400).json({ error: 'Missing query parameter' })
  }

  try {
    const response = await fetch(`${DETAIL_ITEM_URL}${DETAIL_ITEM_PATH}/${id}`)
    const data = await response.json()
    return res.status(200).json({ author, ...data })
  } catch (error) {
    console.error('Error fetching data:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default getDetailItemById
