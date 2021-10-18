import React from "react";
import './css/User.css';
import UserTitlesList from "./UserTitlesList.jsx";
import UserIdiomList from "./UserIdiomList.jsx";
//import TI from "./TI";
//import IdiomaList from "./IdiomaList";
import userIco from "./images/userIcon.png"
//import UserData from './dataPrueba/usuario.json';

class User extends React.Component{

    constructor(props){

        const valores = JSON.parse(localStorage.getItem('UserInfo'));
        //const tokenParseado =  JSON.parse(valores);
        console.log("UserEdit "+JSON.stringify(valores));
        console.log(typeof valores[0].correo)

        //this.setState(valores);

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

        console.log("UserEdit "+this.state.correo);
    }


    render(){

        return(
            <div>
                <div className="UserBack">
                    <div>
                        <button className="ButtUserSalir" onClick={() => this.props.history.push("/home")}>SALIR</button>
                    </div>
                </div>
                <div className="User">
                    <img src={userIco} height={160} width={160} />
                    <section  className="Current-user">
                        <label htmlFor="current-user">
                            Correo electrónico: 
                        </label>{' '}
                        <input id="current-user" value={this.state.correo} disabled={true}/>
                    </section>
                    <section  className="Current-name"> 
                        <label htmlFor="current-name">
                            Nombre: 
                        </label>{' '}
                        <input id="current-name" value={this.state.nombre} disabled={true}/>
                    </section>
                    <section className="Current-country" >
                        <label htmlFor="current-country">
                            País:
                        </label>{' '}
                        <input id="current-country" value={this.state.pais} disabled={true}/>
                    </section>
                    <section className="Current-titles" >
                        <label>
                            Títulos:
                        </label>
                        <div className='title-form'>
                            <UserTitlesList userTitulos={this.state.titulos}/>
                        </div>
                    </section>
                    <section className="Current-lenguajes" >
                        <label htmlFor="current-lenguajes">
                            Lenguajes de programación:
                        </label>{' '}
                        <div className='title-form'>
                            <UserTitlesList userTitulos={this.state.lenguajes}/>
                        </div>
                    </section>
                    <section className="Current-idiomas" >
                        <label htmlFor="current-idiomas">
                            Idiomas:
                        </label>{' '}
                        <div className='title-form'>
                            <UserIdiomList userIdiomas={this.state.idiomas}/>
                        </div>
                    </section>
                    <button className="ButtUserEdit" onClick={() => this.props.history.push("/user/edit")}>
                        Editar Información
                    </button>
                </div>
                
            </div>

        );
    }
}

export default User;