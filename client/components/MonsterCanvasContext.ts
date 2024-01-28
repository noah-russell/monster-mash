import {createContext, useContext} from 'react'
import {MonsterCanvasInfo} from '../../models/monster-models'


export const MonsterContext = createContext<MonsterCanvasInfo|undefined>(undefined)

export function useMonsterContext(){
  const monsterContext = useContext(MonsterContext)
  if(monsterContext === undefined){
    throw new Error ('monstercontext must be wrapped around child components')
  }
  return monsterContext
}