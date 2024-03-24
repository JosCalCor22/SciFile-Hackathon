import { Link } from "react-router-dom";
import arrow from "./svg/arrow.svg";

function Reviewer () {
  return (
    <section className="containerReviewer">
      <div className="containerReviewer__role">
        <div className='containerReviewer__role--arrow'>
          <Link to={"/"}>
            <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <h1>Reviewer</h1>
      </div>
      <section className="containerReviewer__functions">
        <form action="#" method="post">
          <div className="containerReviewer__functions-name">
            <label htmlFor="name-article">Name article:</label>
            <select name="name-article" id="name-article" required>
              <option value="opt1">One article</option>
              <option value="opt2">Two article</option>
              <option value="opt3">Three article</option>
            </select>
          </div>
          <div className="containerReviewer__functions-description">
            <label htmlFor="description-article">Type of article</label>
            <input type="text" name="name-article" id="name-article" required />
          </div>
          <div className="containerReviewer__functions-review">
            <label htmlFor="tokens-reward">Write your review:</label>
            <textarea name="tokens-reward" id="tokens-reward" required></textarea>
          </div>
          <div className="containerReviewer__functions-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <section className="containerReviewer__article">
        <div className="containerReviewer__article--input">
          <h3>The article you chose is:</h3>
          <p>One article</p>
        </div>
      </section>
    </section>
  )
}

export { Reviewer }