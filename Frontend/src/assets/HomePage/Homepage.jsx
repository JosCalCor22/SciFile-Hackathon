/* Hooks */
import { Link } from "react-router-dom"
import workflowSVG from "./svg/Workflow.svg"
import dataEconomy from "./svg/data_economy.svg"

function HomePage ({ toggleState }) {
  return (
    <section className="homepage">
      <article className="homepage__info">
        <div className="homepage__info--description">
          <h2>What is SciFiles?</h2>
          <p>SciFiles is a groundbreaking platform that disrupts scientific publishing. It utilizes a decentralized system with financial incentives to validate research articles. This ensures open access to information, eliminates censorship, and promotes high-quality research through more frequent and thorough reviews. SciFiles fosters collaboration and empowers researchers worldwide.</p>
        </div> 
        <div className="homepage__info--slogan">
          <span>Best reviews...</span> <br />
          <span>Best rewards...</span> <br />
          <span>Best articles...</span>
        </div>
      </article>
      <div className="homepage__role">
        <div className="homepage__role--btn">
          <h2>Choose a role:</h2>
          <div className="homepage__role--btn-options">
            <div className="opt1">
              <Link to="/author">
                <button>Author</button>
              </Link>
            </div>
            <div className="opt2">
              <Link to="/reviewer">
                <button>Reviewer</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="homepage__role--market">
          <h2>See our market</h2>
          <Link to="/marketplace">
            <button onClick={() => {toggleState(true)}}>Marketplace</button>
          </Link>
        </div>
      </div>
      <div className="homepage__objetive">
        <h1>What is our goal?</h1>
        <div className="homepage__objetive--container">
          <div className="homepage__objetive--container-mision">
            <h2>Mision</h2>
            <p>To revolutionize the field of scientific publishing through a platform that monetizes and decentralizes the validation of scientific articles, promoting a robust data economy and ensuring secure and open access to information for the global scientific community.</p>
          </div>
          <div className="homepage__objetive--container-vision">
            <h2>Vision</h2>
            <p>To be the leading platform in scientific publishing that eliminates censorship barriers and allows knowledge to flow freely, reaching researchers from all corners of the planet.</p>
          </div>
        </div>
      </div>
      <div className="homepage__value">
        <h1>These are the values we stand for:</h1>
        <ul className="homepage__value--list">
          <li>
            <h2>Transparency</h2>
            <p>Operating with total clarity in all validation and publication processes.</p>
          </li>
          <li>
            <h2>Collaboration</h2>
            <p>Fostering a scientific community that works together for the advancement of knowledge.</p>
          </li>
          <li>
            <h2>Innovation</h2>
            <p>Being at the forefront of technology and publication methods to continuously improve the quality of scientific content.</p>
          </li>
        </ul>
      </div>
      <div className="homepage__strategies">
        <h1>How will we achieve our goal?</h1>
        <ul>
          <li>
            <h2>Monetization and Decentralization:</h2>
            <p>Implementing a rewards system that motivates reviewers to conduct more rigorous and frequent evaluations, thereby improving the quality and reliability of published research.</p>
          </li>
          <li>
            <h2>Censorship Elimination:</h2>
            <p>Creating an environment where scientific knowledge is not limited by censorship, allowing for equitable distribution of information.</p>
          </li>
          <li>
            <h2>Open Access:</h2>
            <p>Ensuring that all articles are accessible without restrictions, supporting the dissemination of scientific knowledge.</p>
          </li>
          <li>
            <h2>Collaborative Community:</h2>
            <p>Building a network of scientists and academics who contribute to collective growth and idea exchange.</p>
          </li>
        </ul>
      </div>
      <div className="homepage__goals">
        <h1>Long-Term Goals:</h1>
        <ul className="homepage__goals--list">
          <li><span>1.</span> Establishing SciFiles as the gold standard in scientific publishing.</li>
          <li><span>2.</span> Expanding the platform to include a broader range of scientific disciplines.</li>
          <li><span>3.</span> Cultivating a global scientific community that is more collaborative and engaged.</li>
          <li><span>4.</span> Developing advanced technological tools to facilitate article review and publication.</li>
        </ul>
      </div>
      <div className="homepage__workflow">
        <h1>How works our magic?</h1>
        <img src={workflowSVG} alt="Workflow project" />
      </div>
      <div className="homepage__dataEconomic">
        <h1>This makes us special and unique</h1>
        <img src={dataEconomy} alt="Data Economy" />
      </div>
    </section>
  )
}

export { HomePage }