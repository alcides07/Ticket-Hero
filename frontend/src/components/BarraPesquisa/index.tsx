import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { ContainerPesquisa, InputBusca } from './styles';
import { useEffect, useState } from 'react';
import { buscarEventoPublico } from './services/buscarEventoPublico';
import { IEvento } from '../../types/IEvento';
import { GrClose } from "react-icons/gr";

function BarraPesquisa() {
    const [ eventos, SetEventos ] = useState<IEvento[]>([]);

    const Submit = ((e:any) => {
        e.preventDefault();
    })

    function inputClear(){
        const input = document.getElementById("inputSearch");
        input.value = "";
        busca("");
    }   

    function busca(texto:string){
        setTimeout(() => {
            buscarEventoPublico(texto)
            .then((response) => {
                SetEventos(response);
            })
        }, 1000)
    }

    useEffect(() => {
        buscarEventoPublico("")
        .then((response) => {
            SetEventos(response);
        })
    }, [])

    return (
        <>
        <ContainerPesquisa onSubmit={Submit}>
            <Row className="align-items-center">
            <Col xs="auto">
                <InputGroup className="mb-2">
                <InputBusca id = "inputSearch" onChange = {(e:any) => busca(e.target.value)} placeholder="Busque por um evento" />
                <InputGroup.Text className = "containerX" onClick = {(e:any) => inputClear()}>
                    <GrClose className='botaoX'/>
                </InputGroup.Text>
                </InputGroup>
            </Col>
            </Row>
        </ContainerPesquisa>

{/* {eventos && eventos.length > 0 && (
    eventos.map((evento: IEvento) => {
      return (
          <div key={evento.id} style={{margin:"auto", display:"flex", width:"100%", justifyContent:"center"}}>
          <p>{evento.nome}</p>
        </div>
      )
    })
    )} */}
    </>
  );
}

export default BarraPesquisa;