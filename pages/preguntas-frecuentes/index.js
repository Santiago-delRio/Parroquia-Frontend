import Head from 'next/head'
import preguntasStyles from "./preguntas.module.scss"
import headerImg from "../../assets/imagenes/inicio/iglesiaFuera.jpeg"
import HeaderImagen from '../../components/HeaderImagen'

const PreguntasFrecuentes = () => {
    return (
        <section className={preguntasStyles.preguntasContainer}>

            <Head>
                <title>Preguntas frecuentes - Parroquia Santa Juana de Arco</title>
            </Head>

            {/* Header */}
            <HeaderImagen titulo="PREGUNTAS FRECUENTES" imagen={headerImg} alt="Imagen del exterior de la iglesia"/>

            {/* Preguntas */}
            <section className={preguntasStyles.preguntas}>
                {/* Pregunta #1 */}
                <h3>¿Cuáles son los horarios de misa?</h3>
                <ul>
                    <li>Lunes a sábados 19hs</li>
                    <li>Domingos 10, 11.30 y 19hs</li>
                </ul>
                {/* Pregunta #2 */}
                <h3>¿Cómo hago para confesarme?</h3>
                <p>Se puede acercar antes o después de cada celebración y acordar con el sacerdote, sea fin de semana o días de semana. También contactarse con secretaría y acordar cita.</p>
                {/* Pregunta #3 */}
                <h3>¿Cómo hago para recibir la Unción de los enfermos?</h3>
                <p>Solo es necesario acercarse a la parroquia más cercana al enfermo/a que lo necesite</p>
                {/* Pregunta #4 */}
                <h3>¿Cómo hago para recibir la Comunión en mi casa?</h3>
                <p>Acercándose o llamando a la parroquia más cercana al enfermo/a que lo necesite. Luego enviarán un ministro de la Comunión que lo visitará frecuentemente.</p>
                {/* Pregunta #5 */}
                <h3>¿Cómo hago para recibir un responso?</h3>
                <p>Un responso es una oración por los difuntos. Puede realizarse en la casa velatoria, o en el templo en contexto de algún aniversario u ocasión que se pueda reunir la familia. <br /> Para solicitarlo, acercarse a la parroquia más cercana a la casa velatoria, y coordinar con un ministro que realice la celebración.</p>
                {/* Pregunta #6 */}
                <h3>¿Qué puedo hacer para que se rece por mis intenciones en una misa?</h3>
                <p>En cada celebración se reza de manera general y comunitaria por las intenciones de todos los presentes. Con tu presencia y participación llevando esa intención es suficiente. Si desea que alguna intención de manera especial sea mencionada, debe anotarla previamente en la secretaría parroquial.  </p>
                {/* Pregunta #7 */}
                <h3>¿En qué horarios está abierto el templo?</h3>
                <p>El templo parroquial está abierto por las mañanas de 9 a 13hs y las tardes antes de misa, de 18 hasta 20hs. </p>
            </section>
        </section>
    );
}
 
export default PreguntasFrecuentes;