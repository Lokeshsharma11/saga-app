// import Dashboardd from './views/index';
import { Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from "history"
import Dashboard from "./views/screen";

function App() {
  const hist = createBrowserHistory();
  return (
    <div>
      <Router history={hist}>
      <Switch>
        <Route exect path="/" component={Dashboard}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
