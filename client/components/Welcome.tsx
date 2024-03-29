import { useState } from 'react'
import { useGameTracker } from './GameTrackerContext'

function Welcome() {
  const {
    gamePhase,
    setGamePhase,
    setTopArtist,
    setBottomArtist,
  } = useGameTracker()
  console.log('game phase', gamePhase)
  const [dummyTopArtist, setDummyTopArtist] = useState<string>('')
  const [dummyBottomArtist, setDummyBottomArtist] = useState<string>('')

  const handleTopArtistChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDummyTopArtist(event.target.value)
    setTopArtist(event.target.value)
  }
  const handleBottomArtistChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setBottomArtist(event.target.value)
    setDummyBottomArtist(event.target.value)
  }

  const handleStart = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    setGamePhase(1)
  }

  return (
    <div className="welcome-container">
      <div className="colin-welcome">
        <img src="/colinwelcome.png" alt="colin waving" className="colin" />
        <div className="welcome-bubble">
          <div>
            <h2>
              Greetings, my favourite two minions! Make me a scary new monster.
              Write your nicknames below to begin. It takes two to make a truly
              terrifying beast...
            </h2>
          </div>
        </div>
      </div>

      <form className="nicknames-welcome" onSubmit={handleStart}>
        <div className="labels">
          <label className="hflex">
            <h3>Minion 1 :</h3>
            <input
              type="text"
              name="topArtist"
              onChange={handleTopArtistChange}
              maxLength={15}
              required
            />
          </label>
          <label className="hflex">
            <h3>Minion 2 :</h3>
            <input
              type="text"
              name="bottomArtist"
              onChange={handleBottomArtistChange}
              maxLength={15}
              required
            />
          </label>
        </div>

        <button
          className="welcome"
          type="submit"
          disabled={!dummyTopArtist || !dummyBottomArtist}
        >
          <p>Start</p>
        </button>
      </form>
    </div>
  )
}

export default Welcome
