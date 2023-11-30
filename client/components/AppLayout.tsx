import Header from './Header'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
        <Header />This is app layout yo!
      <div className="app-layout">

        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
