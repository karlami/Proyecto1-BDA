import { MongoClient } from 'mongodb';

export class Database {
    
    constructor() {
      // Hay que cambiar el nombre Fiorella, por el nombre de cada uno: Karla, Luis o Bradly
      // Y en donde dice Fiorella12345, lo cambian por Karla12345 o Luis12345 o Bradly12345
      this.url = 'mongodb+srv://Karla:Karla12345@clusterbda-flkb.iz39y.mongodb.net/CurriculumDB?retryWrites=true&w=majority';
      this.client = new MongoClient(this.url);
      this.dbName = 'CurriculumDB';
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
    
    async logInUser(user, pass){
      const db = this.client.db(this.dbName);
      const collection = db.collection('Users'); 
      const findResult = await collection.find(
        {
          $and:
            [
              {"usuario": user},
              {"Password": pass}
            ]
        }).toArray();
        if(findResult.length == 0){
          return findResult
        }
        else{
          const out = {
            "NombreUsuario": findResult[0].NombreUsuario,
            "usuario": findResult[0].usuario,
            "TipoUsuario": findResult[0].TipoUsuario
          };
        
        return out
        }
    }

    // Consulta 1
    async consulta1() {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({tecInf:"1"}, { projection: {_id:0, nombre:1}}).toArray();
      return findResult
    }

    // Consulta 2
    async consulta2() {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({idiomas:"Ingles Avanzado"}, { projection: {_id:0, nombre:1, pais:1}}).toArray();
      return findResult
    }

    // Consulta 3
    async consulta3() {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos');        
      const findResult = await collection.find({tecInf:"0"}, { projection: {_id:0, nombre:1, titulos:1}}).toArray();
      return findResult
    }

    // Insertar nuevo documento
    async insertData() {
      const db = this.client.db(this.dbName);
      const collection = db.collection('Candidatos'); 
      var myobj = { correo: "prueba@gmail.com", clave:"12345", nombre:"Carlos", pais:"prueba", 
                  titulos:["pruebaaa", "I.Electronica"], tecInf:1, lenguajes:"Python", 
                  idiomas:["Ingles Avanzado", "Frances"]};    
      const findResult = await collection.insertOne(myobj);//find({}).toArray();
      console.log("1 document inserted");
      return findResult
  }
    
    
    async closeConnection() {
      this.client.close();
    }
}