export interface IPhotos {
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
  photos: IPhotos[]
  filteredPhotos: IPhotos[]
  status: string
  imageIndex: number
  error: Error
}
