import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import headerImg from "../../../assets/imagenes/sacramentos/comunion/header.jpg"
import comunionStyles from "./comunion.module.scss"

const Comunion = () => {
    return (
        <main className={comunionStyles.comunion}>
            <Head>
                <title>Comunión - Parroquia Santa Juana de Arco</title>
            </Head>
            {/* Header */}
            <header>
                <Image src={headerImg} alt="Imagen del interior de la iglesia" layout={'fill'} objectFit='cover' quality="90" priority="true"/>
                <div className={comunionStyles.filtro}></div>
                <h1>COMUNIÓN</h1>
            </header>

            {/* Content */}
            <section className={comunionStyles.info}>
                {/* Pregunta */}
                <h3>¿Qué es?</h3>
                <p>La Eucaristía es la consagración del pan en el Cuerpo de Cristo y del vino en su Sangre que renueva mística y sacramentalmente el sacrificio de Jesucristo en la Cruz. La Eucaristía es Jesús real y personalmente presente que transforma el pan y el vino que el sacerdote consagra. La primera tuvo lugar durante la última cena pascual que Jesús celebró con sus discípulos.</p>

                {/* Pregunta */}
                <h3>¿Quiénes pueden recibir la Primera Comunión?</h3>
                <p>Todas las personas a partir de los 8 años de edad pueden prepararse para recibir la primera comunión.</p>

                {/* Pregunta */}
                <h3>¿Cómo me preparo?</h3>
                <ul>
                    <li>Primera comunión para niños: Se realiza una preparación de los chicos y chicas mediante la catequesis familiar.</li>
                    <li>Primera comunión para jóvenes y adultos: A partir de los 15 años en adelante se realiza la preparación junto a la preparación para la confirmación. Más información en{'\u00A0'}
                        <Link href="/sacramentos/confirmacion">
                            <a >Sacramento de la Confirmación</a>
                        </Link>
                        .
                    </li>
                </ul>

                {/* Pregunta */}
                <h3>¿Qué requisitos necesito?</h3>
                <p>Solamente tener 8 años. No es necesario haber sido bautizado para comenzar la preparación. En ese caso en el camino de la preparación para recibir la primera comunión también recibirán el bautismo.</p>
            </section>
        </main>
    );
}
 
export default Comunion;