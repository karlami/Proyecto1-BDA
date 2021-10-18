import React from "react";
import {Table3} from "./Table3";
import {persona} from './Persona';

class Consul3 extends React.Component{

    persona= new persona();

    constructor(props){
        super(props);
        this.state = {
        data: [],
        TI: "",
        NTI: ""
        };
    }

    async loadData(){
        const newData = await this.persona.getPersona();
        this.setState({
        data: newData
        });
    }

    callAPI(url, number){

        if (number === 1){
        fetch(url)
        .then(res => res.text())
        .then(res => console.log(res))
        .then(res => this.setState({TI: res}));

        }

    }


  componentDidMount(){
    //setInterval(() => {
      this.loadData();
      this.callAPI("http://localhost:3001/consulta3", 1);
      //this.callAPI("http://localhost:3001/personas?TI=false", 2);
      //console.log("Your TI: " + this.state.TI);
    //});

  } 

    render(){
        return(
            <div>
                <div className="SignBack">
                    <div>
                        <button className="ButtLogB" onClick={() => this.props.history.push("/home")}>SALIR</button>
                        <button className="ButtLogB" onClick={() => this.props.history.push("/admin")}>ATRAS</button>
                    </div>
                </div>
                <div>
                    <Table3 />
                </div>
            </div>
        );
    }
}

export default Consul3;