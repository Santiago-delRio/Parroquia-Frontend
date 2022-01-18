import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import headerImg from "../../../assets/imagenes/sacramentos/comunion/header.jpg"
import caritasStyles from "./caritas.module.scss"

const Caritas = () => {
    return (
        <main className={caritasStyles.caritas}>
            <Head>
                <title>Cáritas - Parroquia Santa Juana de Arco</title>
            </Head>
            <h1>Caritas</h1>
        </main>
    );
}
 
export default Caritas;