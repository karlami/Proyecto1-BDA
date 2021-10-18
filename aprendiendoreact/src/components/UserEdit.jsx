import React from "react";
import './css/SignIn.css';
import './css/User.css'
import TitlesList from "./TitlesList.jsx";
import TI from "./TI";
import IdiomaList from "./IdiomaList";
//import UserData from './dataPrueba/usuario.json';

class UserEdit extends React.Component{

    constructor(props){

        const valores = JSON.parse(localStorage.getItem('UserInfo'));
        //const tokenParseado =  JSON.parse(valores);
        console.log("UserEdit "+JSON.stringify(valores));
        console.log(typeof valores[0].correo)

        super(props);
        this.state = {
            correo: valores[0].correo,
            nombre:  valores[0].nombre,
            pais:  valores[0].pais,
            titulos:  valores[0].titulos,
            tecInfo:  valores[0].tecInf,
            lenguajes:  valores[0].lenguajes,
            idiomas:  valores[0].idiomas
        }

        this.updateCorreo = this.updateCorreo.bind(this);
        this.updateNombre = this.updateNombre.bind(this);
        this.updatePais = this.updatePais.bind(this);
        this.updateTitulos = this.updateTitulos.bind(this);
        this.updateTI = this.updateTI.bind(this);
        this.updateIdiomas = this.updateIdiomas.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.DidMount = this.DidMount.bind(this);
    }

    updateCorreo(event){
        this.setState({correo : event.target.value})
    }

    updateNombre(event){
        this.setState({nombre : event.target.value})
    }

    updatePais(event){
        this.setState({pais : event.target.value})
    }

    updateTitulos(newtitulos){
        this.setState({titulos : newtitulos})
    }

    updateTI(estad,newlenguajes){
        this.setState({tecInfo: estad});
        this.setState({lenguajes : newlenguajes});
    }

    updateIdiomas(newidiomas){
        this.setState({idiomas : newidiomas})
    }

    onSubmit(){
        console.log("Your email is: " + this.state.correo + ", "
        + this.state.nombre + ", " + this.state.pais + ", "
        + this.state.titulos + ", " + this.state.tecInfo + ", "
        + this.state.lenguajes + ", " + this.state.idiomas)
    }

    async DidMount() {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo: this.state.correo , nombre: this.state.nombre 
            , pais: this.state.pais , titulos: this.state.titulos, tecInf: this.state.tecInfo
             , lenguajes: this.state.lenguajes, idiomas: this.state.idiomas})
        };
        const response = await fetch("http://localhost:3001/candidatos/"+this.state.correo, requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
        localStorage.setItem('UserInfo', JSON.stringify([{ correo: this.state.correo , nombre: this.state.nombre 
            , pais: this.state.pais , titulos: this.state.titulos, tecInf: this.state.tecInfo
             , lenguajes: this.state.lenguajes, idiomas: this.state.idiomas}]));
        this.props.history.push("/user");
    }

    // componentDidMount() {
    //     // Simple PUT request with a JSON body using fetch
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React PUT Request Example' })
    //     };
    //     fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
    //         .then(response => response.json())
    //         .then(data => this.setState({ postId: data.id }));
    // }

    render(){

        return(
            <div>
                <div className="UserBack">
                    <div>
                        <button className="ButtUserSalir" onClick={() => this.props.history.push("/home")}>SALIR</button>
                    </div>
                </div>
                <div className="SignIn">
                    <h2>E CORP</h2>
                    <section  className="New-user">
                        <label htmlFor="new-user">
                            Correo electrónico: 
                        </label>{' '}
                        <input id="new-user" value={this.state.correo} disabled={true}/>
                    </section>
                    <section  className="New-name"> 
                        <label htmlFor="new-name">
                            Nombre completo: 
                        </label>{' '}
                        <input id="new-name" value={this.state.nombre} disabled={true}/>
                    </section>
                    <section className="New-country" >
                        <label htmlFor="new-country">
                            País:
                        </label>{' '}
                        <input id="new-country" value={this.state.pais} onChange={this.updatePais}/>
                    </section>
                    <div className='title-form'>
                        <TitlesList lista={this.state.titulos} setTit={this.updateTitulos}/>
                    </div>
                    <div className='ti-form'>
                        <TI lista={this.state.lenguajes} estado={this.state.tecInfo} setTI={this.updateTI}/>
                    </div>
                    <div className='idioma-form'>
                        <IdiomaList lista={this.state.idiomas} setIdiom={this.updateIdiomas}/>
                    </div>
                    <div>
                        <button className="ButtSignIn" onClick={this.DidMount}>
                            GUARDAR
                        </button>{" "}
                        <button className="ButtSignIn" onClick={() => this.props.history.push("/user")}>
                            CANCELAR
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserEdit;