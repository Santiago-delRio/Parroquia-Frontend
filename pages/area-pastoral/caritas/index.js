import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import headerImg from "../../../assets/imagenes/sacramentos/comunion/header.jpg"
import caritasStyles from "./caritas.module.scss"

const Caritas = ({ nombre }) => {

    useEffect(()=>{
        console.log(nombre)
    },[])

    return (
        <main className={caritasStyles.caritas}>
            <Head>
                <title>Cáritas - Parroquia Santa Juana de Arco</title>
            </Head>
            <h1>Caritas</h1>
            <h2>{nombre.nombre}</h2>
            
        </main>
    );
}
 
export default Caritas;


export async function getStaticProps(){

    const res = await fetch(`${process.env.SERVER_IP}/hola`)

    const nombre = await res.json()
  
    return{
        props: { nombre },
        revalidate: 120,
    }
}