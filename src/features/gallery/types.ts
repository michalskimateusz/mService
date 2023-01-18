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
