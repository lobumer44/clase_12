/**Bucles e iteraciones */

//while
/* 
//incremento : contador desde valor i= 0 a <=15 
el br hace los saltos en linea

let i = 0;

while ( i <= 15) {
    console.log ("el valor de i : " , i);
    i = i + 1;
}


//decremento resta desde valor let nro en 5

let numero = 100;

while (numero > 0) {
    document.write ( "Te queda de saldo " , numero, "<br>");
    numero = numero - 5;
}


//do while la sentencia se va a ejecutar al menos 1 vez

let i = 5;
do{ console.log ( "el valor de i = " , i );
i = i + 1 ;
} while ( i < 5)


practica : Para llegar a destino tenemos que caminar 100 pasos. 
Usando el bucle while y el método document.write() mostrá por línea cuántos 
pasos que quedan por caminar, partiendo del paso 100 hasta llegar al paso 1. 


let pasos = 100;

while (pasos > 0) {
    if (pasos == 1){ document.write("Solo falta " , pasos , " paso por caminar.", "<br>");

    } else{
    document.write("Solo faltan " , pasos , " pasos por caminar.", "<br>");}
    pasos = pasos - 1;
}
if: nos avisa cuando solo queda 1 paso / else: para el resto aplica el mensaje

Ciclo for


for (let i = 0; i < 4; i++) {
    console.log(i);
  } 

  let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];
   
 
 for (let i = 0; i< frutas.length; i++ ){
    let fruta = frutas[i];
    console.log (fruta + ' tiene ' + fruta.length + ' letras')
 
 }
 
 for ( let i = 0 ; i <= 10; i++){
    alert (i)
 }
 

 ejercicio 2
 se utiliza para multiplicacion

 let ingresarNumero = parseInt(prompt("Ingresa Numero"));

 for (let i = 1; i <= 10 ; i++ ){
    let resultado = ingresarNumero * i;

    alert (ingresarNumero + " X " + i + "=" + resultado)
 }


for (let i = 1; i <= 5; i++ )
//solicitar en cada repeticion un nombre
{let ingresarNombre = prompt("Ingrese un nombre ");

//informar el turno asignado con el nombre

alert ("Turno Numero " + i + " Nombre: " + ingresarNombre);
}
for (let i = 1; i <= 20; i++ )

alert ("Turno Numero " , i , " Nombre: " , ingresarNombre);


// Metodos para Array : for each()

let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetosMagicos.forEach(function(objetosMagicos){
    console.log ("Objeto con Foreach es:", objetosMagicos)
})

objetosMagicos.forEach((objetosMagicos)=>
    console.log ("lo mismo con funcion flecha:", objetosMagicos))

// Metodos para Array : Map()

const numeros = [ 1, 2, 3, 4, 5, 6];
const porDos = numeros.map ((x)=> x * 2);
const porCien = numeros.map ((x)=> x * 100);

console.log ("por Dos",porDos);
console.log ("por Cien",porCien);

//Metodos Array: Find ()

const encontrado = numeros.find( elemento =>elemento > 3)
console.log (encontrado);

const nombre = ["Ana", "Ema","Juan"];
const encontrado2 = nombre.find ((elemento => elemento === "Ema"))

console.log (encontrado2)


let numeros = [2, 5, 6, 18, 201];
 
let numMayoresCinco = numeros.filter((n) => {  
  return n > 5
}); 

console.log (numMayoresCinco)

*/
//Practica 1 (Mati)
/*DRY= dont repeat yourself- no te repitas


const listaDeNumeros = [ 8, 2, 4]


console.log (listaDeNumeros[0]);
console.log (listaDeNumeros[1]);
console.log (listaDeNumeros[2]);

for (let i = 0; i < listaDeNumeros.length; i++) {
    console.log(listaDeNumeros[i]);
  }  
  
  

//Metodo Array: for of
const listaDeNumeros = [8, 2, 4]

const result = []
for (let numero of listaDeNumeros) {
    if (numero < 3) {
        console.log("el numero " + numero + " no es mayor a 3")
    
    } else{
        result.push(numero)
    }
}
console.log(result)


//Funciones
const sumar =(a, b) =>{
    
    return a + b
}
console.log(sumar(8, 10))


//Actividad 1

const listaDeNumeros = [8, 2, 4, 9, 11, 7 ]
listaDeNumeros.map( (numero) => {
console.log(numero)
console.log("hola " + numero) })


const listaDeNumeros = [8, 2, 4, 9, 11, 7 ]

const result = listaDeNumeros.map( (numero) =>{
 
  if(  numero % 2  === 0){
   return numero + " es par"
  }else {
     return numero + " es impar"}
})
console.log(result)


//Actividad 2*/

const listaDeNombres =[ "Francisco", "Azul", "Matias", "quimey", "Javier","Nancy"]
const nombresCortos = listaDeNombres.filter((nombre)=>nombre.length <5)
console.log (nombresCortos)


//actividad3
//pregunten al usuario 5 nombres y agregarlos a un array  
//luego muestren solo los que sean mayores a 7 letras por alerta