import React, { useState, useEffect } from "react";
import api from "../../services/services";
import { Link, useParams } from "react-router-dom";
import { Container } from "./DeleteStyle";

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

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3201/sistema/usuarios/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .catch(error => {
                console.error("Erro ao enviar os dados para a API:", error);
            });
    }

    return (
        <div>
            {
                !showInfo
                    ?
                    <div></div>
                    :
                    <Container>
                        <form action="" onSubmit={(e) => handleSubmit(e)}>
                            <fieldset>
                                <legend>Deletar Usuário</legend>
                                <div className="user-delete">
                                    <p>Tem certeza que deseja excluir o registro abaixo?</p>
                                    <p>Nome: {usuario.nome}</p>
                                    <p>Matricula: {usuario.matricula}</p>
                                </div>
                                <button type="submit">Remover</button>
                            </fieldset>
                        </form>
                        <Link to="/">Voltar</Link>
                    </Container>
            }
        </div>
    )
}