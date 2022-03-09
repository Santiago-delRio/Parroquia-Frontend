import Image from 'next/image'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import novedadStyles from "./novedad.module.scss"
import UltimasNovedades from "../../components/UltimasNovedades"

const Novedad = ({ novedad, novedades }) => {

    return (
        <>
            <Head>
                <title>{novedad.titulo} - Parroquia Santa Juana de Arco</title>
            </Head>
            {/* Novedad */}
            <section className={novedadStyles.novedad}>
                {/* Header */}
                <header>
                    <span>{novedad.createdAt}</span>
                    <h1>{novedad.titulo}</h1>
                </header>
                {/* Portada */}
                <div className={novedadStyles.containerPortada}>
                    <Image src={novedad.portada.data.attributes.url} alt="Portada novedad" layout={'fill'} objectFit={'cover'} quality="85" priority="true"/>
                </div>
                {/* Contenido novedad */}
                <div className={novedadStyles.contenido}>
                <ReactMarkdown 
                    linkTarget={'_blank'}
                    components={{
                        img: ({node, ...props}) => <div className={novedadStyles.imagen}> <Image src={props.src} alt="Imagen de la novedad" layout={'fill'} objectFit={'cover'} quality="85" /> </div>,
                        a: ({ node, children, ...props}) => {
                            const linkProps = props;
                            if (props.target === '_blank') {
                                linkProps['rel'] = 'noopener noreferrer';
                            }
                            return <a {...linkProps}>{children}</a>
                        }
                    }}
                >
                    {novedad.contenido}
                </ReactMarkdown>
                </div>
            </section>
            {/* Novedades */}
            <UltimasNovedades novedades={novedades.data}/>
        </>
    );
}
 
export default Novedad;

export async function getStaticPaths(){
    
    const res = await fetch(`${process.env.SERVER_IP}/api/novedades-parroquias`, {
        headers: {
        'Authorization': process.env.API_AUTH
        },
    })

    const novedades = await res.json()

    const paths = novedades.data.map((novedad)=>({
        params: {slug: novedad.attributes.slug}
    }))

    return{
        paths,
        fallback: 'blocking'
    }
}


export async function getStaticProps({params}){

    const {slug} = params;

    try{

        //Fetch novedad
        const res = await fetch(`${process.env.SERVER_IP}/api/novedades-parroquias?filters[slug][$eq]=${slug}&populate=portada`, {
            headers: {
            'Authorization': process.env.API_AUTH
            },
        })

        //Fetch otras novedads
        const resNovedades = await fetch(`${process.env.SERVER_IP}/api/novedades-parroquias?populate=portada&filters[slug][$ne]=${slug}&pagination[limit]=3&sort[0]=createdAt:desc`, {
            headers: {
            'Authorization': process.env.API_AUTH
            },
        })
        
        //Info novedad
        const data = await res.json()
        let novedad = data.data[0].attributes

        //Otras novedades
        const novedades = await resNovedades.json()
    
        //Cambiar formato de la fecha de creacion de la novedad
        const regexFormatoFecha = /(202\d)-(\d\d)-(\d\d)/
        const regexSacarHoraFecha = /T\d\d:\d\d:\d\d.\d\d\d\w/

        //Novedad principal
        novedad.createdAt = novedad.createdAt.replace(regexFormatoFecha, '$3/$2/$1')
        novedad.createdAt = novedad.createdAt.replace(regexSacarHoraFecha, ' ')

        //Ultimas novedades
        novedades.data.map((novedad) =>{
            novedad.attributes.createdAt = novedad.attributes.createdAt.replace(regexFormatoFecha, '$3/$2/$1')
            novedad.attributes.createdAt = novedad.attributes.createdAt.replace(regexSacarHoraFecha, ' ')
        })

        return{
            props: { novedad, novedades},
            revalidate: 120,
        }

    }catch(error){
        return{
            notFound: true
        }
    }

}