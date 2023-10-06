import '../Navbar/Navbar.css'

export default function Navbar() {
    return (
        <div className='body'>

            <div className='logo'>
                <p>.</p>
                <h1>Posts&Comments</h1>
            </div>
            <div className='lista-navbar'>
                <ul>
                    <li>Posts</li>
                    <li>Comentar</li>
                    <li>Duvidas</li>
                </ul>
            </div>
            <div className='botao-navbar'>
                <button>Post</button>
            </div>

        </div>
    )
}