import flags from './assets/proyectos/flags.jpg'
import guate from './assets/proyectos/guate.png'
import merpre from './assets/proyectos/merpre.png'
import visol from './assets/proyectos/visol.png'
import premium_soft from './assets/proyectos/premium_soft.png'
import gestion from './assets/proyectos/gestion.png'

var ProyectosStore = [
    {
        name: 'Merpre',
        image: merpre,
        url: 'http://merpre.com/',
        catagory: ['sitiosweb', 'aplicaciones_android']

    },
    {
        name: 'Visol',
        image: visol,
        url: 'http://visol.com/',
        catagory: ['sitiosweb']
    },
    {
        name: 'Búscame en Guate',
        image: guate,
        url: 'http://buscameenguate.com/',
        catagory: ['sitiosweb', 'aplicaciones_android']
    },
    {
        name: 'Premium Soft International',
        image: premium_soft,
        url: '',
        catagory: ['sistema']
    },
    {
        name: 'Proyecto de Banderas',
        image: flags,
        url: 'https://github.com/pimentelhector16/flags-projects-react',
        catagory: ['react']
    },
    {
        name: 'Gestión Escolar',
        image: gestion,
        url: '',
        catagory: ['sistema']
    }
]
export default ProyectosStore
