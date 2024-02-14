import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div className="hflex">
          <div className='vflex title-and-version'>
          <h1>Monster Mash</h1>
          <p className="version-no">
          version alpha 1.5 - a game by Noah, Iggy, Rose and Cody{' '}
        </p>
        </div>
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
        
      </header>
    </>
  )
}
export default Header
