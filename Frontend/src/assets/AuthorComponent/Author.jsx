/* Hooks */
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'

/* SVG imports */
import arrow from './svg/arrow.svg'

const URLAPI = 'https://3454-186-154-34-66.ngrok-free.app/hola_mundo/';

function Author () { 
  const [message, setMessage] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async () => {
    const messageJSON = {
      message: message
    }
    const response = await axios.post(URLAPI, messageJSON);
    
    return console.log(response);
  }

  const getFile = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const getAllItems = () => {
    const takeName = document.getElementById('name-article');
    const takeDescription = document.getElementById('description-article');
    const takeTokens = document.getElementById('tokens-reward');

    const objectJSON = {
      name: takeName.value,
      description: takeDescription.value,
      tokens: takeTokens.value,
    }

    const formData = new FormData();
    formData.append('object', JSON.stringify(objectJSON));
    formData.append('file', selectedFile);

    for(let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  }

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
        <form>
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
            <button type='button' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </section>
      <section className="containerAuthor__article">
        <div className="containerAuthor__article--input">
          <label htmlFor="article">Choose an article</label>
          <input type="file" onChange={getFile} name="article" id="article" required/>
        </div>
      </section>
    </section>
  )
}

export { Author }