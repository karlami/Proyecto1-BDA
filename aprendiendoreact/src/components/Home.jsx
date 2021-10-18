import React from "react";
import logoE from "./images/Ecorp.png";
//import Flux from "react-flux-dash";
//import { Link } from "react-router";

class Home extends React.Component {
  render() {
    return (
        <div className="App">
          <div className="Home-buttons">
              <div>
                  <button className="ButtLog" onClick={() => this.props.history.push("/login")}>LOGIN</button>
              </div>
              <div>
                  <button className="ButtSign" onClick={() => this.props.history.push("/signin")}>SIGNIN</button>
              </div>
          </div>
          <header className="App-header">
            <img src={logoE} height={200} width={200} />
            <h1>
              Bienvenido a la aplicación de reclutamiento de E Corp
            </h1>
            <h3 className="App-subheader">
              Para registrarse presiona el boton SIGNIN o inicia sesión con LOGIN
            </h3>
            <button className="ButtAdministrar" onClick={() => this.props.history.push("/loginAdmin")}>Administrar</button>
          </header>
        </div>
    );
  }
}

export default Home;