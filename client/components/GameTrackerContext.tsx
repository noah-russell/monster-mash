import { useContext, useState, createContext } from 'react'

const GameTrackerContext = createContext(null)
export function GameTrackerProvider({ children }) {
  const [gamePhase, setGamePhase] = useState(0)
  const [topArtist, setTopArtist] = useState<string>('')
  const [bottomArtist, setBottomArtist] = useState<string>('')

  return (
    <GameTrackerContext.Provider
      value={{
        setGamePhase,
        gamePhase,
        topArtist,
        setTopArtist,
        bottomArtist,
        setBottomArtist,
      }}
    >
      {children}
    </GameTrackerContext.Provider>
  )
}

export const useGameTracker = () => {
  const context = useContext(GameTrackerContext)
  if (!context) {
    throw new Error('useGameTracker must be used within a GameTrackerProvider')
  }
  return context
}
