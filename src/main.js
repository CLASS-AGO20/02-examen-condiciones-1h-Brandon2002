export default class App {
    convertir(pesos){
        let dolar = 20.5;
        let euro = 22.7;
        let resultado;
        if(pesos < 2000){
            resultado = pesos / dolar;
        } else if (pesos > 2000){
            resultado = pesos / euro;
        } return resultado;
    }
}

let app = new App();
console.log(app.convertir(1900));
console.log(app.convertir(2400));