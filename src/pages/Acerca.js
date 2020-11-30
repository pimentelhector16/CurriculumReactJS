import React from 'react'
import { motion } from 'framer-motion'

function Acerca() {

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
            <h2>Acerca</h2>
        </motion.div>
    )
}

export default Acerca
