import techSVG from './svg/Technologies.svg'

function Footer () {
  return(
    <footer className="footer">
      <section className="footer__description">
        <h2>SciFile</h2>
        <div className="footer__description--technologies">
          <h3>Used Technologies</h3>
          <ul>
            <li>
              <a href="https://www.lighthouse.storage">Lighthouse</a>
            </li>
            <li>
              <a href="https://fleek.co">Fleek</a>
            </li>
            <li>
              <a href="https://filecoin.io">Filecoin</a>
            </li>
          </ul>
        </div>
        <div className="footer__description--text">
          <p>This project was made thanks not only to several minds that came together to share their knowledge and be able to develop a solution. The technologies used in the course of this project were also a great tool that allowed us to make the idea we had in mind be transformed into a real and tangible project.</p>
        </div>
      </section>
      <div className="footer__techSVG">
        <div className="footer__techSVG--svg">
          <img src={techSVG} alt="Technologies" />
        </div>
      </div>
      <div className='footer__rights'>
        <p>Creating a better web3 for everyone 🌐</p>
        <p>© 2022 SciFile. All rights reserved.</p>
      </div>
    </footer>
  )
}

export { Footer }