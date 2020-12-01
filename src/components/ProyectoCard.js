import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProyectoCard = ({ image, name, url }) => {

    const proyectoCardVariante = {
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

        <AnimatePresence exitBeforeEnter>
            <motion.div className="col-sm-12 col-md-6 col-lg-4 mt-2"
                variants={proyectoCardVariante}
                initial='initial'
                animate='visible'
                exit='exit'>
                <figure className="proyecto_wrapper">
                    <a href={url}>
                        <img src={image} alt="ImagenProyecto" className='proyecto_image' />
                    </a>
                    <div className="proyecto_name mt-2">{name}</div>
                </figure>
            </motion.div>
        </AnimatePresence>

    )
}
export default ProyectoCard