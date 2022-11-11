import { useState, useEffect } from "react";
import React from "react";
import { Link  } from "react-router-dom";
import "./CSS/Header.css";
import { CSSTransition } from "react-transition-group";
//gracas a deus

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const showNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
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


    return (
        <header>
            <Link className="h1-Header" to="/">
                <img className="image-Logo" src="favicon.png" alt="logo" />    
            </Link>
        <nav>
            <Link className="txt-Header">Projeto</Link>
            <Link className="txt-Header">Parceiros</Link>
            <Link className="txt-Header">Contato</Link>
            <Link className="txt-Header">Sobre</Link>
        </nav>
        <div className="div-Bar">
            <Link onClick={() => showNavBar()}>
            <CSSTransition 
                in={isMenuOpen}
                timeout={350}
                classNames="buttonAnimation"
            >
            <img className="img-Header" src="menuNavIcon.png" alt="Logo"/>
            </CSSTransition>
            </Link>
                { ( !isSmallScreen || isMenuOpen ) && (
            <CSSTransition 
                in={!isMenuOpen || isSmallScreen}
                timeout={350}
                classNames="menuAnimation"
                unmountOnExit
            >
            <div className="div-NavMenu">
            <nav className="menu"> 
                <Link className="menutxt-Header">Projeto</Link>
                <Link className="menutxt-Header">Parceiros</Link>
                <Link className="menutxt-Header">Contato</Link>
                <Link className="menutxt-Header">Sobre</Link>
                <Link to="/login" className="menuButton-Header">Login</Link>
                <Link className="menuButton-Header">Parceria</Link>
            </nav>
            </div>
            </CSSTransition>
                )}
           
        </div>
        <div>
            <Link to="/login" className="button-Header">Login</Link>
            <Link to="/register" className="button-Header">Sign Up</Link>
        </div>
        </header>
    );
    }