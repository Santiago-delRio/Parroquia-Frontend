import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import fondo from "../assets/imagenes/inicio/fondo.svg"
import imagenHero from "../assets/imagenes/inicio/Estatua.jpeg"
import imagenColecta from "../assets/imagenes/inicio/colecta.jpg"
import imagenCelebracion from "../assets/imagenes/inicio/iglesiaDentro.jpeg"
import imagenFrase from "../assets/imagenes/inicio/iglesiaFuera.jpeg"
import inicioStyles from "./inicio.module.scss"
import Novedades from "../components/UltimasNovedades"

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
                <a>
                    <button>Últimas novedades</button>
                </a>
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
              <a>
                  <button>DONAR AHORA</button>
              </a>
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
              <a>
                  <button>VER MÁS</button>
              </a>
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
      <Novedades novedades={novedades}/>
    </div>
  );
}
 
export default Home;


//Fetch novedades

export async function getStaticProps(){

  const res = await fetch(`${process.env.SERVER_IP}/novedades?_limit=3&_sort=created_at:DESC`, {
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