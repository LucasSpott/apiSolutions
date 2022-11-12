import { useState, useEffect } from "react";
import React from "react";
import { Link  } from "react-router-dom";
import "./CSS/Header.css";
import { CSSTransition } from "react-transition-group";
import { auth } from "../../firebase-Config";
import { signOut } from "firebase/auth";
//gracas a deus

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSairClicked, setIsSairClicked] = useState(false);

    const showNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
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
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const sair = () => {
    try {
        const user =  signOut(
            auth,
    ).then(() => {
        window.location.href = '/'; //nadaainda
    })
    } catch (error) {
        window.location.href = '/lhomelogin'; //nadaainda
    }
    }


    return (
        <header className="headerPosHome">
            <Link className="h1-Header" to="/">
                <img className="image-LogoPosHome" src="favicon.png" alt="logo" />    
            </Link>
        
        <div className="div-Bar">
            <Link onClick={() => showNavBar()}>
            <CSSTransition 
                in={isMenuOpen}
                timeout={350}
                classNames="buttonAnimation"
            >
            <img className="img-HeaderHomeCell" src="profilePic.png" alt="Logo"/>
            </CSSTransition>
            </Link>
                { ( !isSmallScreen || isMenuOpen ) && (
            <CSSTransition 
                in={!isMenuOpen || isSmallScreen}
                timeout={350}
                classNames="menuAnimation"
                unmountOnExit
            >
            <div className="div-NavPosMenu">
            <nav className="menuPosHome"> 
                <Link to="/Projeto" className="posmenutxt-HeaderCell">Meu perfil</Link>
                <Link className="posmenutxt-HeaderCell">Parceiros</Link>
                <Link className="posmenutxt-HeaderCell">Contato</Link>
                <Link className="posmenutxt-HeaderCell">Sobre</Link>
                <Link to="/" onClick={() => sairReload()} className="posmenuButton-Header">Sair</Link>
            </nav>
            </div>
            </CSSTransition>
                )}
           
        </div>
        </header>
    );
    }