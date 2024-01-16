import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className="hflex">
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
      </header>
    </>
  )
}
export default Header
