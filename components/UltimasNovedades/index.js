import Link from "next/link"
import Image from 'next/image'
import novedadesStyles from "./novedades.module.scss"

const UltimasNovedades = ({ novedades, repetida }) => {

    return (
        <section className={novedadesStyles.novedadesContainer}>
            <div className={novedadesStyles.header}>
                <h2>ÚLTIMAS <br /> NOVEDADES</h2>
                <Link href="/novedades">
                    <a>VER MÁS</a>
                </Link>
            </div>
            <div className={novedadesStyles.noticias}>
                {novedades.map(novedad => (
                    <div key={novedad.slug} className={novedadesStyles.noticia}>
                        <Link href={`/novedades/${novedad.slug}`}>
                            <a className={novedadesStyles.containerImagen}>
                                <Image src={novedad.portada.url} alt="Portada novedad" layout={'fill'} objectFit={'cover'} quality="90"/>
                            </a>
                        </Link>
                        <div className={novedadesStyles.info}>
                            <h1>{novedad.titulo}</h1>
                            <div className={novedadesStyles.fecha_Boton}>
                                <Link href={`/novedades/${novedad.slug}`}>
                                    <a>
                                        <button>SEGUIR LEYENDO</button>
                                    </a>
                                </Link>
                                <span>{novedad.created_at}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default UltimasNovedades;