/* SVG imports */
import profilePhoto from './svg/profileIcon.svg';
import tradingIcon from './svg/tradingIcon.svg';
import compassIcon from './svg/compassIcon.svg';
import squareIcon from './svg/squareIcon.svg';

function MainComponentMarketplace() {
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
          </div>
        </div>
      </section>
      <section className="marketplace__main--articles">

      </section>
    </section>
  )
}

export { MainComponentMarketplace }