import Page from "../template/Page";
import Cabecalho from "./cabecalho";
import Depoimento from "./depoimento";
import Destaque from "./destaques";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing(){
    return(
        <Page>
            <Cabecalho/>
            <Destaque/>
            <Vantagens/>
            <Depoimento/>
            <Rodape/>
        </Page>
    )
}