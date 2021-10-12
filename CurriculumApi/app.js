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

app.post('/newSong', async(req, res) => { 
  //console.log("POST")
  const { username,password } = req.body;
  //console.log(username);
  //console.log(password);
  const resultado = await db.logInUser(username,password);
  //console.log(resultado);
  res.send(resultado); 
})
