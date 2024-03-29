/* Hooks */
import { Link } from "react-router-dom"
import workflowSVG from "./svg/Workflow.svg"

function HomePage () {
  return (
    <section className="homepage">
      <article className="homepage__info">
        <div className="homepage__info--description">
          <h2>Do you want to turn your ideas into a steady stream of income?</h2>
          <p>This innovative program teaches you how to generate economic resources from your articles, transforming your passion into a sustainable source of income.</p>
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
      </div>
      <div className="homepage__img">
        <h1>How works our magic?</h1>
        <img src={workflowSVG} alt="Workflow project" />
      </div>
    </section>
  )
}

export { HomePage }