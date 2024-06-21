import "./styles.css";
import React from 'react';
import logo from "../../assets/logo.png";
import insta from "./../../assets/insta.png";
import telefone from "./../../assets/telefone.png";
import whats from "./../../assets/whats.png";
import tiktok from "./../../assets/tiktok.png";
import '../../assets/fundo.png';
import imagemcima from '../../assets/imagemcima.png'
import email from '../../assets/email.png'


export const Header = () => {

    return (
     <div className="container">
          <div>
                    <img src={imagemcima} alt="" className="cor" />
               </div>
          <div className="inicio">
     <div className="link">
       <div className="contas">
        <img src={logo} alt="logotipo" className="logo"/>
        <img src={insta} alt="logo" className="insta"/>
        <img src={telefone} alt="logo" className="telefone"/>
        <img src={whats} alt="logo" className="whats"/>
        <img src={tiktok} alt="logo" className="tiktok"/>
        <img src={email} alt="logo" className="email"/>

        <button className="botao">

            <a href="https://www.instagram.com/_emilygabrielle__/?next=%2F" className="link" target="_blank" rel="noopener noreferrer">Instagram</a>
       </button>
       <button className="botao">
            <a href="tel:+18991447752" className="link" target="_blank" rel="noopener noreferrer">Telefone</a>
       </button>
       <button className="botao">
            <a href="https://web.whatsapp.com/" className="link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
       </button>
       <button className="botao">
            <a href="https://www.tiktok.com/@___emily__s2?lang=pt-BR" className="link" target="_blank" rel="noopener noreferrer">TikTok</a>
       </button>
       <button className="botao">
            <a href="mailto:emily.santos189@etec.sp.gov.br" className="link" target="_blank" rel="noopener noreferrer">Email</a>
       </button>

       </div>  
       </div>
       </div>
        </div>
    )
}