import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "./svg/arrow.svg";

function Reviewer () {
  const articles = [
    {
      nameArticle: 'Test one',
      typeArticle: 'Science',
      id: 1,
      URL: 'https://files.lighthouse.storage/viewFile/QmfH5Atir6s39igxYP7YRFo35Vux8yidDmVbeDP2xtZjzF',
    },
    {
      nameArticle: 'Test two',
      typeArticle: 'Sports',
      id: 2,
      URL: 'https://files.lighthouse.storage/viewFile/QmfH5Atir6s39igxYP7YRFo35Vux8yidDmVbeDP2xtZjzF',
    },
    {
      nameArticle: 'Test three',
      typeArticle: 'Art',
      id: 3,
      URL: 'https://files.lighthouse.storage/viewFile/QmfH5Atir6s39igxYP7YRFo35Vux8yidDmVbeDP2xtZjzF',
    },
    {
      nameArticle: 'Test fourth',
      typeArticle: 'Art',
      id: 4,
      URL: 'https://files.lighthouse.storage/viewFile/QmfH5Atir6s39igxYP7YRFo35Vux8yidDmVbeDP2xtZjzF',
    }
  ]

  const [changeArticle, setChangeArticle] = useState(articles[0]);

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
            <select name="name-article" onChange={(e) => {setChangeArticle(articles.find(article => article.nameArticle === e.target.value))}} id="name-article" required>
              {articles.map((article) => {
                return(
                  <option key={article.id}>{article.nameArticle}</option>
                )
              })
              }
            </select>
          </div>
          <div className="containerReviewer__functions-description">
            <label htmlFor="description-article">Type of article</label>
            <span>{changeArticle.typeArticle}</span>
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
          <iframe src={changeArticle.URL} frameBorder="0"></iframe>
        </div>
      </section>
    </section>
  )
}

export { Reviewer }