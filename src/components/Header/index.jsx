import "./styles.css";
import logo from "../../assets/logo.png";
import insta from "./../../assets/insta.png";
import face from "./../../assets/face.png";
import whats from "./../../assets/whats.png";
import tiktok from "./../../assets/tiktok.png";


export const Header = () => {

    return (
       <div className="contas">
        <img src={logo} alt="logotipo" className="logo"/>
        <p className="email">emily.santos189@etec.sp.gov.br</p>
        <p className="nome">Emily Gabrielle Bonfim dos Santos</p>
        <img src={insta} alt="logo" className="insta"/>
        <img src={face} alt="logo" className="face"/>
        <img src={whats} alt="logo" className="whats"/>
        <img src={tiktok} alt="logo" className="tiktok"/>

        <button className="botao">

            <a href="https://www.instagram.com/_emilygabrielle__/?next=%2F" className="link">Instagram</a>
       </button>
       <button className="botao">
            <a href="https://www.facebook.com/emilygabriellebonfim.santos.3" className="link">Facebook</a>
       </button>
       <button className="botao">
            <a href="https://web.whatsapp.com/" className="link">WhatsApp</a>
       </button>
       <button className="botao">
            <a href="https://www.tiktok.com/@___emily__s2?lang=pt-BR" className="link">TikTok</a>
       </button>
       
       </div>
       
    )
}