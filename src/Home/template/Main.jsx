import React from "react";
import { useEffect, useState } from "react";
import './CSS/Main.css';
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

export default function Main() {
    const imgWpp = () => {
        window.open("https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20XPTO%20%3A)");
    }
    const [show, setShow] = React.useState(false);
    
    const [isWppOpen, setIsWppOpen] = useState(false);
    const [isSmallCel, setIsSmallCel] = useState(false);

    const[isLooby, setIsLooby] = useState(false);

    const enterWpp = () => {
        setIsWppOpen(!isWppOpen);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 150px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallCel(true);
        } else {
            setIsSmallCel(false);
        }
    };


    useEffect(() => {
        setTimeout(() => {
            setShow(show => "SOLUÇÕES");
        }, 2000);
        if(show === "SOLUÇÕES"){
            setTimeout(() => {
                setShow(show => "ESTRATÉGIAS");
            }, 2000);
        }
            if(show === "ESTRATÉGIAS"){
                setTimeout(() => {
                    setShow(show => "INVEÇÕES");
                }, 2000)
            }
                if(show === "INVEÇÕES"){
                    setTimeout(() => {
                        setShow(show => "INTEGRAÇÕES");
                    }
                    , 2000)
                }
                    if(show === "INTEGRAÇÃO"){
                        setTimeout(() => {
                            setShow(show => "EXIGÊNCIAS");
                        }, 2000)
                    }
    }, [show]);

    useEffect(() => {
        setTimeout(() => {
            setIsLooby(isLooby => "PESSOAS NA SALA DE ESPERA");
        }, 2000);
    }, []);

    return (
        <main>
            <div className="div-Span">
            <h1 className="h1-Home">SUAS <span className="spanShow">{show}</span> ESTÃO AQUI!</h1>
        </div>
        <div className="div-Left">
            <img className="image-INITIAL" src="mainSolutions.png" alt="mainSolutions" />
            <h3 className="h3-MainHome">
                Pra um problema sempre há uma solução, e pra uma solução sempre há um problema.
                Nós da Api Solutions estamos aqui para te ajudar a resolver os seus problemas de 
                forma simples e eficiente. Aplicativos para smartphones, sites e sistemas em geral
                esse é o nosso dever com você.
            </h3>
        </div>
        <div className="div-bottomHome">
        <div className="hs-mainHome">
            <h2 className="h2-bottomHome">E O PREÇO?</h2>
            <h3 className="h3-bottomHome">Nós temos planos a baixo média do mercado.</h3>
        </div>
            <div className="mainBoxes">
                <div className="box1">
                <h3 className="txt-mainBox">Produtos de qualidade</h3>
            </div>
            <div className="box1">
                <h3 className="txt-mainBox">Ótimos sistemas</h3>
            </div>
            <div className="box1">
                <h3 className="txt-mainBox">Qualidade nos códigos</h3>
            </div>
            <div className="box1">
                <h3 className="txt-mainBox">Abaixo do mercado</h3>
            </div>
            <div className="box1">
                <h3 className="txt-mainBox">Atendimento 24horas</h3>
            </div>
            <div className="box1">
                <h3 className="txt-mainBox">Expert em tecnologia empresariais</h3>
            </div>
            </div>
        </div>
       <div className="div-BarConv">
        {( !isSmallCel || isWppOpen ) && (
            <CSSTransition 
                in={!isSmallCel || isWppOpen}
                timeout={600}
                classNames="wwppAnimation"
                unmountOnExit>
        <div className="div-conversation">
            <form className="form-conversation">
                <h3 className="h3-conversation">Mande uma mensagem para nós</h3>
                <input className="input-conversation" type="text" placeholder="Nome" />
                <input className="input-conversation" type="text" placeholder="Email" />
                <input className="input-conversation" type="text" placeholder="Telefone" />
                <textarea className="textarea-conversation" placeholder="Menssagem" />
                <Link className="link-conversation" type="submit">Mandar</Link>
            <Link to="#" className="link-conversation" onClick={enterWpp}>Exit</Link>
                <Link onClick={() => imgWpp()} className="link-conversationWpp">Ou Whatsapp</Link>
            </form>
        
        <span className="span-Looby">{isLooby}</span>
        </div>
        </CSSTransition>
        )}
        </div>
        <div className="div-Whatsapp"> 
        <Link onClick={() => enterWpp()}>
            <img className="image-Whatsapp" src="chatBox.png" alt="whatsapp" />
        </Link>
        </div>
        </main>
    );
    }