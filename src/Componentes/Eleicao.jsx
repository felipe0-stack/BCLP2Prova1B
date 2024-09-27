import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { listaCandidatos } from '../dados/candidatos';
import Candidato from './Telas/elementos/Candidato';

export default function Eleicao() {
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);

    const ConhecerPropostas = (candidato) => {
        setCandidatoSelecionado(candidato);
    };

    const Voltar = () => {
        setCandidatoSelecionado(null);
    };

    const addQuestionamento = (questionamento) => {
        if (candidatoSelecionado) {
            setCandidatoSelecionado(prevState => ({
                ...prevState,
                questionamentos: [...prevState.questionamentos, questionamento]
            }));
        }
    };

    return (
        <div>
            {!candidatoSelecionado ? (
                <div className="lista-candidatos">
                    {listaCandidatos.map((candidato) => (
                        <Candidato
                            key={candidato.id}
                            candidato={candidato}
                            onConhecerPropostas={() => ConhecerPropostas(candidato)}
                            onAddQuestionamento={addQuestionamento} 
                            onProposta={ConhecerPropostas} 
                        />
                    ))}
                </div>
            ) : (
                <div className="detalhes-candidato">
                    <Button variant="secondary" onClick={Voltar}>
                        Voltar
                    </Button>
                    <h2>{candidatoSelecionado.nome}</h2>
                    <img src={candidatoSelecionado.avatar} alt={candidatoSelecionado.nome} height="300" />
                    <p>Email: {candidatoSelecionado.email}</p>
                    <h3>Propostas:</h3>
                    <ul>
                        {candidatoSelecionado.propostas.map((proposta, index) => (
                            <li key={index}>{proposta}</li>
                        ))}
                    </ul>
                    <h3>Questionamentos:</h3>
                    <ul>
                        {candidatoSelecionado.questionamentos.length > 0 ? (
                            candidatoSelecionado.questionamentos.map((questionamento, index) => (
                                <li key={index}>{questionamento}</li>
                            ))
                        ) : (
                            <p>Sem questionamentos</p>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
