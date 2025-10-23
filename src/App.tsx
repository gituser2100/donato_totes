import MainLayout from './Layout/MainLaout';
import HomePage from './pages/Home';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Gallery from './pages/Gallery';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/gallery' element={<Gallery />} />
    </Route>
  )
)

export default router;