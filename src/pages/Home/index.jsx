import api from '../../services/services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from "./HomeStyle";

export default function Home() {
    const [usuarios, setUsuarios] = useState(undefined);
    const [page, setPage] = useState(1);
    const [apiInfo, setApiInfo] = useState(undefined);

    const [haveUsuarios, setHaveUsuarios] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(()=>{
        loadUsuarios();
    },[])

    useEffect(()=>{
        if(usuarios !== []) {
            setHaveUsuarios(true);
        }
    },[usuarios])

    async function loadUsuarios(page = 1) {
        const response = await api.get(`/usuarios?page=${page}`);
        const { docs, ...usuariosInfo } = response.data;

        setApiInfo(usuariosInfo);
        setUsuarios(docs, usuariosInfo, page);
        setShowInfo(true);
    }

    function prevPage() {
        if (apiInfo.page == 1) return;

        const pageNumber = page - 1;

        setPage(pageNumber);
        loadUsuarios(pageNumber);
    }

    function nextPage() {
        if (apiInfo.page == apiInfo.pages) return;
        
        const pageNumber = page + 1;

        setPage(pageNumber);
        loadUsuarios(pageNumber);
    }

    return (
        <div>
            {
                !showInfo
                    ?
                    <div></div>
                    :
                    <Container>
                        <Link to="/criarUsuario">Cadastar novo usuário</Link>

                        {usuarios.map(usuario => (
                            <article key={usuario._id}>
                                <strong> {usuario.nome} </strong>
                                <p> {usuario.matricula} </p>
                                <p> <Link to={`/usuarios/${usuario._id}`}> Acessar </Link> </p>
                                <br />
                            </article>
                        ))}

                        <div>
                            <button disabled={apiInfo.page == 1} onClick={prevPage}>Anterior</button>
                            <button disabled={apiInfo.page == apiInfo.pages} onClick={nextPage}>Próximo</button>
                        </div>
                    </Container>
            }
        </div>
    )


}