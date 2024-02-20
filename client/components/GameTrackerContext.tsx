import { useContext, useState, createContext } from 'react'

const GameTrackerContext = createContext(null)
export function GameTrackerProvider({ children }){
  const [gamePhase,setGamePhase]=useState(0)

  return (
    <GameTrackerContext.Provider
    value={
     { setGamePhase,
      gamePhase}
    }>
      {children}
    </GameTrackerContext.Provider>
  )
}

export const useGameTracker =  ()=>{
  const context = useContext(GameTrackerContext)
  if(!context){
    throw new Error('useGameTracker must be used within a GameTrackerProvider')
  }
  return context
}