import navbarStyles from "./navbar.module.scss"
import Link from "next/link"
import Image from 'next/image'
import logo from "../../assets/imagenes/logo.jpeg"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const Navbar = () => {

    const router = useRouter()

    useEffect(()=>{
        setMenuAbierto(false)
    },[router.asPath])

    //======= States
    const [menuAbierto, setMenuAbierto] = useState(false)
    const [cleroDropdown, setCleroDropdown] = useState(false)
    const [temploDropdown, setTemploDropdown] = useState(false)
    const [sacramentosDropdown, setSacramentosDropdown] = useState(false)
    const [pastoralDropdown, setPastoralDropdown] = useState(false)
    const [jovenesDropdown, setJovenesDropdown] = useState(false)

    return (
        <nav className={navbarStyles.navbarContainer}>
            {/* Esconder el fondo cuando el menu esta abierto */}
            <div className={menuAbierto ? navbarStyles.esconderFondo : ""}></div>

            <div className={menuAbierto ? [navbarStyles.navbar, navbarStyles.menuAbiertoNav].join(" ") : navbarStyles.navbar}>
                {/* Logo */}
                <div className={navbarStyles.logoContainer}>
                    <Link href="/">
                            <a>
                                <Image src={logo} alt="Logo veoteve" layout="responsive" width="300" height="300" quality="90"/> 
                            </a>
                    </Link> 
                </div>

                {/* Links vista escritorio */}
                <ul className={navbarStyles.linksEscritorio}>
                    <li>
                        <Link href="/">
                            <a>Inicio</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/misas">
                            <a>Misas</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/novedades">
                            <a>Novedades</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/preguntas-frecuentes">
                            <a>Preguntas frecuentes</a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="/contacto">
                            <a>Contacto</a>
                        </Link> 
                    </li>
                </ul>

                {/* Boton menu */}
                <div className={[navbarStyles.menuToggle, navbarStyles.menuTogglePrincipal].join(" ")} onClick={()=>{setMenuAbierto(prevMenu => !prevMenu)}} tabIndex={0} onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setMenuAbierto(prevState => !prevState) : ""}}>
                    <input type="checkbox" className={navbarStyles.btnCheckbox} checked={menuAbierto} readOnly={true} tabIndex={-1}/>

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                {/* Links del menu */}
                <section className={menuAbierto ? [navbarStyles.containerMenu, navbarStyles.menuAbierto].join(" ") : navbarStyles.containerMenu}>
                    {/* Boton cerrar */}
                    <div className={[navbarStyles.menuToggle, navbarStyles.menuToggleSecundario].join(" ")} onClick={()=>{setMenuAbierto(prevMenu => !prevMenu)}} tabIndex={0} onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setMenuAbierto(prevState => !prevState) : ""}}>
                        <input type="checkbox" className={navbarStyles.btnCheckbox} checked={menuAbierto} readOnly={true} tabIndex={-1}/>

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                    {menuAbierto ? 
                    <ul  className={menuAbierto ? [navbarStyles.linksMenu, navbarStyles.menuAbierto].join(" ") : navbarStyles.linksMenu}>
                        <li>
                            <Link href="/">
                                <a>Inicio</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/misas">
                                <a>Misas</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/novedades">
                                <a>Novedades</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/preguntas-frecuentes">
                                <a>Preguntas frecuentes</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/contacto">
                                <a>Contacto</a>
                            </Link> 
                        </li>
                        {/* Clero - junta */}
                        <li>
                            <span onClick={()=>{setCleroDropdown(prevState => !prevState)}} tabIndex="0" onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setCleroDropdown(prevState => !prevState) : ""}}>
                                Clero / Junta
                                <svg className={cleroDropdown ? navbarStyles.flechaAbierta : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                            </span>
                            {cleroDropdown ? 
                                <ul>
                                    <li>
                                        <Link href="/clero/parroco">
                                            <a>Párroco</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/clero/parroco">
                                            <a>Vicario</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/clero/parroco">
                                            <a>Seminaristas</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/clero/parroco">
                                            <a>Diáconos</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/clero/parroco">
                                            <a>Director junta</a>
                                        </Link> 
                                    </li>
                                </ul>
                            : ""}
                        </li>
                        {/* Sacramentos */}
                        <li>
                            <span onClick={()=>{setSacramentosDropdown(prevState => !prevState)}} tabIndex="0" onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setSacramentosDropdown(prevState => !prevState) : ""}}>
                                Sacramentos
                                <svg className={sacramentosDropdown ? navbarStyles.flechaAbierta : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                            </span>
                            {sacramentosDropdown ? 
                                <ul>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Bautismo</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Comunión</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Confirmación</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Matrimonio</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Reconciliación</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Unción de los enfermos</a>
                                        </Link> 
                                    </li>
                                </ul>
                            : ""}
                        </li>
                    </ul>
                    : ""}
                </section>
                

            </div>
        </nav>
    );
}
 
export default Navbar;