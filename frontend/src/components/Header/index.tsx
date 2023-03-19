import { ContainerHeader } from "./styles"

export default function Header(){
    return (
        <>
            <hr style={{backgroundColor: "#000", width: "100%", margin: "auto"}}/>  
            <ContainerHeader>
                <ul>
                    {localStorage.getItem("typeUser") == "organizador" && (
                        <>
                            <li>Criar evento</li>
                            <li>Meus eventos</li>
                            <li>Para inspirar</li>
                        </>
                    )}

                    {localStorage.getItem("typeUser") == "cliente" && (
                        <>
                            <li>Em alta</li>
                            <li>Todos os eventos</li>
                            <li>Meus ingressos</li>
                        </>
                    )}
                </ul>
            </ContainerHeader>
            <hr style={{backgroundColor: "#000", width: "100%", margin: "auto"}}/>  
        </>
    )
}