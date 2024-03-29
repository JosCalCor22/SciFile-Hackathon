/* Hooks */
import axios from 'axios';
import { useState } from 'react'
import { Link, json } from 'react-router-dom'
import { mint, setUrl } from './components/contract';
import { ethers } from 'ethers';

/* SVG imports */
import arrow from './svg/arrow.svg'

const URL = `https://172c-186-154-34-66.ngrok-free.app`
const URLAPIDATA = `${URL}/upload_meta_article/`;
const URLAPIFILE = `${URL}/upload_file/`;
const URLAPI = `${URL}/hola_mundo/`;

function Author() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const objectJSON = () => {
    const takeName = document.getElementById('name-article');
    const takeDescription = document.getElementById('description-article');
    const takeTokens = document.getElementById('tokens-reward');

    const objectDataJSON = {
      name: takeName.value,
      description: takeDescription.value,
      tokens: takeTokens.value,
      uri: "",
    }

    return objectDataJSON;
  }

  const main = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.listAccounts()

    console.log(`account: ${JSON.stringify(accounts[0]?.address)}`);
    const response_pdf = await sendFilePdf();
    const json = objectJSON();
    if (response_pdf) {
      console.log(response_pdf)
      json["uri"] = response_pdf;
      const response_json = await sendFileJson(json);

      console.log(response_json); 

      if (response_json) {
        const txt_nft = await mint(
          accounts[0]?.address,
          1,// response_json.id
          1,
          "0x"
        );

        await delay(1000);

        console.log(txt_nft);

        const txt_token = await mint(
          accounts[0]?.address,
          2,// response_json.id + 1
          json.tokens,
          "0x"
        );

        await delay(1000);

        console.log(txt_token);


        const txt_url = await setUrl(response_json);//response_json.uri

        await delay(1000);

        console.log(txt_url);
      }
    }

  }

  const sendFilePdf = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a PDF file!');
      return;
    }

    setUploadStatus('Uploading...');

    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name); // Include filename

    try {
      const response = await axios.post(URLAPIFILE, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) { // Check for successful response
        setUploadStatus('Upload successful!');
        console.log('Success:', response.data);
        console.log(`File Hash: https://files.lighthouse.storage/viewFile/${response.data.Hash}`);
        return `https://files.lighthouse.storage/viewFile/${response.data.Hash}`
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

  const sendFileJson = async (json) => {
    setUploadStatus('Uploading...');

    try {
      const response = await axios.post(URLAPIDATA, json, {
        headers: {
          "x-token": 123,
          Accept: 'application/json',
        }
      });

      if (response.status === 200) { // Check for successful response
        setUploadStatus('Upload successful!');
        console.log('Success:', response.data);
        console.log(`File Hash: https://files.lighthouse.storage/viewFile/${response.data.Hash}`);
        /*
        return {
          uri : `https://files.lighthouse.storage/viewFile/${response.data.Hash}`,
          id : response.data.id
        }
        */
        return `https://files.lighthouse.storage/viewFile/${response.data.Hash}`
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

  return (
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
            <button type='button' onClick={() => { main() }}>Submit</button>
          </div>
        </form>
      </section>
      <section className="containerAuthor__article">
        <div className="containerAuthor__article--input">
          <label htmlFor="article">Choose an article</label>
          <input type="file" onChange={handleFileChange} name="article" id="article" required />
        </div>
      </section>
    </section>
  )
}

export { Author }