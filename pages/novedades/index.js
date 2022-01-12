import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import novedadesStyles from "./novedades.module.scss"
import { useEffect, useState } from 'react'

const Novedades = ({ novedades }) => {

    //Cantidad total de noticias para cargar
    const [cantTotalNoticias, setCantTotalNoticias] = useState(0)

    //Ver cuantas noticias hay para cargar
    useEffect(()=>{
        setCantTotalNoticias(novedades.length);
        (novedades.length < 6 && novedades.length > 0) ? setNoticiasMostradas(novedades.length)  : "";
    },[])

    //Cantidad de noticias mostradas
    const [noticiasMostradas, setNoticiasMostradas] = useState(6)

    //Cargar mas noticias
    const cargarNoticias = () =>{
        let noticiasRestantes = cantTotalNoticias - noticiasMostradas;

        if(noticiasRestantes >= 6){
            setNoticiasMostradas((prevNoticiasMostradas) => prevNoticiasMostradas + 6)
        }else if(noticiasRestantes < 6 && noticiasRestantes > 0){
            setNoticiasMostradas((prevNoticiasMostradas) => prevNoticiasMostradas + noticiasRestantes)
        }
        
    }
    return (
        <section className={novedadesStyles.novedades}>
            <Head>
                <title>Novedades - Parroquia Santa Juana de Arco</title>
            </Head>
            {/* Header */}
            <header className={novedadesStyles.header}>
                <h1>NOVEDADES</h1>
            </header>
            {/* Novedades */}
            <section className={novedadesStyles.listaNovedades}>
            {novedades.slice(0,noticiasMostradas).map(novedad => (
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
            </section>
            {/* Boton cargar más novedades*/}
            {(cantTotalNoticias != noticiasMostradas) ? 
                <button className={novedadesStyles.btnCargarResultados} onClick={()=>{cargarNoticias()}}>CARGAR MÁS RESULTADOS</button>
            : ""}
        </section>
    );
}
 
export default Novedades;


//Fetch novedades

export async function getStaticProps(){

    const res = await fetch(`${process.env.SERVER_IP}/novedades?_sort=created_at:DESC`, {
      headers: {
        'Authorization': process.env.API_AUTH
      },
    })
    
    const novedades = await res.json()
  
    //Cambiar formato de la fecha de creacion de la novedad
    const regexFormato = /(202\d)-(\d\d)-(\d\d)/
    const regexFechaHora = /T\d\d:\d\d:\d\d.\d\d\d\w/
  
    novedades.map((novedad) =>{
      novedad.created_at = novedad.created_at.replace(regexFormato, '$3/$2/$1')
      novedad.created_at = novedad.created_at.replace(regexFechaHora, '')
    })
  
    //Arreglar ruta de la portada 
    const regexSrc = /^\/uploads/g
  
    novedades.map((novedad)=>{
      novedad.portada.url = novedad.portada.url.replace(regexSrc, `${process.env.SERVER_IP}/uploads`)
    })
    
    return{
      props: { novedades },
      revalidate: 120,
    }
  }