import parrocoStyles from "./parroco.module.scss"
import parroco from "../../../assets/imagenes/clero/parrocos/parroco1.jpg"
import Head from 'next/head'
import Image from 'next/image'

const Parroco = () => {
    return (
        <main className={parrocoStyles.parrocos}>
            <Head>
                <title>Párrocos - Parroquia Santa Juana de Arco</title>
            </Head>
            {/* Header */}
            <header className={parrocoStyles.header}>
                <h1>PÁRROCOS</h1>
            </header>
            {/* Container info parrocos */}
            <section className={parrocoStyles.infoParrocos}>
                {/* Parroco #1 */}
                <div className={parrocoStyles.parroco}>
                    {/* Imagen y nombre */}
                    <header>
                        <div className={parrocoStyles.containerImagen}>
                            <Image src={parroco} alt="Imagen padre carlos avellaneda" layout={'fill'} objectFit={'cover'} quality="90"/>   
                        </div>
                        <div className={parrocoStyles.nombreCargo}>
                            <h2>Padre Carlos Avellaneda</h2>
                            <h3>Párroco</h3>
                        </div>
                    </header>
                    {/* info */}
                    <div className={parrocoStyles.info}>
                        <p>
                            Carlos Avellaneda nació en Buenos Aires el 23 de diciembre de 1954. Fue ordenado sacerdote el 20 de diciembre de 1980 para la Diócesis de San Isidro. Es Licenciado en Teología Sistemática (UCA) y en Teología Espiritual (PUG – Roma). Posee una larga trayectoria como docente de teología sistemática en diversas instituciones.
                            <br />
                            <br />
                            El 11 de marzo de 2018 asumió como párroco de nuestra Catedral.
                            <br />
                            <br />
                            Se desempeñó como párroco de las parroquias Santo Cristo, Nuestra Señora de la Guardia y Nuestra Señora de la Merced (2011-2018). Fue Rector del Seminario Diocesano y presidente de la Organización de Seminarios de la Argentina. Además de ser párroco de la Catedral, actualmente es asesor del Equipo Diocesano de Pastoral Familiar y Capellán del colegio Holy Cross. Ha publicado varios libros referidos a la espiritualidad matrimonial y los vínculos humanos.
                        </p>
                    </div>
                </div>
                {/* Parroco #2 */}
                <div className={parrocoStyles.parroco}>
                    {/* Imagen y nombre */}
                    <header>
                        <div className={parrocoStyles.containerImagen}>
                            <Image src={parroco} alt="Imagen padre carlos avellaneda" layout={'fill'} objectFit={'cover'} quality="90"/>   
                        </div>
                        <div className={parrocoStyles.nombreCargo}>
                            <h2>Padre Carlos Avellaneda</h2>
                            <h3>Párroco</h3>
                        </div>
                    </header>
                    {/* info */}
                    <div className={parrocoStyles.info}>
                        <p>
                            Carlos Avellaneda nació en Buenos Aires el 23 de diciembre de 1954. Fue ordenado sacerdote el 20 de diciembre de 1980 para la Diócesis de San Isidro. Es Licenciado en Teología Sistemática (UCA) y en Teología Espiritual (PUG – Roma). Posee una larga trayectoria como docente de teología sistemática en diversas instituciones.
                            <br />
                            <br />
                            El 11 de marzo de 2018 asumió como párroco de nuestra Catedral.
                            <br />
                            <br />
                            Se desempeñó como párroco de las parroquias Santo Cristo, Nuestra Señora de la Guardia y Nuestra Señora de la Merced (2011-2018). Fue Rector del Seminario Diocesano y presidente de la Organización de Seminarios de la Argentina. Además de ser párroco de la Catedral, actualmente es asesor del Equipo Diocesano de Pastoral Familiar y Capellán del colegio Holy Cross. Ha publicado varios libros referidos a la espiritualidad matrimonial y los vínculos humanos.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Parroco;