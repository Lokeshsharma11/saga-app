import Dashboardd from './views/index';
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from "history"
import Login from './views/Login/login';

function App() {
  const hist = createBrowserHistory();
  return (
    <div>
      <Router history={hist}>
      <Switch>
        <Route path="/" component={Dashboardd}/>
        <Route path="/card" component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
