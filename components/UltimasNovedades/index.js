import Link from "next/link"
import novedadesStyles from "./novedades.module.scss"
import NovedadCard from "../NovedadCard"

const UltimasNovedades = ({ novedades }) => {
    
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
                    <NovedadCard key={novedad.id} novedad={novedad.attributes}/>
                ))}
            </div>
        </section>
    );
}
 
export default UltimasNovedades;