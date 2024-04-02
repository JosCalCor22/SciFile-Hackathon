/* Hooks */
import { Link } from "react-router-dom"

/* SVG imports */
import searchIcon from './svg/searchIcon.svg'
import moonIcon from './svg/moonIcon.svg'
import shopIcon from './svg/shopIcon.svg'
import profileIcon from './svg/profileIcon.svg'
import Arrow from './svg/arrow.svg'

function HeaderComponentMarketplace ({ toggleState }) {
  return(
    <header className="marketplace__header">
      <div className="marketplace__header--title">
        <Link to="/">
          <img src={Arrow} onClick={() => {toggleState(false)}} alt="Arrow" />
        </Link>
        <h1>Marketplace</h1>
      </div>
      <nav className="marketplace__header--nav">
        <div className="marketplace__header--nav-items">
          <img src={searchIcon} alt="Search Icon" />
          <img src={moonIcon} alt="Moon Icon" />
          <img src={shopIcon} alt="Shop Icon" />
        </div>
        <div className="marketplace__header--nav-profile">
          <img src={profileIcon} alt="Profile Icon" />
        </div>
      </nav>
    </header>
  )
}

export { HeaderComponentMarketplace }