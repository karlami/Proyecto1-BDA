import React from "react";
import './css/SignIn.css';
import TitlesList from "./TitlesList.jsx";
import TI from "./TI";
import IdiomaList from "./IdiomaList";

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            correo: "",
            clave: "",
            nombre: "",
            pais: "",
            titulos: [],
            tecInfo: false,
            lenguajes: [],
            idiomas: []
        }

        this.updateCorreo = this.updateCorreo.bind(this);
        this.updateClave = this.updateClave.bind(this);
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

    updateClave(event){
        this.setState({clave : event.target.value})
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

    // DidMount() {
    //     // Simple POST request with a JSON body using fetch
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         // body: { correo: this.state.correo , nombre: this.state.nombre 
    //         //     , pais: this.state.pais , titulos: [
    //         // this.state.titulos], tecInf: this.state.tecInfo , lenguajes: [ this.state.lenguajes ],
    //         // diomas: [this.state.idiomas]}
    //         body: {correo:"pruebaaaa",clave:"12345",nombre:"Carlos",pais:"prueba",titulos:["pruebaaa","I.Electronica"],tecInf:1,lenguajes:"Python",idiomas:["Ingles Avanzado","Frances"]}
    //     };
    //     fetch("http://localhost:3001/candidatos/nuevo", requestOptions)
    //         .then(response => response.json());
    //         //.then(data => this.setState({ postId: data.id }));
    // }

    async DidMount() {
        // POST request using fetch with async/await
        console.log("Clave: "+this.clave);
        let contra = this.state.clave;
        let user = this.state.correo;
        let name = this.state.nombre;
        let pais = this.state.pais;

        // if (firstName === ''){
        //     errors.push('firstName')
        // }
        if(contra !== '' && user !== '' && name !== '' && pais !== ''){//-----------------------------------------
            //------------------------------
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: this.state.correo })
            };
            const response = await fetch("http://localhost:3001/verif", requestOptions);
            const data = await response.json();
            this.setState({ postId: data.id });
            if(JSON.stringify(data) == "[]"){
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ correo: this.state.correo , nombre: this.state.nombre 
                    , pais: this.state.pais , clave: this.state.clave, titulos: this.state.titulos, tecInf: this.state.tecInfo
                    , lenguajes: this.state.lenguajes , idiomas: this.state.idiomas})
                };
                const response = await fetch("http://localhost:3001/candidatos/nuevo", requestOptions);
                const data = await response.json();
                this.setState({ postId: data.id });
                if(JSON.stringify(data) == "[]"){
                    console.log("Vacio "+JSON.stringify(data));
                    alert("Usuario existente!");
                    
                }else{
                    console.log("Respuesta "+JSON.stringify(data));
                    //localStorage.setItem('UserInfo', JSON.stringify(data));
                    alert("Usuario registrado!");
                }
            }else{
                //console.log("Respuesta "+JSON.stringify(data));
                alert("Usuario existente!");
            }

                // const requestOptions = {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ correo: this.state.correo , nombre: this.state.nombre 
                //     , pais: this.state.pais , clave: this.state.clave, titulos: this.state.titulos, tecInf: this.state.tecInfo
                //     , lenguajes: this.state.lenguajes , idiomas: this.state.idiomas})
                // };
                // const response = await fetch("http://localhost:3001/candidatos/nuevo", requestOptions);
                // const data = await response.json();
                // this.setState({ postId: data.id });
                // if(JSON.stringify(data) == "[]"){
                //     console.log("Vacio "+JSON.stringify(data));
                //     alert("Usuario existente!");
                    
                // }else{
                //     console.log("Respuesta "+JSON.stringify(data));
                //     //localStorage.setItem('UserInfo', JSON.stringify(data));
                //     alert("Usuario registrado!");
                // }
            //-------------------------------------------
        }else{
            alert("Campos obligatorios: <Correo> <Contraseña> <Nombre> <Pais>");
        }
        
    }

    render(){

        return(
            <div>
                <div className="SignBack">
                    <div>
                        <button className="ButtSignB" onClick={() => this.props.history.push("/home")}>HOME</button>
                    </div>
                </div>
                <div className="SignIn">
                    <h2>E CORP</h2>
                    <section  className="New-user">
                        <label htmlFor="new-user">
                            Correo electrónico: 
                        </label>{' '}
                        <input id="new-user" value={this.state.correo} onChange={this.updateCorreo}/>
                    </section>
                    <section  className="New-password">
                        <label htmlFor="new-password">
                            Contraseña:
                        </label>{' '}
                        <input id="new-password" type="password" value={this.state.clave} onChange={this.updateClave}/>
                    </section>
                    <section  className="New-name"> 
                        <label htmlFor="new-name">
                            Nombre completo: 
                        </label>{' '}
                        <input id="new-name" value={this.state.nombre} onChange={this.updateNombre}/>
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
                    <button className="ButtSignIn" onClick={this.DidMount}>
                        REGISTRARSE
                    </button>
                    
                </div>
            </div>

        );
    }
}

export default SignIn;