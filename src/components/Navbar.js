import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {

  const [heading, setHeading] = useState('')

  useEffect(() => {
    // heading error on page referesh
    var header = localStorage.getItem('nav_header')
    header ? setHeading(header) : setHeading('Acerca')
  }, [setHeading])

  const handleSetHeading = (header) => {
    localStorage.setItem("nav_header", header)
    setHeading(header)
  }

  var navbarVariants = {
    initial: {
      y: '-30vh',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.3, type: 'spring' }
    }
  }
  return (
    <motion.div className="navbar"
      variants={navbarVariants}
      initial='initial'
      animate='visible'
    >
      <div className="nav_heading">{heading}</div>
      <div className="navItems">
        {heading !== 'Acerca' && <Link to='/' ><div className="acerca navItem" onClick={() => handleSetHeading('Acerca')}>Acerca</div></Link>}
        {heading !== 'Proyectos' && <Link to='/proyectos' > <div className="proyectos navItem" onClick={() => handleSetHeading('Proyectos')}>Proyectos</div></Link>}
        {heading !== 'Resumen' && <Link to='/resumen'  > <div className="resumen navItem" onClick={() => handleSetHeading('Resumen')}>Resumen</div></Link>}
      </div>
    </motion.div>
  );
};

export default Navbar;