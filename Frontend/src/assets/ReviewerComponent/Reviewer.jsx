import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "./svg/arrow.svg";

function Reviewer () {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentUri, setCurrentUri] = useState('');

  useEffect(() => {
    // Step 3: Make the GET request using Axios in a useEffect hook
    axios.get('https://9164-186-154-34-66.ngrok-free.app/query/')// refactor uri a variable constante
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
            <select name="name-article" value={selectedOption} onChange={handleChangeSelectedOption} required>
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
            <button type="submit">Submit</button>
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