import { ContainerPageNotFound, ImagemErro } from "./styles";
import error404 from "../../assets/error404.svg"

export default function PageNotFound(){
    return (
        <ContainerPageNotFound>
            <ImagemErro src = {error404} alt = "ERROR 404"/>
        </ContainerPageNotFound>
    )
}