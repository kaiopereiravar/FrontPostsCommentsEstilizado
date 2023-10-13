import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Elements/Navbar'
import Home from './Pages/Home'
import EditarComentario from './Pages/EditarComentario'
import InserirComentario from './Pages/InserirComentario'

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/editcomentario/:id' element={<EditarComentario/>}/>
                <Route path='*' element={<Home/>}/>
                <Route path='/inserircomentario' element={<InserirComentario/>}/>
            </Routes>
        </BrowserRouter>
    )
}