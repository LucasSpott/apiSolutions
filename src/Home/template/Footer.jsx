import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

export default function Footer() {

    const wpppEnter = () => {
        window.open("https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20empresa%20XPTO%20%3A)");
    }
    const facebookEnter = () => {
        window.open("https://www.facebook.com/");
    }
    const instagramEnter = () => {
        window.open("https://www.instagram.com/");
    }
    const twitterEnter = () => {
        window.open("https://twitter.com/");
    }

    return (
        <footer>
        <div className="div-footer">
            <div className="footer-Contains">
                <div className="boxes-footer">
                <h1 className="h1-Footer">Contato</h1>
                <Link onClick={()=> wpppEnter()} className="linkFooter">Whatsapp</Link>
                <Link onClick={() => facebookEnter()} className="linkFooter">Facebook</Link>
                <Link onClick={() => instagramEnter()} className="linkFooter">Instagram</Link>
                <Link onClick={() => twitterEnter()} className="linkFooter">Twitter</Link>
            </div>
            </div>
            <div className="footer-Contains">
                <div className="boxes-footer">
                <h1 className="h1-Footer">Sobre</h1>
                <Link to="/sobre" className="linkFooter">Sobre nós</Link>
                <Link to="/termos" className="linkFooter">Termos</Link>
                <Link to="/privacidade" className="linkFooter">Privacidade</Link>
                <Link className="linkFooter">Ajuda</Link>
            </div>
            </div>
            <div className="footer-Contains">
                <div className="boxes-footer">
                <h1 className="h1-Footer">Compania</h1>
                <Link to="/parceiros" className="linkFooter">Experiência</Link>
                <Link className="linkFooter">Desenvolvimentos</Link>
                <Link className="linkFooter">Soluções</Link>
                <Link className="linkFooter">Api Solutions</Link>
            </div>
            </div>
            </div>
            <div className="div-Apology">
            <p className="p-FooterA">Api Solutions © 2022. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
    }