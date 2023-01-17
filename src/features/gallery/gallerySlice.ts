import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export type dataState = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface galleryState {
  data: dataState[]
  filteredData: dataState[]
  status: string
  imageIndex: number
}

const initialState: galleryState = {
  data: [],
  filteredData: [],
  status: '',
  imageIndex: 0
}

export const fetchData = createAsyncThunk('gallery/fetch', async (thunkAPI) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = response.json()
  return data
})

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.filteredData = state.data.filter((el) => el.title.includes(payload))
      state.imageIndex = 0
    },
    reset(state) {
      state.filteredData = []
      state.imageIndex = 0
    },
    nextImage(state) {
      if (state.imageIndex < state.filteredData.length - 1) {
        state.imageIndex += 1
      }
    },
    prevImage(state) {
      if (state.imageIndex > 0) {
        state.imageIndex -= 1
      }
    },
    setImage(state, { payload }) {
      state.imageIndex = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { filter, reset, prevImage, nextImage, setImage } =
  gallerySlice.actions

export const selectGallery = (state: RootState) => state.gallery

export default gallerySlice.reducer
