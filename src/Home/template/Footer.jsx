import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

export default function Footer() {
    return (
        <footer>
        <div className="div-footer">
            <div className="footer-Contains">
                <div className="boxes-footer">
                <h1 className="h1-Footer">Contato</h1>
                <Link className="linkFooter">Whatsapp</Link>
                <Link className="linkFooter">Facebook</Link>
                <Link className="linkFooter">Instagram</Link>
                <Link className="linkFooter">Twitter</Link>
            </div>
            </div>
            <div className="footer-Contains">
                <div className="boxes-footer">
                <h1 className="h1-Footer">Sobre</h1>
                <Link className="linkFooter">Sobre nós</Link>
                <Link className="linkFooter">Termos</Link>
                <Link className="linkFooter">Privacidade</Link>
                <Link className="linkFooter">Ajuda</Link>
            </div>
            </div>
            <div className="footer-Contains">
                <div className="boxes-footer">
                <h1 className="h1-Footer">Compania</h1>
                <Link className="linkFooter">Parceiros</Link>
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