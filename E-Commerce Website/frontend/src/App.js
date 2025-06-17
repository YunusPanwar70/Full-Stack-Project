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
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='/dashboard' element={<Private />} >
        <Route path='user' element={<Dashboard />} />
      </Route>
      {/* Admin Route */}
      <Route path='/' element={<AdminRoute />} >
        <Route path='admin' element={<AdminDashboard />} />
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