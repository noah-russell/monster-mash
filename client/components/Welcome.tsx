import { useState } from 'react'

function Welcome({ setIsWelcome, setArtistNames }) {
  const [topArtist, setTopArtist] = useState('')
  const [bottomArtist, setBottomArtist] = useState('')

  const handleTopArtistChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setTopArtist(event.target.value)
  }
  const handleBottomArtistChange = (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    setBottomArtist(event.target.value)
  }
  console.log(topArtist, bottomArtist)

  const handleStart = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setArtistNames([topArtist, bottomArtist])
  }
  return (
    <div className="welcome-container">
      <div className="welcome-flexbox hflex">
        <img
          src="client/public/colinwelcome.png"
          alt="colin waving"
          className="colin"
        />
        <div className="welcome-bubble">
          <h2>
            Greetings minion! I need you to make a scary new monster... Make
            sure you have a friend with you, it takes two to make a truly
            terrifying beast
          </h2>
        </div>
      </div>

      <form className="vflex">
        <label className="hflex">
          Artist 1 Nickname:
          <input
            type="text"
            name="topArtist"
            // value=
            onChange={handleTopArtistChange}
            required
          />
        </label>
        <label className="hflex">
          Artist 2 Nickname:
          <input
            type="text"
            name="bottomArtist"
            // value=
            onChange={handleBottomArtistChange}
            required
          />
        </label>
        <br />

        <button
          className="welcome"
          disabled={!topArtist || !bottomArtist}
          onClick={() => {
            setIsWelcome(false)
          }}
        >
          <p>Start</p>
        </button>
      </form>
    </div>
  )
}

export default Welcome
