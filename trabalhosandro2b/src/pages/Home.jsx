import Logo from "../assets/logo.svg";
import Button from "../components/button";
import Menu from "../assets/figmamenu10.svg"; 
import Close from "../assets/icons/close.svg";
import { useState, useEffect } from "react";
import Champion from "../assets/champion.svg"; 

// IMPORTS DOS SEUS ESTILOS
import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";       
import "../styles/testimonials.css";   
import "../styles/pricing.css";        

// Imagens do Hero e Depoimentos
import HeroRectangleOne from "../assets/images/Rectangleone.png";
import HeroRectangleTwo from "../assets/images/Rectangletwo.png";
import ProfileImageOne from "../assets/images/profileone.png";
import Star from "../assets/icons/star.svg";
import StarOuter from "../assets/icons/starouter.svg";
import Check from "../assets/icons/check.svg";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    const closeMenu = () => setShowMobileMenu(false);

    return (
        <>
            {/* CABEÇALHO */}
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a className="reverse-color" href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="flex items-center desktop-only">
                        <a className="reverse-color ml-lg" href="">Login</a>
                        <Button text="Cadastre-se" />
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a className="reverse-color" href="#" onClick={closeMenu}>Login</a></li>
                                        <li><a href="#" onClick={closeMenu}>Home</a></li>
                                        <li><a href="#solution" onClick={closeMenu}>Soluções</a></li>
                                        <li><a href="#testimonials" onClick={closeMenu}>Depoimentos</a></li>
                                        <li><a href="#pricing" onClick={closeMenu}>Preços</a></li>
                                        <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
                                    </ul>
                                    <span onClick={closeMenu} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <main>
                {/* HERO */}
                <section id="hero">
                    <span className="desktop-only">
                        <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                    </span>
                    <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                    
                    <div className="container content">
                        <p className="desktop-only">Olá</p>
                        <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                        <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.</p>
                        <div className="flex gap-1">
                            <span><Button text="Cadastre-se" /></span>
                            <span className="desktop-only">
                                <Button text="Veja mais" secondary />
                            </span>
                        </div>
                    </div>
                </section>

                {/* SOLUÇÕES */}
                <section className="container" id="solution">
                    <header>
                        <span>
                            <p className="solution-tag">Soluções</p>
                            <h2>Sob medida para você</h2>
                        </span>
                        <p>
                            Inovação é com a gente! A <strong>Logomarca</strong> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                        </p>
                    </header>
                    
                    <section className="even-columns">
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>Produto Vencedor</h3>
                                <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>Produto Vencedor</h3>
                                <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Champion} alt="ícone campeão" width={64} height={64} />
                            </span>
                            <div>
                                <h3>Produto Vencedor</h3>
                                <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                                <hr />
                            </div>
                        </div>
                    </section>
                </section>

                {/* DEPOIMENTOS */}
                <section id="testimonials">
                    <header className="container">
                        <span>
                            <p className="desktop-only">Conselho de quem conhece</p>
                            <h2>Cada cliente importa!</h2>
                        </span>
                        <p>
                            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                            comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                        </p>
                    </header>

                    <section className="carousel">
                        <div className="carousel-content">
                            <div className="carousel-card">
                                <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                                <span className="testimony">
                                    <p>Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida Logomarca no almoço.</p>
                                </span>
                                <span className="rating">
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                                </span>
                                <span className="names">
                                    <p className="bold">Ellon Ma</p>
                                    <p>CEO BING CHILLING</p>
                                </span>
                            </div>

                            <div className="carousel-card">
                                <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                                <span className="testimony">
                                    <p>Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida Logomarca no almoço.</p>
                                </span>
                                <span className="rating">
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={Star} alt="ícone estrela" width={22} height={20} />
                                    <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                                </span>
                                <span className="names">
                                    <p className="bold">Ellon Ma</p>
                                    <p>CEO BING CHILLING</p>
                                </span>
                            </div>
                        </div>
                    </section>
                </section>

                {/* PLANOS E PREÇOS */}
                <section id="pricing" className="container">
                    <header>
                        <p className="desktop-only">Planos e preços</p>
                        <h2>Nossos planos</h2>
                    </header>

                    <section className="even-columns gap-1.5">
                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Básico</h3>
                                <p>Você tem direito a uma prova das comidas Logomarca.</p>
                            </span>
                            <h2>Grátis</h2>
                            <Button text="Pedir agora" secondary key="free" />
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Retire na loja</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </span>
                        </div>

                        <div className="pricing-card premium">
                            <span className="bonus">
                                <p>1º MÊS COM DESCONTO</p>
                            </span>
                            <span className="plan">
                                <h3>Premium</h3>
                                <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                            </span>
                            <span className="price">
                                <h2>R$ 19,90</h2>
                                <p>/mês</p>
                            </span>
                            <Button text="Pedir agora" key="premium" />
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Sem interrupção de anúncios</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Utilize quantas vezes quiser</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Utilize nossos produtos de forma fácil</p>
                            </span>
                        </div>

                        <div className="pricing-card">
                            <span className="plan">
                                <h3>Empresarial</h3>
                                <p>Volte o foco da relação de sua empresa. Apresente seus planos.</p>
                            </span>
                            <span className="price">
                                <h2>R$ 12,90</h2>
                                <p>/refeição por dev</p>
                            </span>
                            <Button text="Pedir agora" secondary key="enterprise" />
                            <span className="hr" />
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Com benefícios</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Até 10 produtos por dia</p>
                            </span>
                            <span className="features">
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Utilize para inovação X</p>
                            </span>
                        </div>
                    </section>
                </section>

                {/* SEÇÃO: ENTRE EM CONTATO */}
                <section id="contact" className="container">
                    <header>
                        <p className="contact-tag">Envie sua dúvida</p>
                        <h2>Entre em contato</h2>
                        <p>
                            Entre em contato, estamos dispostos a tirar qualquer dúvida,
                            seja um orçamento, uma dúvida técnica de algum de nossos produtos.
                            Estamos à disposição para responder.😎
                        </p>
                    </header>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Seu melhor Email" required />
                        <textarea placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" required></textarea>
                        <Button text="Enviar" />
                    </form>
                </section>
            </main>

            {/* RODAPÉ (FOOTER) */}
            <footer className="footer">
                <div className="container footer-grid">
                    {/* Coluna da Marca */}
                    <div className="footer-brand">
                        <h2>LogoMarca</h2>
                        <div className="social-icons">
                            {/* Links das redes sociais (pode trocar por SVGs depois se quiser) */}
                            <a href="#" aria-label="Instagram">📸</a>
                            <a href="#" aria-label="Facebook">👥</a>
                            <a href="#" aria-label="YouTube">📺</a>
                        </div>
                    </div>

                    {/* Links Columnistas */}
                    <div className="footer-links-group">
                        <div className="footer-col">
                            <h3>Empresa</h3>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Funcionalidades</h3>
                            <ul>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot discord</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">iOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Direitos Autorais */}
                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web💙 ©2024 AktleTech - Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}