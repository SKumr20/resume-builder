import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar'; // Because navbar is shown on every page
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Toaster
          toastOptions={{
            className: 'text-sm',
            style: {
              backgroundColor: 'hsl(var(--foreground))',
              color: 'hsl(var(--background))'
            }
          }}
        />
    </>
  )
}

export default MainLayout