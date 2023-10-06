import '../EditarComentario/EditarComentario.css'

export default function EditarComentario() {
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
                            <input placeholder='Escreva o titulo do post' />
                        </div>

                        <div className='div-inputs'>
                            <h3>Descrição do post</h3>
                            <input placeholder='Escreva o titulo do post' />
                        </div>

                        <div className='div-inputs'>
                            <h3>Seu Nome</h3>
                            <input placeholder='Escreva o titulo do post' />
                        </div>

                        <div className='div-botao-atualizar'>
                            <button>Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}