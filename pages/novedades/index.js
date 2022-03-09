import Head from 'next/head'
import novedadesStyles from "./novedades.module.scss"
import NovedadCard from "../../components/NovedadCard"
import { useState } from 'react'

const Novedades = ({ novedades }) => {

    const [novedadesMostradas, setNovedadesMostradas] = useState(6)

    //Cargar mas novedades
    const cargarMasResultados = () =>{
        const cantTotalNovedades = novedades.data.length
        let novedadesRestantes = cantTotalNovedades - novedadesMostradas;

        if(novedadesRestantes >= 6){
            setNovedadesMostradas((prevNovedadesMostradas) => prevNovedadesMostradas + 6)
        }else if(novedadesRestantes < 6 && novedadesRestantes > 0){
            setNovedadesMostradas((prevNovedadesMostradas) => prevNovedadesMostradas + novedadesRestantes)
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
            {novedades.data.slice(0,novedadesMostradas).map(novedad => (
                <NovedadCard key={novedad.id} novedad={novedad.attributes}/>
            ))} 
            </section>
            {/* Boton cargar más novedades*/}
            {(novedades.data.length != novedadesMostradas) ? 
                <button className={novedadesStyles.btnCargarResultados} onClick={()=>{cargarMasResultados()}}>CARGAR MÁS RESULTADOS</button>
            : ""}
        </section>
    );
}
 
export default Novedades;


export async function getStaticProps(){

    const resNovedades = await fetch(`${process.env.SERVER_IP}/api/novedades-parroquias?populate=portada&sort[0]=createdAt:desc`, {
        headers: {
        'Authorization': process.env.API_AUTH
        },
    })
  
    const novedades = await resNovedades.json()
  
    //Cambiar formato de la fecha de creacion de la novedad
    const regexFormatoFecha = /(202\d)-(\d\d)-(\d\d)/
    const regexSacarHoraFecha = /T\d\d:\d\d:\d\d.\d\d\d\w/
  
    novedades.data.map((novedad) =>{
      novedad.attributes.createdAt = novedad.attributes.createdAt.replace(regexFormatoFecha, '$3/$2/$1')
      novedad.attributes.createdAt = novedad.attributes.createdAt.replace(regexSacarHoraFecha, ' ')
    })
  
    return{
        props: { novedades },
        revalidate: 120,
    }
  }