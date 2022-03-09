import Link from "next/link"
import Image from 'next/image'
import novedadStyles from "./novedad.module.scss"

const NovedadCard = ({novedad}) => {

    return (
        <article className={novedadStyles.noticia}>
            <Link href={`/novedades/${novedad.slug}`}>
                <a className={novedadStyles.portada} tabIndex="-1">
                    <Image src={novedad.portada.data.attributes.url} alt="Portada novedad" layout={'fill'} objectFit={'cover'} sizes="50vw" quality="80"/>
                </a>
            </Link>
            <div className={novedadStyles.info}>
                <h2>{novedad.titulo}</h2>
                <div className={novedadStyles.boton_fecha}>
                    <Link href={`/novedades/${novedad.slug}`}>
                        <a>SEGUIR LEYENDO</a>
                    </Link>
                    <span>{novedad.createdAt}</span>
                </div>
            </div>
        </article>
    );
}
 
export default NovedadCard;