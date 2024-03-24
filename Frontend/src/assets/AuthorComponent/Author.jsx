import { Link } from 'react-router-dom'

import arrow from './svg/arrow.svg'

function Author () {
  return(
    <section className="containerAuthor">
      <div className="containerAuthor__role">
        <div className='containerAuthor__role--arrow'>
          <Link to={"/"}>
            <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <h1>Author</h1>
      </div>
      <section className="containerAuthor__functions">
        <form action="#" method="post">
          <div className="containerAuthor__functions-name">
            <label htmlFor="name-article">Name article:</label>
            <input type="text" name="name-article" id="name-article" required />
          </div>
          <div className="containerAuthor__functions-description">
            <label htmlFor="description-article">Description:</label>
            <textarea name="description-article" id="description-article" required></textarea>
          </div>
          <div className="containerAuthor__functions-tokens">
            <label htmlFor="tokens-reward">Quantity of tokens:</label>
            <input type="number" name="tokens-reward" id="tokens-reward" min="1" max="10" required />
          </div>
          <div className="containerAuthor__functions-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <section className="containerAuthor__article">
        <div className="containerAuthor__article--input">
          <label htmlFor="article">Choose an article</label>
          <input type="file" name="article" id="article" />
        </div>
      </section>
    </section>
  )
}

export { Author }