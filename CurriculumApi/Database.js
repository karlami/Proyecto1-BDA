import { MongoClient } from 'mongodb';
import * as fs from "fs";


export class Database {
    
    constructor() {
      // Hay que cambiar el nombre Fiorella, por el nombre de cada uno: Karla, Luis o Bradly
      // Y en donde dice Fiorella12345, lo cambian por Karla12345 o Luis12345 o Bradly12345
      this.url = 'mongodb+srv://Karla:Karla12345@clusterbda-flkb.iz39y.mongodb.net/CurriculumDB?retryWrites=true&w=majority';
      this.client = new MongoClient(this.url);
      this.dbName = 'CurriculumDB';
      this.urlA= 'mongodb+srv://Karla:Karla12345@clusterbda-flkb.iz39y.mongodb.net/CurriculumDB?readPreference=secondary&readPreferenceTags=workloadType:OPERATIONAL&readConcernLevel=local';
      this.clientA = new MongoClient(this.urlA);
    }

    async connectDB() {
        await this.client.connect();
        console.log('Connected successfully to Database Server');
    }

    async upDbData(id, updates) {
        const db = this.client.db(this.dbName);
        const collection = db.collection('Candidatos');        
        const updateResult = await collection.findOneAndUpdate({correo: id}, 
                                                              {$set: updates},
                                                              { upsert: true });
        return updateResult
    }

    async connectADB() {
      await this.clientA.connect();
      console.log('Connected successfully to Database Server');
    }

    async delDbData(id) {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const deleteResult = await collection.findOneAndDelete({correo: id});
  }

    async getDbData() {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({}).toArray();
      return findResult
  }
    
    async logInUser(correo, clave){
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos'); 
      const findResult = await collection.find(
        {
          $and:
            [
              {"correo": correo},
              {"clave": clave}
            ]
        }).toArray();
        if(findResult.length == 0){
          console.log(findResult);
          return findResult
        }
        else{
          console.log(findResult);
          return findResult
        }
    }

    async logInAdmin(correo, clave){
      const db = this.clientA.db(this.dbName);
      const collection = db.collection('Administradores'); 
      const findResult = await collection.find(
        {
          $and:
            [
              {"correo": correo},
              {"clave": clave}
            ]
        }).toArray();
        if(findResult.length == 0){
          console.log(findResult);
          return findResult
        }
        else{
          console.log(findResult);
          return findResult
        }
    }

    async verifUser(correo){
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos'); 
      const findResult = await collection.find(
        {"correo": correo}
        ).toArray();
        if(findResult.length == 0){
          console.log(findResult);
          return findResult
        }
        else{
          console.log(findResult);
          return findResult
        }
    }

    // Consulta 1
    async consulta1() {
      
      const db = this.clientA.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({tecInf:true}, { projection: {_id:0, nombre:1}}).toArray();
      fs.writeFileSync("C:/Users/luisk_bx4gk0z/Documents/tec/II Semestre 2021/BasesAvanzadas/Proyectos/Proyecto1/practica/aprendiendoreact/src/components/dataPrueba/prueba1.json", JSON.stringify(findResult));
      return findResult
    }

    // Consulta 2
    async consulta2() {
      const db = this.clientA.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({idiomas:{$all: [["Ingles", "Avanzado"]]}}, { projection: {_id:0, nombre:1, pais:1}}).toArray();
      fs.writeFileSync("C:/Users/luisk_bx4gk0z/Documents/tec/II Semestre 2021/BasesAvanzadas/Proyectos/Proyecto1/practica/aprendiendoreact/src/components/dataPrueba/prueba1.json", JSON.stringify(findResult));
      return findResult
    }

    // Consulta 3
    async consulta3() {
      const db = this.clientA.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({tecInf:false}, { projection: {_id:0, nombre:1, titulos:1}}).toArray();
      fs.writeFileSync("C:/Users/luisk_bx4gk0z/Documents/tec/II Semestre 2021/BasesAvanzadas/Proyectos/Proyecto1/practica/aprendiendoreact/src/components/dataPrueba/prueba1.json", JSON.stringify(findResult));
      return findResult
    }

    // Insertar nuevo documento
    async insertDataT(correo, clave, nombre, pais, titulos, tecInf, lenguajes, idiomas) {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos'); 
      var myobj = { 
        "correo": correo, 
        "clave": clave, 
        "nombre":nombre, 
        "pais": pais, 
        "titulos":titulos, 
        "tecInf": tecInf, 
        "lenguajes": lenguajes, 
        "idiomas": idiomas};     
      const findResult = await collection.insertOne(myobj);//find({}).toArray();
      console.log("1 document inserted");
      return findResult
  }
    
    
    async closeConnection() {
      this.client.close();
    }

    async getOneDB(id) {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const deleteResult = await collection.findOne({correo: id});
  }
}