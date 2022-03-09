import contactoStyles from "./contacto.module.scss"
import headerImg from "../../assets/imagenes/iglesiaContacto.jpg"
import Head from 'next/head'
import { useRef } from "react"
import HeaderImagen from '../../components/HeaderImagen'

const Contacto = () => {

    //Datos del formulario
    const nombre = useRef()
    const email = useRef()
    const telefono = useRef()
    const mensaje = useRef()

    //Enviar el formulario
    const enviarFormulario = (e) =>{
        e.preventDefault()
        const data = {
            nombre: nombre.current.value,
            email: email.current.value,
            telefono: telefono.current.value,
            mensaje: mensaje.current.value
        }

        fetch('/api/contacto', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                alert("Mensaje enviado exitosamente")
                nombre.current.value = ""
                email.current.value = ""
                telefono.current.value = ""
                mensaje.current.value = ""
            }
        })
    }

    return (
        <section className={contactoStyles.contacto}>
            <Head>
                <title>Contacto - Parroquia Santa Juana de Arco</title>
            </Head>

            {/* Header */}
            <HeaderImagen titulo="CONTACTO" imagen={headerImg} alt="Imagen del exterior de la iglesia"/>

            {/* Info */}
            <section className={contactoStyles.info}>
                {/* Secretaria */}
                <div className={contactoStyles.secretaria}>
                    <h3>Secretaría parroquial</h3>
                    <ul>
                        <li>Martes a Viernes de 15hs a 19hs</li>
                        <li>Sábados de 9hs a 12hs</li>
                    </ul>
                    <p><span>Donde estamos:</span> Santa Juana de Arco 3945 - Ciudadela, Buenos Aires, Argentina</p>
                    <p><span>WhatsApp:</span> +54 9 11 3583 6778</p>
                </div>
                {/* Redes */}
                <section className={contactoStyles.redes}>
                    <h3>Nuestras redes</h3>
                    <div className={contactoStyles.links}>
                        {/* ==== WhatsApp ==== */}
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                            +54 9 11 3583 6778
                        </a>
                        
                        {/* Facebook */}
                        <a href="https://www.facebook.com/Parroquia-Santa-Juana-de-Arco-775260059276732/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></svg>
                            Parroquia Santa Juana de Arco
                        </a>
                        
                        {/* Instagram */}
                        <a href="https://www.instagram.com/parroquiasantajuanadearco/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                            parroquiasanta <br/> juanadearco
                        </a>
                        
                        {/* Youtube */}
                        <a href="https://www.youtube.com/channel/UC1frpX6KMcO-DkQD-S8Ysiw" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                            Parroquia Santa Juana de Arco - Ciudadela
                        </a>
                    </div>
                </section>
                {/* Formulario */}
                <form action="" onSubmit={(e)=>{enviarFormulario(e)}}>
                    <h3>Envianos tu consulta a través del siguiente formulario:</h3>
                    <label htmlFor="nombre">Nombre y apellido (obligatorio) </label>
                    <input type="text" required ref={nombre}/>
                    <label htmlFor="email">Email (obligatorio)</label>
                    <input type="email" required ref={email}/>
                    <label htmlFor="telefono">Teléfono (obligatorio)</label>
                    <input type="tel" required ref={telefono}/>
                    <label htmlFor="mensaje">Mensaje (obligatorio)</label>
                    <textarea ref={mensaje} autoComplete="off" rows="1" onInput={()=>{
                        event.target.style.height="auto"
                        event.target.style.height=(event.target.scrollHeight) + "px";
                    }}></textarea>
                    <input type="submit" value="ENVIAR"/>
                </form>
            </section>
        </section>
    );
}
 
export default Contacto;