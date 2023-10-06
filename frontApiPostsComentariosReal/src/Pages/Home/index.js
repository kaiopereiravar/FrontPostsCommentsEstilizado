import '../Home/Home.css'

export default function Home() {
    return (
        <div className='body-home'>
            <div className='container-home'>
                <input type='text' placeholder="Pesquisar" />

                <div className='div-post'>
                    <div className='div-post-alinhamento'>
                        <div className='div-post-imagem'>
                            <img src='#' alt='insira a imagem aqui' />
                        </div>

                        {/* coloque o .map aqui para inserir as propiedades dinamicas e tirar essas fixas*/}

                        <div className='Titulo-post'>
                            <p>Titulo do post</p>
                        </div>

                        <div className='Descricao-post'>
                            <p>Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui,</p>
                        </div>

                        <div className='botoes-post'>
                            <button>Editar</button>
                            <button>Deletar</button>
                        </div>
                    </div>
                </div>

                <div className='div-post'>
                    <div className='div-post-alinhamento'>
                        <div className='div-post-imagem'>
                            <img src='#' alt='insira a imagem aqui' />
                        </div>

                        {/* coloque o .map aqui para inserir as propiedades dinamicas e tirar essas fixas*/}

                        <div className='Titulo-post'>
                            <p>Titulo do post</p>
                        </div>

                        <div className='Descricao-post'>
                            <p>Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui, Descricao do post ira vir aqui,</p>
                        </div>

                        <div className='botoes-post'>
                            <button>Editar</button>
                            <button>Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}