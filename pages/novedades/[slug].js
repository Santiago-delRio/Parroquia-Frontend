import Image from 'next/image'
import Head from 'next/head'
import parse from 'html-react-parser';
import { useEffect } from "react/cjs/react.development";
import novedadStyles from "./novedad.module.scss"
import Novedades from "../../components/UltimasNovedades"

const Novedad = ({ novedad, novedades }) => {

    useEffect(()=>{
        console.log(novedad)
    },[])

    return (
        <>
            <Head>
                <title>{novedad.titulo} - Parroquia Santa Juana de Arco</title>
            </Head>
            {/* Novedad */}
            <section className={novedadStyles.novedad}>
                {/* Header */}
                <header>
                    <span>{novedad.created_at}</span>
                    <h1>{novedad.titulo}</h1>
                </header>
                {/* Portada */}
                <div className={novedadStyles.containerPortada}>
                    <Image src={novedad.portada.url} alt="Portada novedad" layout={'fill'} objectFit={'cover'} quality="90"/>
                </div>
                {/* Contenido novedad */}
                <div className={novedadStyles.contenido}>
                    {parse(novedad.content, {
                        replace: domNode =>{
                            if(domNode.type === 'tag' && domNode.name === 'img'){
                                return <div className={novedadStyles.contenidoImagen}> <Image src={[`${process.env.NEXT_PUBLIC_SERVER_IP}`,domNode.attribs.src].join("")} alt="" layout={'fill'} objectFit={'cover'} quality="90"/> </div>
                            }
                        }
                    })} 
                </div>
            </section>
            {/* Novedades */}
            <Novedades novedades={novedades} repetida={novedad.id}/>
        </>
    );
}
 
export default Novedad;

export async function getStaticPaths(){

    const res = await fetch(`${process.env.SERVER_IP}/novedades?_sort=created_at:DESC`, {
        headers: {
            'Authorization': process.env.API_AUTH
        },
    })
      

    const novedades = await res.json()

    const paths = novedades.map((novedad)=>({
        params: {slug: novedad.slug}
    }))

    return{
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}){

    const {slug} = params;

    try{

        //Informacion de la novedad
        const res = await fetch(`${process.env.SERVER_IP}/novedades?slug=${slug}`, {
            headers: {
              'Authorization': process.env.API_AUTH
            },
          })

        const data = await res.json()
        const novedad = data[0];

        const resNovedades = await fetch(`${process.env.SERVER_IP}/novedades?id_ne=${novedad.id}&_limit=3&_sort=created_at:DESC`, {
            headers: {
                'Authorization': process.env.API_AUTH
            },
        })

        const novedades = await resNovedades.json()

        //Cambiar formato de la fecha
        const regexFormato = /(202\d)-(\d\d)-(\d\d)/
        const regexFechaHora = /T\d\d:\d\d:\d\d.\d\d\d\w/

        //--Fecha novedad 
        novedad.created_at = novedad.created_at.replace(regexFormato, '$3/$2/$1')
        novedad.created_at = novedad.created_at.replace(regexFechaHora, '')
        //--Fecha novedades 
        novedades.map((novedad) =>{
            novedad.created_at = novedad.created_at.replace(regexFormato, '$3/$2/$1')
            novedad.created_at = novedad.created_at.replace(regexFechaHora, '')
        })


        //Arreglar ruta de las portadas 
        const regexSrc = /^\/uploads/g

        novedad.portada.url = novedad.portada.url.replace(regexSrc, `${process.env.SERVER_IP}/uploads`)

        novedades.map((novedad)=>{
            novedad.portada.url = novedad.portada.url.replace(regexSrc, `${process.env.SERVER_IP}/uploads`)
        })

        return{
            props: { novedad, novedades },
            revalidate: 120,
        }

    }catch(error){
        return{
            notFound: true
        }
    }

}