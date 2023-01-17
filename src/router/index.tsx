import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import RootLayout from '../layouts/RootLayout/RootLayout'
import HomeView from '../views/HomeView/HomeView'
import GalleryView from '../views/GalleryView/GalleryView'
import NotFound from '../views/NotFound/NotFound'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route
        index
        element={<HomeView />}
      />
      <Route
        path="/gallery"
        element={<GalleryView />}
        errorElement={<NotFound />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Route>
  )
)
