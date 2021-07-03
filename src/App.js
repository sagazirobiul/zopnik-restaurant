import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/menu">
              <Menu/>
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
