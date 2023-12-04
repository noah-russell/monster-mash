import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='hflex'>
        <div className='header-box'>
        <h1>Monster Mash</h1>
        </div>
        <nav className='hflex'>
          <Link to="/">
            <button><p>New Game</p></button>
          </Link>
          <Link to="/menagerie">
            <button><p>Monster Menagerie</p></button>
          </Link>
        </nav>
      </header>
    </>
  )
}
export default Header
