import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { ContainerHome } from "./styles";
import Button from 'react-bootstrap/Button';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CustomCard from "../../components/Card";

import { ICard } from '../../types/IComponents';
export default function Home() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    const Mockup: ICard = {
        title: 'Eletro Party',
        description: 'Festa de música eletrônica',
        pathImg: 'https://img.freepik.com/psd-gratuitas/modelo-de-banner-horizontal-de-neon-para-musica-eletronica-com-dj-feminina_23-2148979684.jpg?w=900&t=st=1679342315~exp=1679342915~hmac=664278eca29bfcbda4f23c171f99897a3a90ec386c3dd4a8f92fd34d6141b644'
    }

    const items = [
        <CustomCard infos={Mockup} />,
        <CustomCard infos={Mockup} />,
        <CustomCard infos={Mockup} />,
        <CustomCard infos={Mockup} />,
        <CustomCard infos={Mockup} />,
    ];
    return (
        <>
            <Navbar />
            <Header />
            <ContainerHome>
                <Button variant="outline-dark">Meus eventos para hoje</Button>
                <AliceCarousel mouseTracking items={items} responsive={responsive} />
            </ContainerHome>
        </>
    )
}