import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LayOut = ({ isAuth, onLogout }) => {
  return (
    <>
      <Navbar isAuth={isAuth} onLogout={onLogout} />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};


export default LayOut