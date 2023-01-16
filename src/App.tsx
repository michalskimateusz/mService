import React, { useEffect } from "react";
import "./App.scss";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import GalleryView from "./views/GalleryView";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./views/NotFound";
import { fetchData } from "./features/counter/counterSlice";
import { useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/gallery"
          element={<GalleryView />}
          errorElement={<NotFound />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
