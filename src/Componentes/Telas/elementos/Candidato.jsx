import React, { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";

export default function Candidato(props) {
    const [questionamento, setQuestionamento] = useState('');

    const AddQuestionamento = (e) => {
        e.preventDefault(); 
        if (questionamento.trim() !== '') {
            props.onAddQuestionamento(questionamento); 
            setQuestionamento(''); 
        }
    };

    const Propostas = () => {
        if (props.onCandidatoSelecionado) { 
            props.onCandidatoSelecionado(props.candidato); 
        } else {
            console.error('onCandidatoSelecionado is not a function');
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="300" width="300" src={props.candidato.avatar} />
            <Card.Body>
                <Card.Title>{"Candidato: " + props.candidato.nome}</Card.Title>
                <Card.Text>
                    <p>{"Email: " + props.candidato.email}</p>
                    <p>{"Curtidas: " + props.candidato.curtidas}</p>
                    <p>{"Não Curtidas: " + props.candidato.descurtidas}</p>
                    <p>{"Questionamentos: " + props.candidato.questionamentos.length}</p>
                </Card.Text>

                <Button variant="primary" onClick={() => props.onLike(props.candidato.id)}> 
                    Curtir
                </Button>

                <Button variant="primary" onClick={() => props.onDislike(props.candidato.id)} className="ms-2"> 
                    Não Curtir
                </Button>

                <Button className="mt-1" variant="success" onClick={Propostas}>
                    Conheça minhas propostas
                </Button>
                
                <Form onSubmit={AddQuestionamento} className="mt-3">
                    <Form.Group controlId="formQuestionamento">
                        <Form.Label>Faça uma pergunta:</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={questionamento} 
                            onChange={(e) => setQuestionamento(e.target.value)} 
                            placeholder="Digite sua pergunta" 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2">
                        Enviar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
