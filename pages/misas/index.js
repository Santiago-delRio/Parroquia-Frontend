import Head from 'next/head'
import Image from 'next/image'
import headerImg from "../../assets/imagenes/misas/header.jpeg"
import misasStyles from "./misas.module.scss"

const Misas = () => {
    return (
        <section className={misasStyles.misasContainer}>
            <Head>
                <title>Misas - Parroquia Santa Juana de Arco</title>
            </Head>
            {/* Header */}
            <header>
                <Image src={headerImg} alt="Imagen del interior de la iglesia" layout={'fill'} objectFit='cover' quality="90" priority="true"/>
                <div className={misasStyles.filtro}></div>
                <h1>MISAS</h1>
            </header>

            {/* Info */}
            <section>
                <section className={misasStyles.misas}>
                    <h2>MISAS EN EL TEMPLO</h2>
                    <div>
                        <h3>Templo abierto</h3>
                        <p>Días de semana por la mañana de 9 a 13hs y 18 a 20hs.<br />Fines de semana durante los horarios de las celebraciones, generalmente desde una hora antes de las mismas.</p>
                    </div>
                    <div>
                        <h3>Adoración al santísimo</h3>
                        <p>Todos los viernes a las 18hs.</p>
                    </div>
                    <div>
                        <h3>Confesiones</h3>
                        <p>Acercarse a sacristía un rato antes de las celebraciones o al finalizar las mismas. También contactarse con secretaría parroquial y combinar cita.</p>
                    </div>
                </section>
                
                <section className={misasStyles.horarios_herramientas}>
                    <div className={misasStyles.horarios}>
                        <h2>HORARIOS DE MISA</h2>
                        <h3>Lunes a Sábados:</h3>
                        <span>19hs</span>
                        <h3>Domingos:</h3>
                        <span>11.30hs y 19.30hs</span>
                    </div>
                    <div className={misasStyles.herramientas}>
                        <h2>HERRAMIENTAS PARA LA CELEBRACIÓN</h2>
                        <button>LECTURAS</button>
                        <button>CANCIONERO</button>
                        <button>COLECTA</button>
                    </div>
                </section>
            </section>
        </section>
    );
}
 
export default Misas;