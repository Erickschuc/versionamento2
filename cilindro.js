export default class cilindro{
    constructor(raio,altura){ //constructor = atributo
        this.raio = raio // this = 
        this.altura = altura
    }

    calcularVolume(){
        return Math.PI * this.raio * this.raio * this.altura
    }

    calcularAreaTotal(){
        return( 2* (Math.PI * this.raio * this.raio)+ 
        2 * (Math.PI * this.raio * this.altura))
        }
}