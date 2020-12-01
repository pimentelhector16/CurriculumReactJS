import React from 'react'
import { motion } from 'framer-motion'

import { skill_language_store, skill_tool_store } from '../components/SkillStore'

const SkillWrapper = ({ key, name, level, icon }) => {
    var className = 'skill'

    if (level === 'malo')
        className = `${className} skill_malo`
    if (level === 'medio')
        className = `${className} skill_medio`
    else if (level === 'bueno')
        className = `${className} skill_bueno`
    else if (level === 'excelente')
        className = `${className} skill_excelente`
    if (!icon) {
        icon = ''
    }

    return (
        <div key={key} className="skill_wrapper">
            <div className={className}>
                <span className="skill_name"><img src={icon} alt="Logo" className='icon_tiny mr-2' />   {name}</span>
                <span className='skill_level'></span>
            </div>
        </div>
    )
}

const Resumen = () => {
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
        <motion.div className='container resume_section'
            variants={resumenVariantes}
            initial='initial'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="col-12 col-lg-6 resume_card">
                    <div className="resume_card_body">
                        <div className='resume_card_title'><h5>Técnico Superior Universitario en Informática</h5></div>
                        <div className='resume_card_year'>Instituto Universitario de Tecnología “Antonio José de Sucre”(2008-2011)</div>
                        <p className='resume_card_description'>
                            Realice mi proyecto final haciendo un sistema de gestión de pasantías 
                            para el instituto en cuestión, Permitía llevar un control de horarios, 
                            calificaciones, observaciones y generar reportes en pdf de los procesos activos.
                            <p>Valoración del proyecto : <strong>20 Puntos - Mención Publicación</strong> </p>
                        </p>
                        <p className='resume_card_description'>
                            Mis pasantías fueron en la Unidad Administradora Desconcentrada de la Universidad de los Andes, desarrollando un sistema de 
                            licitaciones el cual realizaba todo tipo de funciones necesarias para realizar los cálculos necesarios para las competencias
                            entre las empresas que ofertaban sus productos a la Universidad.
                            <p>Valoración del proyecto : <strong>20 Puntos - Mención Honorífica</strong> </p>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 resume_card">
                    <div className="resume_card_body">
                        <div className='resume_card_title'><h5>Bachiller en Ciencias</h5></div>
                        <div className='resume_card_year'>Liceo Bolivariano “Dr. Miguel Otero Silva”(2003-2008)</div>
                        <br /> 
                        <div className='resume_card_title'><h5>Educación Básica</h5></div>
                        <div className='resume_card_year'>Unidad Educativa Escuela Bolivariana "La Mucuy Baja"</div>
                        <p className='resume_card_description'>
                        Dato: Mis trabajos de Labor Social durante mis estudios universitarios fueron realizados 
                        en esta institución, llevando a cabo un proyecto de gestión y control del mismo. Permitía realizar 
                        inscripciones de alumnos, manejar profesores, horarios y demás funciones que fueron requeridas por 
                        la institución.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 skill_div">
                    <div className="sub_heading">
                        Lenguajes y Framework
                    </div>
                    <div className="resume_card_body">
                        {skill_language_store.map((skill, i) => <SkillWrapper key={i} name={skill.name} level={skill.level} icon={skill.logo} />)}
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="sub_heading">
                        Herramientas y Software
                    </div>
                    <div className="resume_card_body">
                        {skill_tool_store.map((skill, i) => <SkillWrapper key={i} name={skill.name} level={skill.level} icon={skill.logo} />)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resumen
