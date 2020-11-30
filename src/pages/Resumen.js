import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/Card'
import html from '../components/assets/html.svg'
import css from '../components/assets/css.svg'
import js from '../components/assets/js.svg'
import php from '../components/assets/php.svg'
import sql from '../components/assets/sql.png'
import android from '../components/assets/android.png'
import reactLogo from '../components/assets/reactlogo.png'

function Resumen() {
    const resumenVariantes = {
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
            variants={resumenVariantes}
            initial='initial'
            animate='visible'
            exit='exit'

        >
            <div className='description'>
                Hola, Soy Desarrollador de aplicaciones y páginas web, he 
                desarrollado y colaborado con la industria tech desde hace 
                más de 2 años. Lo que más me gusta de la programación es dar 
                soluciones efectivas a problemas que aparentemente son complicados.
            </div>
            <div className="data_section">
                <div className="container">
                    <p className='sub_heading'>
                        What I offer
                        </p>
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={html} title="HTML5" body={["Excelentes conocimientos en el uso de esta Tecnología  -  ", <strong>90%</strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={css} title="CSS3" body={["Buenos conocimientos en el uso de esta Tecnología  -  ", <strong>90%</strong>," Bootstrap-Bulma-Stylus-Sass "]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={php} title="PHP" body={["Buenos conocimientos en el uso de esta Tecnología  -  ", <strong>85%</strong>," PDO - Class - Hexagonal Architecture"]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={js} title="Javascript" body={["Dominio del Lenguaje y en constante aprendizaje ", <strong>80%</strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={sql} title="SQL" body={["Buenas manejo en el uso bases de datos SQL y NoSQL ", <strong>80%</strong>, ", así como la comunicación de data en formatos de archivos JSON ", <strong>85%</strong>]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={android} title="Java Android SDK" body={["Conocimientos a nivel Medio de programación para dispositivos Android ", <strong>65%</strong>," Notificaciones Push, WebServices, Navigation Drawer"]} />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card icon={reactLogo} title="React JS" body={["En proceso de aprendizaje para usar la libreria con un buen nivel ", <strong>60%</strong>]} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resumen
