export class persona{
    async getPersona(){
        const rawRes = await fetch("http://localhost:3001/personas");
        const parsedRes = await rawRes.json();
        return parsedRes.results;
    }
}