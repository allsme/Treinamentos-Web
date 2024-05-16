import React from 'react';
import {Body, Button, Line, Buttondiv, Title1, Title2, Title3, Paragraph, Albumdiv} from './style';
import img from '../assets/imagens/logo.svg';
import img2 from '../assets/imagens/beatles.jpg';
import img3 from '../assets/imagens/elvis.jpg';
import img4 from '../assets/imagens/bob.jpg';

function Home() {
    return (
        <Body>

            <header>
                <img src={img} alt="Logo do Site"></img>
                <Buttondiv>
                    <Button>Home</Button> 
                    <Button>Produtos</Button>
                    <Button>Contato</Button>
                </Buttondiv>
            </header>

            <div>
                <div>
                    <Title1>Box Vinil</Title1>
                    <Paragraph>A sua plataforma exclusiva para vinis de <b>alta qualidade</b>. 
                        Descubra clássicos, raridades e lançamentos exclusivos em uma 
                        experiência de compra intuitiva e segura. 
                        Comece sua jornada musical hoje mesmo!
                    </Paragraph>

                    <Title2>Principais recursos do BoxVinil</Title2>

                    <Paragraph>Variedade Excepcional</Paragraph>
                    <Paragraph>Autenticidade Garantida</Paragraph>
                    <Paragraph>Lançamentos Exclusivos</Paragraph>
                    <Paragraph>Envio Seguro e Rápido</Paragraph>
                    <Paragraph>Recomendações Personalizadas</Paragraph>
                    <Paragraph>Atendimento ao Cliente Excepcional</Paragraph>
                </div>

                <div>
                    <Title2>Produtos em Destaque</Title2>
                    <Line></Line>
                    <Albumdiv>
                        <img src={img2} alt="Albúm dos Beatles"></img>
                        <Title3>Beatles</Title3>
                        <Button>COMPRAR</Button>
                    </Albumdiv>

                    <Line></Line>

                    <Albumdiv>
                        <img src={img3} alt="Albúm do Elvis"></img>
                        <Title3>Elvis Presley</Title3>
                        <Button>COMPRAR</Button>
                    </Albumdiv>

                    <Line></Line>

                    <Albumdiv>
                        <img src={img4} alt="Albúm do Bob Marley"></img>
                        <Title3>Bob Marley</Title3>
                        <Button>COMPRAR</Button>
                    </Albumdiv>
                </div>
            </div>
        </Body>
    )
}

export default Home;