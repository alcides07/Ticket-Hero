import { ContainerFooter } from "./styles"

export default function Footer(){
    return (
        <ContainerFooter>
            <ul>
                <li> Social A </li>
                <li> Social B </li>
                <li> Social C </li>
            </ul>
            <p>
                <span className = "ticket">Ticket</span>
                <span className = "hero">Hero</span>
                <span>&copy;</span>
            </p>

        </ContainerFooter>
    )
}