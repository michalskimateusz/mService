import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export type dataState = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export type Error = {
  status: boolean
  message: string
}

export interface galleryState {
  data: dataState[]
  filteredData: dataState[]
  status: string
  imageIndex: number
  error: Error
}

const initialState: galleryState = {
  data: [],
  filteredData: [],
  status: '',
  imageIndex: 0,
  error: {
    status: false,
    message: ''
  }
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
      if (state.filteredData.length === 0) {
        state.error = {
          status: true,
          message: 'Nothing found, try something different'
        }
      } else {
        state.error = {
          status: false,
          message: ''
        }
      }
    },
    reset(state) {
      state.filteredData = []
      state.status = ''
      state.imageIndex = 0
      state.error = {
        status: false,
        message: ''
      }
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
    },
    setError(state, { payload }) {
      state.error = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<[]>) => {
        state.status = 'idle'
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed'
        state.error = {
          status: true,
          message: 'Server error, please try again later'
        }
      })
  }
})

export const { filter, reset, prevImage, nextImage, setImage, setError } =
  gallerySlice.actions

export const selectGallery = (state: RootState) => state.gallery

export default gallerySlice.reducer
