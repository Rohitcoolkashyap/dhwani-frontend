import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
