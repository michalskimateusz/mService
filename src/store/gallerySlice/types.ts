export interface IPhoto {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface Error {
  status: boolean
  message: string
}

export interface IGalleryState {
  photos: IPhoto[]
  filteredPhotos: IPhoto[]
  status: string
  imageIndex: number
  error: Error
}
