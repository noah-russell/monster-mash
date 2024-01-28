import {createContext, useContext} from 'react'
import {MonsterCanvasInfo} from '../../models/monster-models'

// this one initiates the canvas context with undefinded
// MonsterContext will hold all the functions we want to pass around from item to item
export const MonsterContext = createContext<MonsterCanvasInfo|undefined>(undefined)


// this one is supposed to check whether you can actually use the monster context
// its equivalent to the function at the bottom of the canvasContext file
export function useMonsterContext(){
  const monsterContext = useContext(MonsterContext)
  if(monsterContext === undefined){
    throw new Error ('monstercontext must be wrapped around child components')
  }
  return monsterContext
}

// I am now trialling adding a single function to MonsterContext

// import into other files like:
// const{function1, function2} = useMonsterContext