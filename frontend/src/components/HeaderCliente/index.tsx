import { Header } from "./styles"
import {Link} from 'react-router-dom' 

export default function HeaderCliente(){
    return (
        <>
            <Header>
                <ul>
                    <li> Item1 </li>
                    <li> Item2 </li>
                    <li> Item3 </li>
                    <li> Item4 </li>
                </ul>
            </Header>
        </>
    )
}