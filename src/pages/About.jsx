import ereader from "./img/kobo-aura-h2o-4.png"
import "./About.css"


export default function About() {
        return(
        <>
        <section className="vista">
        <div className="rotulo-i">
        <h1 className="parrafo">Biblio Web</h1>

        <p className="parrafo p__text">Bienvenido a BiblioWeb la pagina de almacenamiento de libros Epub.</p>
        <p className="parrafo p__text" > En esta pagina encontraras y podras almacenar todos tus libros, realizados en formato EPUB, tambien encontraras todo las referencias para el uso del editor SIGIL para crear todos tus libros de forma profecional. Tanto para Kindle o KOBO Aura.</p>
        <p className="parrafo p__text">Mi nombre es Christian </p>
        </div>
        <div className="rotulo-d">
        <img className="img" src={ereader} alt="Libro electronico" />
        
        </div>
        </section>
        </>
    )
}