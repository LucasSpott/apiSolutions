import React from "react";
import './CSS/Main.css';
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <main>
           <div className="divBlog">
                <div className="divBlog1">
                <iframe className="iframeBlog" src="https://www.globo.com/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="divPainel">
               <h1 className="h1Painel">Painel de controle</h1>
                <Link className="h2-ProjetosPosHome">Projetos em andamento</Link>
                <div></div>
                <Link className="h2-ProjetosPosHome">Projetos finalizados</Link>
                <div></div>
                <Link className="h2-ProjetosPosHome">Abrir um chamado</Link>
                <Link className="h2-ProjetosPosHome">Criar novo projeto</Link>
            </div>
                 </div>
        </main>
    )
}