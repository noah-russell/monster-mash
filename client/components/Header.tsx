import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="vflex">
        <div className="hflex">
          <h1>Monster Mash</h1>
          <nav className="hflex">
            <div className="nav-button-div">
              <a href="/">
                <button type="reset">
                  <p>New Game</p>
                </button>
              </a>
            </div>
            <div className="nav-button-div">
              <Link to="/menagerie">
                <button>
                  <p>Monster Menagerie</p>
                </button>
              </Link>
            </div>
          </nav>
        </div>
        <p className="version-no">version alpha 1.5 - a game by Noah, Iggy, Rose and Cody </p>
      </header>
    </>
  )
}
export default Header
