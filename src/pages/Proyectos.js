import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProyectoCard from '../components/ProyectoCard'
import ProyectosStore from '../components/ProyectosStore'

const Proyectos = () => {
    const [proyectos, setProyectos] = useState(ProyectosStore)
    const proyectosVariante = {
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
    const handleFilterCatagory = (name) => {
        const new_array = ProyectosStore.filter((proyecto, i) => proyecto.catagory.includes(name))
        setProyectos(new_array)
    }
    return (
        <motion.div className='container proyectos_section'
            variants={proyectosVariante}
            initial='initial'
            animate='visible'
            exit='exit'

        >
            <div className="proyecto_section_header ">
                <button type="button" class="btn btn-light" onClick={() => setProyectos(ProyectosStore)}>Todos</button>
                <button type="button" class="btn btn-light" onClick={() => handleFilterCatagory('sitiosweb')}>Sitios Web</button>
                <button type="button" class="btn btn-light" onClick={() => handleFilterCatagory('sistema')}>Sistemas</button>
                <button type="button" class="btn btn-light" onClick={() => handleFilterCatagory('aplicaciones_android')}>Android</button>
                <button type="button" class="btn btn-light" onClick={() => handleFilterCatagory('react')}>React js</button>
            </div>
            <div className="row">
                {proyectos.map((proyecto, i) =>
                    <ProyectoCard key={i} image={proyecto.image} name={proyecto.name} url={proyecto.url} />
                )}
            </div>
        </motion.div>
    )
}

export default Proyectos
