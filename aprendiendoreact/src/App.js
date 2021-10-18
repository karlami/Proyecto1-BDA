import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import LogInAdmin from "./components/LoginAdmin";
import SignIn from "./components/SignIn";
import User from "./components/User";
import UserEdit from './components/UserEdit';
import Admin from './components/Admin';
import Consul1 from './components/Consul1';
import Consul2 from './components/Consul2';
import Consul3 from './components/Consul3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/user" component={User} />
              <Route exact path="/user/edit" component={UserEdit} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/loginAdmin" component={LogInAdmin} />
              <Route exact path="/admin/consul1" component={Consul1} />
              <Route exact path="/admin/consul2" component={Consul2} />
              <Route exact path="/admin/consul3" component={Consul3} />
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
