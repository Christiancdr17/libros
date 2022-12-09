import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
import "./Contacto.css"
import Layout from '../components/Layout';


function ContactForm() {
  const [state, handleSubmit] = useForm("mlevqpar");
  if (state.succeeded) {
        return <h3><p>Muchas Gracias por contactarte con nosotros </p></h3>;
                
        
    }
    return (
        <Layout >
            <form onSubmit={handleSubmit} className='formularioConsulta'>
                <label htmlFor="email" >
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='ingresa tu correo '
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="nombre" >
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder='ingresa tu nombre  '
                />
                <ValidationError
                    prefix="Text"
                    field="nombre"
                    errors={state.errors}
                />
                <label htmlFor="Apellido" >
                    Apellido:
                </label>
                <input
                    id="Apellido"
                    type="text"
                    name="Apellido"
                    placeholder=' Ingresa tu Apellido  '
                />
                <ValidationError
                    prefix="Text"
                    field="Apellido"
                    errors={state.errors}
                />
                <textarea
                    
                    id="message"
                    name="message"
                    placeholder=' Dejanos tu mensaje o consulta'
                    
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Enviar
                </button>
            </form>
            
        </Layout>
   
    )
    
}
<Link to="/create" className="linkStyle">
<button class="button-85" role="button">Iniciar Sesion</button>
</Link>
export default ContactForm;