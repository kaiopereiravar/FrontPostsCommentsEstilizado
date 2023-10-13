import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='body'>

            <div className='logo'>
                <Link to='/'><p>.</p></Link>
                <Link to='/'><h1>Posts&Comments</h1></Link>
            </div>
            <div className='lista-navbar'>
                <ul>
                    <li><Link to='/'>Posts</Link></li>
                    <li><Link to='/inserircomentario'>Comentar</Link></li>
                    <li><Link to='/'>Duvidas</Link></li>
                </ul>
            </div>
            <div className='botao-navbar'>
                <button><Link to='/inserircomentario'>Post</Link></button>
            </div>

        </div>
    )
}