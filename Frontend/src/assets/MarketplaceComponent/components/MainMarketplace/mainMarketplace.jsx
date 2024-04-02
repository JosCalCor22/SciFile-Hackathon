/* SVG imports */
import profilePhoto from './svg/profileIcon.svg';
import tradingIcon from './svg/tradingIcon.svg';
import compassIcon from './svg/compassIcon.svg';
import squareIcon from './svg/squareIcon.svg';
import commentIcon from './svg/commentIcon.svg';
import shareIcon from './svg/shareIcon.svg';
import otherOptionsIcon from './svg/otherOptionsIcon.svg';

/* IMG imports */
import profileImg1 from './img/profile1.png';
import profileImg2 from './img/profile2.png';
import profileImg3 from './img/profile3.png';
import profileImg4 from './img/profile4.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';

function MainComponentMarketplace() {
  const objectsArticles = [
    {
      id: 1,
      profilePhoto: profileImg1,
      title: 'Charting Paths to Longevity: Exploring Genetic Modification and the Potential of VITADAO',
      author: 'Dr. Phil Jacobsen',
      imgArticle: img1,
      likes: 150,
      comments: 200,
    },{
      id: 2,
      profilePhoto: profileImg2,
      title: 'Everyday Practicality: Homomorphic Cryptography in Action',
      author: 'Eng. Felipe Marín',
      imgArticle: img2,
      likes: 190,
      comments: 250,
    },{
      id: 3,
      profilePhoto: profileImg3,
      title: 'Global CO2 Emissions Analysis: Unveiling Trends and Patterns',
      author: 'Dr. Mikasa Toriyama',
      imgArticle: img3,
      likes: 110,
      comments: 100,
    },{
      id: 4,
      profilePhoto: profileImg4,
      title: 'Unraveling the Impact: Data Analysis of Remote Work Trends',
      author: 'Dr. Arjun Patel',
      imgArticle: img4,
      likes: 170,
      comments: 150,
    }
  ]

  return (
    <section className="marketplace__main">
      <section className="marketplace__main--container">
        <div className="marketplace__main--container--searchInput">
          <div className="marketplace__main--container--searchInput-input">
            <img src={profilePhoto} alt="Profile User" />
            <input type="text" placeholder="Searching Document..." />
          </div>
          <div className="marketplace__main--container--searchInput-filter">
            <div className="filters">
              <span>Science</span>
              <span>Technology</span>
              <span>Analitics</span>
            </div>
            <div className="btn-search">
              <button>Search</button>
            </div>
          </div>  
        </div>
        <div className="marketplace__main--container--cards">
          <div className="marketplace__main--container--cards-feed">
            <div className="buttons">
              <button>
                <img src={tradingIcon} alt="Trading Icon" />
                <p>Trading</p>
              </button>
              <button>
                <img src={compassIcon} alt="Compass Icon" />
                <p>Latest</p>
              </button>
            </div>
            <div className="btn-square">
              <img src={squareIcon} alt="Square Icon" />
            </div>
          </div>
          <div className="marketplace__main--container--cards-card">
            {
              objectsArticles.map((article) => (
                <div className="cardArticle" key={article.id}>
                  <div className="cardArticle__title">
                    <img src={article.profilePhoto} alt="Profile Photo" />
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                  </div>
                  <div className="cardArticle__img">
                    <img src={article.imgArticle} alt="Img" />
                  </div>
                  <div className="cardArticle__reaction">
                    <ul className="cardArticele__reaction--icons">
                      <li>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.3242 2.72303C15.028 0.29602 19.2063 0.376593 21.8107 2.98642C24.4151 5.59624 24.5046 9.75413 22.0823 12.466L12.323 22.2406L2.56383 12.466C0.141662 9.75413 0.232203 5.58967 2.83546 2.98642C5.44166 0.380218 9.61259 0.292417 12.3242 2.72303ZM20.1812 4.61254C18.4557 2.88349 15.6698 2.81336 13.862 4.43617L12.3253 5.81554L10.7877 4.43725C8.97467 2.81216 6.19385 2.88365 4.46327 4.61423C2.74852 6.32899 2.66243 9.07536 4.24269 10.8893L12.323 18.9824L20.4035 10.8893C21.9843 9.07467 21.8986 6.33352 20.1812 4.61254Z" fill="white"/>
                        </svg>
                        <p>{article.likes}</p>
                      </li>
                      <li>
                        <img src={commentIcon} alt="Comment Icon" />
                        <p>{article.comments}</p>
                      </li>
                      <li>
                        <img src={shareIcon} alt="Share Icon" />
                      </li>
                    </ul>
                    <div className="cardArticele__reaction--otherOptions">
                      <img src={otherOptionsIcon} alt="Other Options" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="marketplace__main--articles">

      </section>
    </section>
  )
}

export { MainComponentMarketplace }