import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import codigo from '../components/assets/codigo.png'

const Acerca = () => {
    const acercaVariantes = {
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.7
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className='content_section'
            variants={acercaVariantes}
            initial='initial'
            animate='visible'
            exit='exit'

        >
            <div className='description'>
                Hola, Bienvenido a mi curriculum digital, Soy <strong>Desarrollador de páginas web 
                y sistemas automatizados</strong>  usando tecnologias web, he trabajado y colaborado 
                con la industria tech desde hace más de 2 años. Lo que más me gusta de la programación 
                es dar soluciones efectivas a problemas que aparentemente son complicados.
            </div>
            <div className="data_section">
                <div className="container">
                    <p className="sub_heading">
                        Lo que ofrezco
                        </p>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={codigo} title="Sitios Web" body={["Puedo construir una Página web funcional y escalable usando ", <strong>HTML - CSS3 - JAVASCRIPT - PHP - SQL - REACT JS</strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={codigo} title="Responsive Design" body={["Capaz adaptarme a un diseño moderno en ", <strong> Photoshop - Figma </strong>, " y luego hacer el trabajo de maquetado con la tecnología requerida.", <strong> Adaptable </strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={codigo} title="Sistemas Web" body={["Desarrollar sistemas completos que manejan bases de datos de clientes, productos y ventas, ", <strong>Adaptable</strong> ," a las necesidades del cliente. Sistemas 100% autogestionables desde un panel"]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={codigo} title="API a Medida" body={["Crear soluciones efectivas a problemas de automatizacion en empresas que lleva a cabo sus procesos internos de manera manual, mejorando de esta forma el funcionamiento de la empresa"]} />
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Acerca
