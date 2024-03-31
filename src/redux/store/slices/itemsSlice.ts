import { createSlice } from '@reduxjs/toolkit'

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    categoryId: '',
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
  },
})

export const { setItems, setCategoryId } = itemsSlice.actions
export default itemsSlice.reducer
