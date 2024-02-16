import Header from './Header'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <Header />
      <div className="under-header">
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
