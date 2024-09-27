import React, { useState } from "react";
import Pagina from "../layouts/Pagina";
import GridCandidatos from "./GridCandidatos";
import { listaCandidatos } from "../../dados/candidatos";

export default function TelaPrincipal() {
    const [candidatos, setCandidatos] = useState(listaCandidatos);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);

    const Curtir = (id) => {
        setCandidatos(prevCandidatos => 
            prevCandidatos.map(candidato => 
                candidato.id === id ? { ...candidato, curtidas: candidato.curtidas + 1 } : candidato
            )
        );
    };

    const NaoCurtir = (id) => {
        setCandidatos(prevCandidatos => 
            prevCandidatos.map(candidato => 
                candidato.id === id ? { ...candidato, descurtidas: candidato.descurtidas + 1 } : candidato
            )
        );
    };

    // Definindo a função handleCandidatoSelecionado
    const handleCandidatoSelecionado = (candidato) => {
        setCandidatoSelecionado(candidato);
    };

    return (
        <Pagina>
            <GridCandidatos
                listaCandidatos={candidatos}
                onLike={Curtir}
                onDislike={NaoCurtir}
                onCandidatoSelecionado={handleCandidatoSelecionado}  
            />
            
            {candidatoSelecionado && (
                <div>
                    <h2>Propostas de {candidatoSelecionado.nome}</h2>
                    <ul>
                        {candidatoSelecionado.propostas.map((proposta, index) => (
                            <li key={index}>{proposta}</li>
                        ))}
                    </ul>
                </div>
            )}
        </Pagina>
    );
}
