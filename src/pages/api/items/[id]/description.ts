import { NextApiRequest, NextApiResponse } from 'next'

const DESCRIPTION_ITEM_URL = 'https://api.mercadolibre.com'
const DESCRIPTION_ITEM_PATH = '/items'

export const getDescriptionItemById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query
  if (!id) {
    return res.status(400).json({ error: 'Missing query parameter' })
  }

  try {
    const response = await fetch(
      `${DESCRIPTION_ITEM_URL}${DESCRIPTION_ITEM_PATH}/${id}/description`
    )
    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default getDescriptionItemById
