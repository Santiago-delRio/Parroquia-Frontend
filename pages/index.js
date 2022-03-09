import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
//imagenes
import fondo from "../assets/imagenes/inicio/fondo.svg"
import imagenHero from "../assets/imagenes/inicio/Estatua.jpeg"
import imagenColecta from "../assets/imagenes/inicio/colecta.jpg"
import imagenCelebracion from "../assets/imagenes/inicio/iglesiaDentro.jpeg"
import imagenFrase from "../assets/imagenes/inicio/iglesiaFuera.jpeg"

import inicioStyles from "./inicio.module.scss"
import UltimasNovedades from "../components/UltimasNovedades"

const Home = ({ novedades }) => {

  return (

    <div className={inicioStyles.inicioContainer}>

      <Head>
        <title>Parroquia Santa Juana de Arco</title>
      </Head>

      {/* Hero */}
      <div className={inicioStyles.hero}>
        <Image className={inicioStyles.imagenFondo} src={fondo} alt="" layout={'fill'} objectFit='cover' quality="90" priority="true"/>
        <div className={inicioStyles.infoContainer}>
          <h1>PARROQUIA SANTA JUANA DE ARCO</h1>
          <div className={inicioStyles.imagenContainer}>
            <Image src={imagenHero} alt="Imagen de una estatua de juana de arco" layout={'fill'} objectFit='cover' quality="90" priority="true"/>
          </div>
          <div className={inicioStyles.info}>
            <h1>PARROQUIA SANTA JUANA DE ARCO</h1>
            <p>¡Bienvenidos a la comunidad! La parroquia no es el templo… es mucho más: el barrio, la gente, la vida de fe… Aquí podrás encontrar alguna información útil, en cuanto organización y actividades… y ante cualquier duda no dejes de contactarte con nosotros…</p>
            {/* boton ultimas novedades*/}
            <Link href="/novedades">   
                <a>Últimas novedades</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Frase de la biblia */}
      <div className={inicioStyles.fraseBiblia}>
        <h3>COLABORÁ CON LA PARROQUIA</h3>
        <p>“En todo os he enseñado que, trabajando así, se debe ayudar a los necesitados, <br /> y recordar las palabras del Señor Jesús, que dijo: Más bienaventurado es dar <br />  que recibir “</p>
      </div>

      {/* Colecta */}
      <section className={inicioStyles.colecta}>
        <div className={inicioStyles.imagenContainer}>
          <Image src={imagenColecta} alt="Imagen de una estatua de juana de arco" layout={'fill'} objectFit='cover' quality="90"/>
        </div>
        <div className={inicioStyles.info}>
          <h2>COLECTA</h2>
          <p>Podés aportar a la comunidad desde tu casa. La Iglesia somos todos, y tu ofrenda es necesaria para sostener la obra de la evangelización y la ayuda a los más necesitados.</p>
          <Link href="/">
              <a> DONAR AHORA </a>
          </Link>
        </div>
      </section>

      {/* Celebracion */}
      <section className={inicioStyles.celebracion}>
        <div className={inicioStyles.imagenContainer}>
          <Image src={imagenCelebracion} alt="Imagen de una estatua de juana de arco" layout={'fill'} objectFit='cover' quality="90"/>
        </div>
        <div className={inicioStyles.info}>
          <h2>CELEBRACIÓN</h2>
          <p>Cada una de las celebraciones (misas, bautismos, matrimonios, encuentros con la palabra, etc) son el alma de la vida de la comunidad. Hacemos muchas cosas, pero hay algo que nos une: Celebrar un misterio de Fe: a Jesús vivo entre nosotros</p>
          <Link href="/misas">
              <a>VER MÁS</a>
          </Link>
        </div>
      </section>

      {/* Frase de la biblia con imagen de fondo */}
      <section className={inicioStyles.fraseBibliaImagen}>
        <Image src={imagenFrase} alt="Imagen de una estatua de juana de arco" layout={'fill'} objectFit='cover' quality="90"/>
        <div className={inicioStyles.filtro}></div>
        <div className={inicioStyles.frase}>
          <h3>COLABORÁ CON LA PARROQUIA</h3>
          <p>“En todo os he enseñado que, trabajando así, se debe ayudar a los necesitados, <br /> y recordar las palabras del Señor Jesús, que dijo: Más bienaventurado es dar <br />  que recibir “</p>
        </div>
      </section>

      {/* Ultimas novedades */}
      <UltimasNovedades novedades={novedades.data}/>
    </div>
  );
}
 
export default Home;

export async function getStaticProps(){

  const resNovedades = await fetch(`${process.env.SERVER_IP}/api/novedades-parroquias?populate=portada&pagination[limit]=3&sort[0]=createdAt:desc`, {
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