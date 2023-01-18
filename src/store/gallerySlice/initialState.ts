import { IGalleryState } from './types'

export const initialState: IGalleryState = {
  photos: [],
  filteredPhotos: [],
  status: '',
  imageIndex: 0,
  error: {
    status: false,
    message: 'loading'
  }
}
