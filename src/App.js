// import logo from './logo.svg';
import './App.css';

import TextForm from './component/TextForm';
import Navbarr from './component/Navbarr';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
<Navbarr/> 

    <Switch>
          <Route exact path="/">
          <TextForm
          
          
          
          title = "MyForm"/>
          </Route>
          
          
        </Switch>
    
    </Router>
    </>
  );
}

export default App;
