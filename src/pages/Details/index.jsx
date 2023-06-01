import React, { useState, useEffect } from "react";
import api from "../../services/services";
import { Link, useParams } from "react-router-dom";
import { Container } from "./DetailsStyle";

export default function Details() {
    const { id } = useParams();

    const [usuario, setUsuario] = useState(undefined);

    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        loadUsuario();
    }, [])

    useEffect(() => {
        if (usuario !== undefined) setShowInfo(true);
    }, [usuario])

    async function loadUsuario() {
        const response = await api.get(`/usuarios/${id}`);
        setUsuario(response.data);
    }

    return (
        <div>
            {
                !showInfo
                    ?
                    <div></div>
                    :
                    <Container>
                        <h1>{usuario.nome}</h1>
                        <h1>{usuario.matricula}</h1>
                        <h1>{usuario.ativo ? "Ativo" : "Inativo"}</h1>
                        <h1>{usuario.endereco.cidade}</h1>
                        <h1>{usuario.endereco.estado}</h1>
                        <br />
                        <div className="buttons-container">
                            <Link to="/">Voltar</Link>
                            <Link to={`/EditarUsuario/${id}`}>Editar</Link>
                            <Link to={`/DeletarUsuario/${id}`}>Deletar</Link>
                        </div>
                    </Container>
            }
        </div>
    )
}