import { Container, Button } from "react-bootstrap";


export default function DetalhesCandidato(props) {
    if (!props.candidato) {
        return <h1>Selecione um candidato para ver os detalhes</h1>;
    }
    const handleVoltar = () => {
       
        props.onVoltar();
    };

    return (
        <Container>
            <h1>Detalhes do Candidato: {props.candidato.nome}</h1>
            <img src={props.candidato.avatar} alt={props.candidato.nome} height="300" />
            <p>Email: {props.candidato.email}</p>
            <h3>Propostas:</h3>
            <ul>
                {props.candidato.propostas.map((proposta, index) => (
                    <li key={index}>{proposta}</li>
                ))}
            </ul>
            <h3>Questionamentos:</h3>
            <ul>
                {props.candidato.questionamentos.length > 0 ? (
                    props.candidato.questionamentos.map((questionamento, index) => (
                        <li key={index}>{questionamento}</li>
                    ))
                ) : (
                    <p>Sem questionamentos</p>
                )}
            </ul>
            <Button variant="secondary" onClick={handleVoltar}>
                Voltar
            </Button>
        </Container>
    );
}
