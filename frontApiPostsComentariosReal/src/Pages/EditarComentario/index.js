import { useState } from 'react'
import '../EditarComentario/EditarComentario.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditarComentario() {
    // const {id} = useParams()
    const [tituloPost, setTituloPost] = useState([])
    const [descricaoPost, setDescricaoPost] = useState([])
    const {id} = useParams()
    const navigate = useNavigate(true)


    function atualizarPost() {
        axios.put(`http://localhost:22390/Comentarios/` + id, {
            nomeConta: tituloPost,
            comentarios: descricaoPost
        })
            .then((response) => {
                console.log(response.data.nomeConta)
                alert(`O post foi alterado com sucesso!!`)
                navigate("/", {replace: true})
            })
            .catch(() => {
                console.log(`Não foi possivel atualizar na requisição!!!`)
            })
    }


    return (
        <>
            <div className='body-editarComentario'>
                <div className='header-voltar-editarComentario'>
                    <h1>icon</h1>
                    <p>Editar comentario</p>
                </div>
                <div className='container-editarComentario'>
                    <div className='referencia-center'>
                        <div className='div-img'>
                            <img alt='imagem'></img>
                        </div>

                        <div className='div-inputs'>
                            <h3>Titulo do post</h3>
                            <input value={tituloPost} type='text' placeholder='Escreva o titulo do post' onChange={(e) => setTituloPost(e.target.value)} />
                        </div>

                        <div className='div-inputs'>
                            <h3>Descrição do post</h3>
                            <input value={descricaoPost} type='text' placeholder='Escreva o titulo do post' onChange={(e) => setDescricaoPost(e.target.value)} />
                        </div>

                        <div className='div-botao-atualizar'>
                            {/* <button><Link to='/'>Atualizar</Link></button> */}
                            <button onClick={atualizarPost}>Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}