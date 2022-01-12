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
                                        <Link href="/">
                                            <a>Vicario</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Seminaristas</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Diáconos</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Director junta</a>
                                        </Link> 
                                    </li>
                                </ul>
                            : ""}
                        </li>
                        {/* El templo */}
                        <li>
                            <span onClick={()=>{setTemploDropdown(prevState => !prevState)}} tabIndex="0" onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setTemploDropdown(prevState => !prevState) : ""}}>
                                El Templo
                                <svg className={temploDropdown ? navbarStyles.flechaAbierta : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                            </span>
                            {temploDropdown ? 
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a>Información general</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Historia y arquitectura</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Restauración</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Imagenes del templo</a>
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
                                        <Link href="/">
                                            <a>Bautismo</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/sacramentos/comunion">
                                            <a>Comunión</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Confirmación</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Matrimonio</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Reconciliación</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Unción de los enfermos</a>
                                        </Link> 
                                    </li>
                                </ul>
                            : ""}
                        </li>
                        <li>
                            <Link href="/">
                                <a>Cinerario</a>
                            </Link> 
                        </li>
                        {/* Area pastoral */}
                        <li>
                            <span onClick={()=>{setPastoralDropdown(prevState => !prevState)}} tabIndex="0" onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setPastoralDropdown(prevState => !prevState) : ""}}>
                                Área pastoral
                                <svg className={pastoralDropdown ? navbarStyles.flechaAbierta : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                            </span>
                            {pastoralDropdown ? 
                                <ul>
                                    <li>
                                        <span onClick={()=>{setJovenesDropdown(prevState => !prevState)}} tabIndex="0" onKeyPress={(event)=>{event.key == "Enter" || event.key == " " ? setJovenesDropdown(prevState => !prevState) : ""}}>
                                            Jóvenes
                                            <svg className={jovenesDropdown ? navbarStyles.flechaAbierta : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                                        </span>
                                        {jovenesDropdown ? 
                                            <ul>
                                                <li>
                                                    <Link href="/">
                                                        <a>Adoración joven</a>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <a>Grupo Misionero Joven</a>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <a>Grupo de Jóvenes</a>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <a>Grupo de Adolescentes</a>
                                                    </Link> 
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <a>Scout</a>
                                                    </Link> 
                                                </li>
                                            </ul>
                                        : ""}
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Matrimonio</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/area-pastoral/caritas">
                                            <a>Cáritas</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Catequesis</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Liturgia</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Grupo de oración</a>
                                        </Link> 
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Grupo misionero parroquial</a>
                                        </Link> 
                                    </li>
                                </ul>
                            : ""}
                        </li>
                        <li>
                            <Link href="/">
                                <a>Boletín</a>
                            </Link> 
                        </li>
                    </ul>
                    : ""}
                </section>
                

            </div>
        </nav>
    );
}
 
export default Navbar;