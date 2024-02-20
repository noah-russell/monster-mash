import { useContext, useState, createContext } from 'react'

const GameContext = createContext(null)
export function GameProvider({ children }){
  const [gamePhase,setGamePhase]=useState(1)

  return (
    <GameContext.Provider
    value={
     { setGamePhase,
      gamePhase}
    }>
      {children}
    </GameContext.Provider>
  )
}

export const useGame =  ()=>{
  const context = useContext(GameContext)
  if(!context){
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}