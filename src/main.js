export default class App {
    convertir(pesos){
        let dolar = 20.5;
        let euro = 22.7;
        let resultado;
        if(pesos < 2000){
            resultado = pesos * dolar;
        } else if (pesos >= 2000){
            resultado = pesos * euro;
        } return resultado;
    }
    costoRenta(kilometros){
        let resultado;
        if (kilometros < 50){
            resultado = kilometros * 3;
        }else if(kilometros >= 50 && kilometros < 100){
            resultado = kilometros * 5;
        }else if (kilometros >= 100 && kilometros < 200){
            resultado = kilometros * 6;
        }else if (kilometros >= 200){
            resultado = kilometros * 6.5;
        }return resultado;
    }
    puedeCircular(dia, terminacion){
       if (dia === 1 && terminacion === 0){
           return true;
       }else if (dia !== 1 && terminacion === 0){
           return false;
       }else if(dia === 2 && terminacion === 1){
           return true;
       }else if (dia !== 2 && terminacion == 1){
           return false;
       }else if ((dia === 3 || dia === 4) && terminacion === 2){
           return true;
       }else if ((dia !== 3 || dia !== 4) && terminacion === 2){
           return false;
       }else if(dia > 7){
           return false;
       }else if((terminacion !== 0 || terminacion !== 1 || terminacion !== 2)){
           return true;
       }
    }

    
}

let app = new App();
console.log(app.convertir(2000));
console.log(app.convertir(2400));

console.log(app.costoRenta(49));
console.log(app.costoRenta(55));
console.log(app.costoRenta(100));
console.log(app.costoRenta(150));
console.log(app.costoRenta(210));

console.log(app.puedeCircular(1, 0));
console.log(app.puedeCircular(2, 1));
console.log(app.puedeCircular(3, 2));
console.log(app.puedeCircular(4, 2));
console.log(app.puedeCircular(5, 0));
console.log(app.puedeCircular(6, 0));
console.log(app.puedeCircular(7, 0));



