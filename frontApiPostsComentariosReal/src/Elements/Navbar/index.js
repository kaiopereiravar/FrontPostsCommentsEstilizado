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
                    <li>Posts</li>
                    <li>Comentar</li>
                    <li>Duvidas</li>
                </ul>
            </div>
            <div className='botao-navbar'>
                <button><Link to='/editcomentario'>Post</Link></button>
            </div>

        </div>
    )
}