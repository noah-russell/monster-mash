import Header from './Header'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <Header />
      <div className="appLayout">
        This is app layout yo!
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
