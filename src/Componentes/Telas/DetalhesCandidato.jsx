import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const [candidato, setCandidato] = useState(props.candidatoSelecionado);

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            { 
                <div>
                   <img src={candidato.avatar} height="250" width="250"/>
                   <h3>{"Nome do candidato: " + candidato.nome}</h3>
                   <h5>{"Email: " + candidato.email}</h5>
                   <h5>{"Curtidas: " + candidato.curtidas}</h5>
                   <h5>{"Descurtidas: " + candidato.descurtidas}</h5>
                   <h5>{"Propostas: " + candidato.propostas}</h5>

                </div>
            }
            <Button className="mt-1" variant="primary" onClick={() => {
                        props.setAdicionarQuestionamento(true);
                    }}>
            Adicionar questionamento</Button> <Button className="mt-1" variant="primary" onClick={() => {
                        props.setDetalharCandidato(false);
                        props.setAdicionarQuestionamento(false);
                    }}>Voltar</Button>
            {
                //tentei fazer o C, mas não consegui pensar em uma lógica!
            }
        </Container>
    );
}