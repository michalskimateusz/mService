import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout/RootLayout'
import HomeView from '../views/HomeView/HomeView'
import GalleryView from '../views/GalleryView/GalleryView'
import NotFound from '../views/NotFound/NotFound'
import { URL_PATHS } from '../constants/urlPaths'

export const router = createBrowserRouter([
  {
    path: URL_PATHS.HOME,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: URL_PATHS.HOME,
        element: <HomeView />,
        index: true
      },
      {
        path: URL_PATHS.GALLERY,
        element: <GalleryView />
      },
      {
        path: URL_PATHS.ALL,
        element: <NotFound />
      }
    ]
  }
])
