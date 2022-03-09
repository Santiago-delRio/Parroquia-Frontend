import Image from 'next/image'
import headerStyles from "./header.module.scss"

const HeaderImagen = ({ titulo, imagen, alt }) => {
    return (
        <>
            <header className={headerStyles.header}>
                <Image src={imagen} alt={alt} layout={'fill'} objectFit='cover' quality="85" priority="true"/>
                <div className={headerStyles.filtro}></div>
                <h1>{titulo}</h1>
            </header>
        </>
    );
}
 
export default HeaderImagen;