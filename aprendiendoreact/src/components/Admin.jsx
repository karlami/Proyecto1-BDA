import React from "react";
import './css/Admin.css';
//import TitlesList from "./TitlesList.jsx";
//import TI from "./TI";
//import IdiomaList from "./IdiomaList";
import eCorp from "./images/Ecorp.png"

class Admin extends React.Component{

    render(){

        return(
            <div>
                <div className="AdminBack">
                    <div>
                        <button className="ButtUserSalir" onClick={() => this.props.history.push("/home")}>SALIR</button>
                    </div>
                </div>
                <div className="Admin">
                    <img src={eCorp} height={160} width={160} />
                    <button className="ButtAdmin" onClick={() => this.props.history.push("/admin/consul1")}>
                        Personas del área de TI
                    </button>
                    <button className="ButtAdmin" onClick={() => this.props.history.push("/admin/consul2")}>
                        Personas que hablan inglés avanzado
                    </button>
                    <button className="ButtAdmin" onClick={() => this.props.history.push("/admin/consul3")}>
                        Personas que no son del área de TI
                    </button>
                </div>
            </div>

        );
    }
}

export default Admin;