import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { reset } from "../features/counter/counterSlice";

const Home = () => {
  const dispatch = useAppDispatch();

  const resetState = () => {
    dispatch(reset());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <h1>Welcome to our lorem ipsum database of colorful squares.</h1>
      </header>
      <p style={{ width: "70%", margin: "auto" }}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquam commodi consequatur distinctio doloremque et magni nesciunt
          nobis non officia optio provident quas quos sapiente similique unde
          velit vero, voluptates?
        </span>
        <span>
          Cumque deserunt doloremque error et ex, incidunt modi molestiae odit
          placeat ratione saepe sed veniam, voluptate! Assumenda aut delectus id
          iure nemo praesentium quibusdam ratione. Cum dolorum saepe tempora
          voluptates?
        </span>
      </p>
      <Link
        to="/gallery"
        style={{ textDecoration: "none", fontSize: "3rem", fontWeight: "700" }}
        onClick={resetState}
      >
        Search
      </Link>
    </div>
  );
};

export default Home;
