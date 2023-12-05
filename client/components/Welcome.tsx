import { useState } from 'react'

function Welcome({ setIsWelcome, setTopArtist, setBottomArtist }) {
  const [dummyTopArtist, setDummyTopArtist] = useState('')
  const [dummyBottomArtist, setDummyBottomArtist] = useState('')

  const handleTopArtistChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    setTopArtist(event.target.value)
    setDummyTopArtist(event.target.value)
  }
  const handleBottomArtistChange = (
    event: React.ChangeEvent<HTMLFormElement>,
  ) => {
    setBottomArtist(event.target.value)
    setDummyBottomArtist(event.target.value)
  }

  const handleStart = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsWelcome(false)
  }

  return (
    <div className="welcome-container">
      <div className="welcome-flexbox hflex">
        <img
          src="client/public/colin.png"
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
            onChange={handleTopArtistChange}
            required
          />
        </label>
        <label className="hflex">
          Artist 2 Nickname:
          <input
            type="text"
            name="bottomArtist"
            onChange={handleBottomArtistChange}
            required
          />
        </label>
        <br />

        <button
          className="welcome"
          onClick={handleStart}
          disabled={!dummyTopArtist || !dummyBottomArtist}
        >
          <p>Start</p>
        </button>
      </form>
    </div>
  )
}

export default Welcome
