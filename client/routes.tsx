import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import HotSeatMode from './components/HotSeatMode.tsx'
import Menagerie from './components/Menagerie.tsx'
import SingleMonsterView from './components/SingleMonsterView.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HotSeatMode />} />
    <Route path="/menagerie" element={<Menagerie />} />
    <Route path="/monster/:id" element={<SingleMonsterView/>}/>
  </Route>,
)
