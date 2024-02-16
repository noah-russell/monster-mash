import { useContext, useState, createContext } from 'react'

const GameContext = createContext(null)
export function GameStateProvider({ children }){
  const [gameState,setGameState]=useState(1)

  return (
    <GameContext.Provider
    value={
     { setGameState,
      gameState}
    }>
      {children}
    </GameContext.Provider>
  )
}