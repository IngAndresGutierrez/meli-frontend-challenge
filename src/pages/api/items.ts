import { NextApiRequest, NextApiResponse } from 'next'

const ITEMS_URL = 'https://api.mercadolibre.com'
const ITEMS_PATH = '/sites/MLA/search'

export const getItemsByQuery = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { q } = req.query
  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter' })
  }

  try {
    const response = await fetch(`${ITEMS_URL}${ITEMS_PATH}?q=${q}`)
    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default getItemsByQuery
