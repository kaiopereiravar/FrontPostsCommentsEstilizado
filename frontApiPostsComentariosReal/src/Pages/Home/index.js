import '../Home/Home.css'
import axios, { Axios } from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function Home() {
    const [comentarios, SetComentarios] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:22390/Comentarios')
            .then((r) => {
                SetComentarios(r.data)
                console.log(r.data)
            })
            .catch(() => {
                alert('Não foi possivel buscar os comentarios')
            })
    }, [])

    return (
        <div className='body-home'>
            <div className='container-home'>
                <input type='text' placeholder="Pesquisar" />

                {comentarios.map((comen) => {
                    return (
                        <div className='div-post' key={comen.id}>
                            <div className='div-post-alinhamento'>
                                <div className='div-post-imagem'>
                                    <img src={'http://localhost/images/' + comen.foto} alt='insira a imagem aqui' />
                                </div>

                                <div className='Titulo-post'>
                                    <p>{comen.nomeConta}</p>
                                </div>

                                <div className='Descricao-post'>
                                    <p>{comen.comentarios}</p>
                                </div>

                                <div className='botoes-post'>
                                    <Link to={`/editcomentario/${comen.id}`}><button>Editar</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


