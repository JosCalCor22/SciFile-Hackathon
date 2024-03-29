/* Hooks */
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'

/* SVG imports */
import arrow from './svg/arrow.svg'

const URLAPIDATA = 'https://3454-186-154-34-66.ngrok-free.app/upload_meta_article/';
const URLAPIFILE = 'https://3454-186-154-34-66.ngrok-free.app/upload_file/';
const URLAPI = 'https://3454-186-154-34-66.ngrok-free.app/hola_mundo/';

function Author() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const objectJSON = () => {
    const takeName = document.getElementById('name-article');
    const takeDescription = document.getElementById('description-article');
    const takeTokens = document.getElementById('tokens-reward');

    const objectDataJSON = {
      name: takeName.value,
      description: takeDescription.value,
      tokens: takeTokens.value,
    }
    
    setUploadStatus(objectDataJSON);
    const objectJSON = JSON.stringify(objectDataJSON);

    console.log(objectJSON);
  }
  
  const sendFileJSON = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a PDF file!');
      return;
    }

    setUploadStatus('Uploading...');

    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name); // Include filename

    try {
      const response = await axios.post('https://3454-186-154-34-66.ngrok-free.app/upload_file/', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(`File Hash: https://files.lighthouse.storage/viewFile/${response.data.Hash}`);

      if (response.status === 200) { // Check for successful response
        setUploadStatus('Upload successful!');
        console.log('Success:', response.data);
      } else {
        // Handle potential "Unprocessable Content" error
        if (response.status === 422) {
          setUploadStatus('Upload failed: Unprocessable Content!');
          // Optionally, access error details from response.data
          console.error('Error details:', response.data);
        } else {
          setUploadStatus(`Upload failed: Status ${response.status}`);
        }
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Upload failed!');
    }
  };
  
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
            <button type='button' onClick={() => {sendFileJSON(), objectJSON()}}>Submit</button>
          </div>
        </form>
      </section>
      <section className="containerAuthor__article">
        <div className="containerAuthor__article--input">
          <label htmlFor="article">Choose an article</label>
          <input type="file" onChange={handleFileChange} name="article" id="article" required/>
        </div>
      </section>
    </section>
  )
}

export { Author }