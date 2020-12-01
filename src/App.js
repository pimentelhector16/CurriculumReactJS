import './App.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Acerca from './pages/Acerca'
import Resumen from './pages/Resumen'
import Proyectos from './pages/Proyectos'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <Router>
      <div className="container mb-2">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <div className="app__sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="col-sm-12 col-lg-9 app__main-content mainarea_custom">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path='/resumen'>
                  <Resumen />
                </Route>
                <Route path='/proyectos'>
                  <Proyectos />
                </Route>
                <Route path='/' exact component={Acerca} />
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
