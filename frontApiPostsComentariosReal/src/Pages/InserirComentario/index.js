import '../InserirComentario/InseririComentario.css'
import { useState } from 'react'
import '../EditarComentario/EditarComentario.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function InserirComentario() {
    const [tituloPost, setTituloPost] = useState([])
    const [descricaoPost, setDescricaoPost] = useState([])
    const navigate = useNavigate(true)

    function InserirPost() {
        axios.post(`http://localhost:22390/Comentarios/`, {
            nomeConta: tituloPost,
            comentarios: descricaoPost
        })
            .then((response) => {
                console.log(response.data.nomeConta)
                alert(`O post foi inserido com sucesso!!`)
                navigate("/", {replace: true})
            })
            .catch(() => {
                console.log(`Não foi possivel inserir na requisição!!!`)
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
                            <button onClick={InserirPost}>Inserir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}