import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../api/api'

export const fetchPhotos = createAsyncThunk('gallerySlice/fetch', async () => {
  const { data } = await api.get('')
  return data
})
