import { useState, useEffect } from "react";
import React from "react";
import { Link  } from "react-router-dom";
import "./CSS/Header.css";
import { CSSTransition } from "react-transition-group";

//gracas a deus

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [toglle, setToglle] = useState(false);
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

    const dayNight = () => {
        const txt = document.querySelectorAll(".txt-Header");
        const box = document.querySelectorAll(".box1");
        const txtBox = document.querySelectorAll(".txt-mainBox");
        const linkfooter = document.querySelectorAll(".linkFooter");
        const h1footer = document.querySelectorAll(".h1-Footer");
        setToglle(!toglle);
        if(!toglle){
            document.querySelector("header").classList.add("Day");
            document.querySelector("body").classList.add("Day");
            document.querySelector("footer").classList.add("Day");
            document.querySelector(".h1-Home").classList.add("Day");
            document.querySelector(".h3-MainHome").classList.add("Day");
            document.querySelector(".h2-bottomHome").classList.add("txtDay");
            document.querySelector(".h3-bottomHome").classList.add("txtFooterlDay");
            txt.forEach((item) => {
                item.classList.add("Day");
            });
            box.forEach((item) => {
                item.classList.add("BoxDay");
            });
            txtBox.forEach((item) => {
                item.classList.add("txt-BoxDay");
            });
            h1footer.forEach((item) => {
                item.classList.add("txtFooterlDay");
            });
            linkfooter.forEach((item) => {
                item.classList.add("txtFooterlDay");
            });
            
        }else{
            document.querySelector("header").classList.remove("Day");
            document.querySelector("body").classList.remove("Day");
            document.querySelector("footer").classList.remove("Day");
            document.querySelector(".txt-Header").classList.remove("Day");
            document.querySelector(".h1-Home").classList.remove("Day");
            document.querySelector(".h3-MainHome").classList.remove("Day");
            document.querySelector(".h2-bottomHome").classList.remove("txtDay");
            document.querySelector(".box1").classList.add("BoxDay");
            txt.forEach((item) => {
                item.classList.remove("Day");
            });
            box.forEach((item) => {
                item.classList.remove("BoxDay");
            });
            txtBox.forEach((item) => {
                item.classList.remove("txt-BoxDay");
            });
            h1footer.forEach((item) => {
                item.classList.remove("txtFooterlDay");
            });
            linkfooter.forEach((item) => {
                item.classList.remove("txtFooterlDay");
            }
            );
        }

    }


    return (
        <header>
            <Link className="h1-Header" to="/">
                <img className="image-Logo" src="favicon.png" alt="logo" />    
            </Link>
        <nav>
            <Link to="/Projeto" className="txt-Header">Experiência</Link>
            <Link className="txt-Header">Parceiros</Link>
            <Link className="txt-Header">Contato</Link>
            <Link className="txt-Header">Sobre</Link>
            <input onChange={() => dayNight()} type="checkbox" id="switch" name="theme" />
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
                <Link to="/Projeto" className="menutxt-Header">Experiência</Link>
                <Link className="menutxt-Header">Parceiros</Link>
                <Link className="menutxt-Header">Contato</Link>
                <Link className="menutxt-Header">Sobre</Link>
                <Link to="/login" className="menuButton-Header">Login</Link>
                <Link to="/register" className="menuButton-Header">Parceria</Link>
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