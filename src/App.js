import './App.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Acerca from './pages/Acerca'
import Resumen from './pages/Resumen'
import Proyectos from './pages/Proyectos'

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="app__sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Acerca />
              </Route>
              <Route path="/resumen" >
                <Resumen />
              </Route>
              <Route path="/proyectos" component={Proyectos} />
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
