import React from "react";
import './CSS/Sobre.css'

export default function Sobre() {
    return (
        <div className='main-Sobre'>
            <h1 className='h1-Sobre'>PORQUE SOMOS UMA EMPRESA NÚMERO 1</h1>
            <h2 className="h2-Sobre">A API Solutions foi fundada
            em 30 de março de 2019, com o objetivo de oferecer
            soluções de TI para empresas de pequeno e médio porte.
            Nossa organização zela pela qualidade e eficiência
            dos serviços prestados, propagando a cultura de
            inovação e tecnologia.
            </h2>
            <div className='div-SobreBoxes'>
                <div className='div-SobreBox'>
                    <img className='img-SobreBox' src='proposito.png' alt='img-SobreBox' />
                    <h1 className='h1-SobreBox'>Propósito</h1>
                    <p className='p-SobreBox'>
                        Promover tecnologia para empresas e países,
                        por meio do cooperativismo dos nossos profissionais
                        e do conhecimento em tecnologia, para que o maior número
                        de pessoas possa ter acesso a ela.
                    </p>
                </div>
                <div className='div-SobreBox'>
                    <img className='img-SobreBox' src='visao.png' alt='img-SobreBox' />
                    <h1 className='h1-SobreBox'>Visão</h1>
                    <p className='p-SobreBox'>
                        Ser uma empresa de tecnologia referência no mercado,
                        reconhecida pela qualidade de seus serviços e pela
                        satisfação de seus clientes.
                    </p>
                </div>
                <div className='div-SobreBox'>
                    <img className='img-SobreBox' src='principiosequipe.png' alt='img-SobreBox' />
                    <h1 className='h1-SobreBox'>Princípios da equipe</h1>
                    <ul className='p-SobreBox'>
                        <li>Respeito</li>
                        <li>Comprometimento</li>
                        <li>Inovação</li>
                        <li>Transparência</li>
                        <li>Qualidade</li>
                        <li>Ética</li>
                        </ul>
                    </div>
                <div className='div-SobreBox'>
                    <img className='img-SobreBox' src='cooperacao.png' alt='img-SobreBox' />
                    <h1 className='h1-SobreBox'>Cooperação</h1>
                    <ul className='p-SobreBox'>
                        <li>Trabalho em equipe</li>
                        <li>Compartilhamento de conhecimento</li>
                        <li>Comunicação</li>
                        <li>Colaboração</li>
                        <li>Responsabilidade</li>
                        <li>Respeito</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}