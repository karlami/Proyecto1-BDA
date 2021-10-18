import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
//import { getAll } from './functions.js';
import { Database } from './Database.js';

const app = express()
const port = 3001

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new Database();
await db.connectDB();
await db.connectADB();

// ----------------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}\n`)
})
// ----------------------------------------------------------------------------------------

app.get('/candidatos', async(req, res) => {    
  console.log("GET")
  //const jsonResponse = await db.insertData();
  //const jsonResponse = await db.consulta3(); 
  //const jsonResponse = await db.consulta2(); 
  //const jsonResponse = await db.consulta1();  
  const jsonResponse = await db.getDbData();  
  res.send(jsonResponse);
})

app.get('/consulta1', async(req, res) => {    
  console.log("GET")
  const jsonResponse = await db.consulta1();  
  res.send(jsonResponse);
})

app.get('/consulta2', async(req, res) => {    
  console.log("GET")
  const jsonResponse = await db.consulta2();  
  res.send(jsonResponse);
})

app.get('/consulta3', async(req, res) => {    
  console.log("GET")
  const jsonResponse = await db.consulta3();  
  res.send(jsonResponse);
})

app.post('/candidatos/nuevo', async(req, res) => { 
  console.log("POST")
  const { correo, clave, nombre, pais, titulos, tecInf, lenguajes, idiomas} = req.body;
  const resultado = await db.insertDataT(correo, clave, nombre, pais, titulos, tecInf, lenguajes, idiomas);
  //console.log(resultado);
  res.send(resultado); 
})


app.put('/candidatos/:id', async(req, res) => {    
  console.log("UPDATE")
  try {
      const id = req.params.id;
      const upBody = req.body;
      const options = {new: true};
      const jsonResponse = await db.upDbData(id, upBody);
      console.log(jsonResponse);
      res.send(jsonResponse); 
  } catch (error){
      console.log(error.message);
  }
})

app.delete('/candidatos/:id', async(req, res) => { 
  console.log("DELETE")
  try {
      const id = req.params.id;
      const jsonResponse = await db.delDbData(id);
      console.log(jsonResponse);
      res.send(jsonResponse); 
  } catch (error){
      console.log(error.message);
  }
})

app.post('/login', async(req, res) => { 
  //console.log("POST")
  const { correo,clave } = req.body;
  //console.log(username);
  //console.log(password);
  const resultado = await db.logInUser(correo,clave);
  console.log(resultado);
  res.send(resultado); 
})

app.post('/verif', async(req, res) => { 
  //console.log("POST")
  const {correo} = req.body;
  //console.log(username);
  //console.log(password);
  const resultado = await db.verifUser(correo);
  console.log(resultado);
  res.send(resultado); 
})

app.post('/loginAdmin', async(req, res) => { 
  //console.log("POST")
  const { correo,clave } = req.body;
  //console.log(username);
  //console.log(password);
  const resultado = await db.logInAdmin(correo,clave);
  console.log(resultado);
  res.send(resultado); 
})

app.get('/unCandidato/:id', async(req, res) => {    
  console.log("GETONE")
  try {
      const id = req.params.id;
      if (await db.getOneDB(id)) {
        res.send(true);
      }else{
        res.send(false);
      } 
  } catch (error){
      console.log(error.message);
  }
})
