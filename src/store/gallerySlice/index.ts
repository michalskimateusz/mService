import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { initialState } from './initialState'
import { fetchPhotos } from './thunks/fetchPhotos'

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.filteredPhotos = state.photos.filter((photo) =>
        photo.title.includes(payload)
      )
      state.imageIndex = 0
      if (state.filteredPhotos.length === 0) {
        state.error = {
          status: true,
          message: 'Sorry, no squares found. Try something different.'
        }
      } else {
        state.error = {
          status: false,
          message: ''
        }
      }
    },
    reset(state) {
      state.filteredPhotos = []
      state.imageIndex = 0
      state.error = {
        status: false,
        message: ''
      }
    },
    nextImage(state) {
      state.imageIndex += 1
      if (state.imageIndex > state.filteredPhotos.length - 1) {
        state.imageIndex = 0
      }
    },
    prevImage(state) {
      state.imageIndex -= 1
      if (state.imageIndex < 0) {
        state.imageIndex = state.filteredPhotos.length - 1
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
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPhotos.fulfilled, (state, action: PayloadAction<[]>) => {
        state.status = 'idle'
        state.photos = action.payload
      })
      .addCase(fetchPhotos.rejected, (state) => {
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
