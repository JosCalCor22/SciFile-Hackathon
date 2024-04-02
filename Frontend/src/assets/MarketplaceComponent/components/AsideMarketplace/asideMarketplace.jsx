/* Svg and img imports */
import logo from './svg/Logo_2.svg';
import home from './svg/homeIcon.svg';
import compass from './svg/compassIcon.svg';
import square from './svg/squareIcon.svg';
import authors from './svg/authorsIcon.svg';
import signal from './svg/signalIcon.svg';
import contact from './svg/contactIcon.svg';

function AsideComponent () {
  return(
    <aside className="marketplace__aside">
      <div className="marketplace__aside--logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="marketplace__aside--nav">
        <li className='activeLink inactiveLink'>
          <img src={home} alt="Home" />
          <span>Home</span>
        </li>
        <li className='activeLink inactiveLink'>
          <img src={compass} alt="Compass" />
          <span>Explore</span>
        </li>
        <li className='activeLink inactiveLink'>
          <img src={square} alt="Square" />
          <span>Popular Articles</span>
        </li>
        <li className='activeLink inactiveLink'>
          <img src={authors} alt="Authors" />
          <span>Top Authors</span>
        </li>
        <li className='activeLink inactiveLink'>
          <img src={signal} alt="Signal" />
          <span>Feed</span>
        </li>
        <li className='activeLink inactiveLink'>
          <img src={contact} alt="Contact" />
          <span>Contact</span>
        </li>
      </ul>
      <section className="marketplace__aside--terms">
        <div className="marketplace__aside--terms-links">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Help</p>
        </div>
        <div className='marketplace__aside--terms-rights'>
          <p>© Copyright 2024 by SciFiles.</p>
        </div>
      </section>
    </aside>
  )
}

export { AsideComponent }