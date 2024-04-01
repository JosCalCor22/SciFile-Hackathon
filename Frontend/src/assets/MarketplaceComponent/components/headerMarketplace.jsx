/* Hooks */
import { Link } from "react-router-dom"

function HeaderComponentMarketplace ({ toggleState }) {
  return(
    <header>
      <p>Hola mundo</p>
      <Link to="/">
        <button onClick={() => {toggleState(false)}}>Devolver</button>
      </Link>
    </header>
  )
}

export { HeaderComponentMarketplace }