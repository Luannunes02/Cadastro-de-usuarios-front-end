import React, { useState, useEffect } from "react";
import api from "../../services/services";
import { Link, Redirect, useParams } from "react-router-dom";
import { Container } from "./InsertStyle";

export default function Insert() {
    const [newUser, setNewUser] = useState(
        {
            nome: "",
            matricula: 0,
            ativo: true,
            endereco: {
                cidade: "",
                estado: ""
            }
        }
    )

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3201/sistema/usuarios", {
            method: "post",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                
                // faça algo com a resposta da API
            })
            .catch(error => {
                console.error("Erro ao enviar os dados para a API:", error);
            });
    }

    function handleInputChange(e) {
        const { name, value } = e;

        setNewUser(prevState => {
            return { ...prevState, [name]: value }
        });

    }

    function handleInputChangeEndereco(e) {
        const { name, value } = e;

        setNewUser(prevState => {
            return {
                ...prevState,
                endereco: {
                    ...prevState.endereco,
                    [name]: value
                }
            }
        });
    }

    return (
        <div>
            <Container>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <fieldset>
                        <legend>Criar Usuário</legend>
                        <div className="user-insert">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Insira o seu nome"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.nome}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="user-insert">
                            <label htmlFor="matricula">Matricula:</label>
                            <input
                                type="number"
                                id="matricula"
                                name="matricula"
                                placeholder="Insira sua matricula"
                                min={1}
                                max={99999}
                                required
                                value={newUser.matricula}
                                onChange={(e) => handleInputChange(e.target)}
                            />
                        </div>
                        <div className="user-insert">
                            <label htmlFor="cidade">Cidade:</label>
                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                placeholder="Insira sua cidade"
                                minLength={3}
                                maxLength={100}
                                required
                                value={newUser.cidade}
                                onChange={(e) => handleInputChangeEndereco(e.target)}
                            />
                        </div>
                        <div className="user-insert">
                            <label htmlFor="estado">Estado:</label>
                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                placeholder="Insira sua estado"
                                minLength={2}
                                maxLength={2}
                                required
                                value={newUser.estado}
                                onChange={(e) => handleInputChangeEndereco(e.target)}
                            />
                        </div>
                        <div className="user-insert">
                            <label>
                                <input
                                    type="radio"
                                    name="ativo"
                                    value="true"
                                    checked={newUser.ativo === "true"}
                                    onChange={(e) => handleInputChange(e.target)}
                                />
                                Ativo
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="ativo"
                                    value="false"
                                    checked={newUser.ativo === "false"}
                                    onChange={(e) => handleInputChange(e.target)}
                                />
                                Inativo
                            </label>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </fieldset>
                </form>
                <Link to="/">Voltar</Link>
            </Container>
        </div>
    )
}