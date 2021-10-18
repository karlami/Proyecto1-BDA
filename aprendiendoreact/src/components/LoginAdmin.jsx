import React from "react";
import './css/LogIn.css';

class LogInAdmin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            correo: "",
            clave: "",
            resp: []
        }

        this.updateCorreo = this.updateCorreo.bind(this);
        this.updateClave = this.updateClave.bind(this);
        this.DidMount = this.DidMount.bind(this);
    }

    updateCorreo(event){
        this.setState({correo : event.target.value})
    }

    updateClave(event){
        this.setState({clave : event.target.value})
    }

    async DidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo: this.state.correo, clave: this.state.clave })
        };
        const response = await fetch("http://localhost:3001/loginAdmin", requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
        if(JSON.stringify(data) == "[]"){
            console.log("Vacio "+JSON.stringify(data));
            alert("Usuario Invalido!");
        }else{
            this.props.history.push("/admin");
        }
    }

    render(){
        return(
            <div>
                <div className="LoginBack">
                    <div>
                        <button className="ButtLogB" onClick={() => this.props.history.push("/home")}>HOME</button>
                    </div>
                </div>
                <div className="LogIn">
                    <h2>E CORP ADMIN</h2>
                    <label htmlFor="log-user">
                        Ingrese su e-mail
                    </label>
                    <input className="Log-user" id="log-user" value={this.state.correo} onChange={this.updateCorreo}/>
                    <label htmlFor="log-password">
                        Ingrese su contraseña
                    </label>
                    <input className="Log-password" id="log-password" type="password" 
                    value={this.state.clave} onChange={this.updateClave}/>
                    <button className="ButtLogIn" onClick={this.DidMount}>
                        INGRESAR
                    </button>
                </div>
            </div>
        );
    }
}

export default LogInAdmin;