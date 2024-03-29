import { Link } from "react-router-dom";

function Marketplace({ toggleState }) {
  return (
    <>
      <Link to="/">
        <button onClick={() => {toggleState(false)}}>Devolver</button>
      </Link>
    </>
  )
}

export { Marketplace }