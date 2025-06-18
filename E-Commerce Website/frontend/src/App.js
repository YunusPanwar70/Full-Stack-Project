import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './auth/Register';
import 'react-toastify/dist/ReactToastify.css';
import Login from './auth/Login';
import Dashboard from './user/Dashboard';
import Private from './routes/Private';
import ForogtPassword from './auth/ForogtPassword';
import AdminRoute from './routes/AdminRoute';
import AdminDashboard from './admin/AdminDashboard';
import CreateCategory from './admin/CreateCategory';
import CreateProduct from './admin/CreateProduct';
import User from './admin/User';
import Orders from './user/Orders';
import Profile from './user/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<Private />} >
        <Route path='user' element={<Dashboard />} />
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/orders' element={<Orders />} />
      </Route>

      {/* Admin Route */}
      <Route path='/dashboard' element={<AdminRoute />} >
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/create-category' element={<CreateCategory />} />
        <Route path='admin/create-product' element={<CreateProduct />} />
        <Route path='admin/users' element={<User />} />
      </Route>

      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForogtPassword />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}
export default App;