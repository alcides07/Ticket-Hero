import { BotaoForm } from "./styles";
import { IBotaoSubmitForm } from "../../types/IBotaoSubmitForm" 
 
export default function BotaoSubmitForm(props : IBotaoSubmitForm){
    const { textoBotao, mt, mr, ml, mb} = props;

    return(
        <>
            <BotaoForm mt={mt} mr={mr} ml={ml} mb={mb}> {textoBotao} </BotaoForm>
        </>
    )
}