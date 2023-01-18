import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout/RootLayout'
import HomeView from '../views/HomeView/HomeView'
import GalleryView from '../views/GalleryView/GalleryView'
import NotFound from '../views/NotFound/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomeView />,
        index: true
      },
      {
        path: '/gallery',
        element: <GalleryView />
      },
      {
        path: '/*',
        element: <NotFound />
      }
    ]
  }
])
