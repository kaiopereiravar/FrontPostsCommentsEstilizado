import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Elements/Navbar'
import Home from './Pages/Home'

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}