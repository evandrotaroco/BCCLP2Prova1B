import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false);
    const [atualizarCurtida, setAtualizarCurtida] = useState(0);
    const [adicionarQuestionamento, setAdicionarQuestionamento] = useState(false);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState({
        id: 1,
        email: "",
        nome: "",
        avatar: "",
        propostas:[],
        curtidas:0,
        descurtidas:0,
        questionamentos:[]
    });

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato listaCandidatos={listaCandidatos}
                                    setDetalharCandidato={setDetalharCandidato}
                                    setCandidatoSelecionado={setCandidatoSelecionado}
                                    candidatoSelecionado={candidatoSelecionado}
                    />
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos}
                                    setDetalharCandidato={setDetalharCandidato}
                                    setCandidatoSelecionado={setCandidatoSelecionado}
                                    setAtualizarCurtida={setAtualizarCurtida}

                    />
                    
                )
            }
        </Pagina>
    );
}