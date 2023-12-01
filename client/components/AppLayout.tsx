import Header from './Header'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
        <Header />
      <div className="app-layout">
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
