import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Elements/Navbar'
import Home from './Pages/Home'
import EditarComentario from './Pages/EditarComentario'

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/editcomentario/:id' element={<EditarComentario/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}