import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout.tsx'
import HotSeatMode from './components/HotSeatMode.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HotSeatMode />} />
  </Route>
)
