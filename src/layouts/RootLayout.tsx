import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { reset } from "../features/counter/counterSlice";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  const resetState = () => {
    dispatch(reset());
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 3rem",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }} onClick={resetState}>
          <h1>mGallery</h1>
        </Link>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
              gap: "2rem",
            }}
          >
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                style={{ textDecoration: "none" }}
                onClick={resetState}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
