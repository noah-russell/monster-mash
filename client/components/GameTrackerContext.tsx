import { useContext, useState, createContext } from 'react'
import { GameTrackerProps, GameTrackerContextProps} from '../../models/monster-models'

const GameTrackerContext = createContext<GameTrackerContextProps|null>(null)
export function GameTrackerProvider({ children }:GameTrackerProps): JSX.Element {
  const [gamePhase, setGamePhase] = useState(0)
  const [topArtist, setTopArtist] = useState<string>('')
  const [bottomArtist, setBottomArtist] = useState<string>('')

  return (
    <GameTrackerContext.Provider
      value={{
        setGamePhase,
        gamePhase,
        setTopArtist,
        topArtist,
        setBottomArtist,
        bottomArtist,
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
