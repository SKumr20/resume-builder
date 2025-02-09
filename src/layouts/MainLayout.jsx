import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar'; // Because navbar is shown on every page

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout