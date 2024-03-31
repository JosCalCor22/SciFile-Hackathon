import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

/* Components */
import { setUrl } from "../AuthorComponent/components/contract";

/* Images */
import arrow from "./svg/arrow.svg";

function Reviewer () {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentUri, setCurrentUri] = useState('');

  const URL = 'https://c2b1-186-154-32-172.ngrok-free.app';
  const URLWEBSITE = 'https://files.lighthouse.storage/viewFile/';

  useEffect(() => {
    // Step 3: Make the GET request using Axios in a useEffect hook
    axios.get(`${URL}/query/`)// refactor uri a variable constante
      .then(response => {
        // Step 4: Update the state variable with the response data
        setOptions(response.data);
        console.log()
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle changing the selected option
  const handleChangeSelectedOption = (event) => {
    const option = event.target.value;
    const object =  options.find((item) => item.Name == option);
    console.log(object);
    const uri = `https://files.lighthouse.storage/viewFile/${object.Hash}`;
    setSelectedOption(event.target.value);
    setCurrentUri(uri);
  };

  /* hashURL, review, nameArticle */
  const sendReview = async (reviewArticle, nameArticle) => {
    const objectSendJSON = {
      name: nameArticle,
      hash: currentUri,
      review: reviewArticle
    }
    /* const parsedObject = JSON.stringify(objectSendJSON); */

    try{
      const response = await axios.post(`${URL}/upload_meta_review/`, objectSendJSON, {
        headers: {
          "x-token": 123,
          Accept: 'application/json',
        }
      });

      if(response.status === 200) { 
        const newURL = `${URLWEBSITE}${response.data.Hash}`;
        console.log(`The hash URL is: ${newURL}`);
        setUrl(newURL);
        window.location.reload();
      }
    } catch(error) {
      console.log(error);
    }
  }


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
            <select name="name-article" id='name-article' value={selectedOption} onChange={handleChangeSelectedOption} required>
              {options.map((item, index) => (
                <option key={index} value={item.Name}>{item.Name}</option>
              ))}
            </select>
          </div>
          <div className="containerReviewer__functions-review">
            <label htmlFor="tokens-reward">Write your review:</label>
            <textarea name="tokens-reward" id="tokens-reward" required></textarea>
          </div>
          <div className="containerReviewer__functions-submit">
            <button type="button" onClick={() => {
              const takeValueArticle = document.getElementById('tokens-reward');
              const takeNameArticle = document.getElementById('name-article');
              const valueArticle = takeValueArticle.value;
              const nameArticle = takeNameArticle.value;

              sendReview(valueArticle, nameArticle);
            }}>Submit</button>
          </div>
        </form>
      </section>
      <section className="containerReviewer__article">
        <div className="containerReviewer__article--input">
          <iframe src={currentUri} frameBorder="0"></iframe>
        </div>
      </section>
    </section>
  )
}

export { Reviewer }