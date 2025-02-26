import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateResume from './pages/CreateResume';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/createResume' element={<CreateResume />} />
    </Route>
  
)
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App