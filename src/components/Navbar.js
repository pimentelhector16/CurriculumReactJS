import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState('')

  useEffect(() => {
    let currentURL = window.location.href
    console.log(currentURL);
    if (currentURL.endsWith('/'))
      setActive('Acerca');
    else if (currentURL.endsWith('/proyectos'))
      setActive('Proyectos')
    else if (currentURL.endsWith('/resumen'))
      setActive('Resumen')

  }, [active])
  return (
    <div className="navbar">
      <div className="navbar__active">
        {active}
      </div>
      <div className="navbar__items">
        {active !== 'Acerca' &&
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive('Acerca')}>Acerca</div>
          </Link>
        }
        {active !== 'Resumen' ?
          <Link to="/resumen">
            <div className="navbar__item" onClick={() => setActive('Resumen')}>Resumen</div>
          </Link> : null
        }

        {active !== 'Proyectos' &&
          <Link to="/proyectos">
            <div className="navbar__item" onClick={() => setActive('Proyectos')}>Proyectos</div>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;