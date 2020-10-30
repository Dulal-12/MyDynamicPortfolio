import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Head from './components/Head';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';



function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/"><Head></Head></Route>
       <Route path="/blog"><Blog></Blog></Route>
       <Route path="/contact"><Contact></Contact></Route>
       <Route path="/project"><ProjectDetail></ProjectDetail></Route>
      
     </Switch>
    </Router>
  );
}

export default App;
