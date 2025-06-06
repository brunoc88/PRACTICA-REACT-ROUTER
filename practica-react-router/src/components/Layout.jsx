import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LayOut = () => {
    return (
        <>
            <Navbar />
            <main style={{ padding: '1rem' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default LayOut