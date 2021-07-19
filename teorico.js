//VARIABLES
var nombre;
let contador;
const url; // solo en el bloque de codigo donde feuron declaradas

//======================================================================

//TIPOS DE DATOS

//numericos(number)

let edad = 16;
let peso = 57;

//cadenas de caracteres(string)

let nombre = "Sol Andrade"
let ocupacion = "Estudiante"

//logicos o booleanos (boolean)

let tengo16 = true
let tengo65 = false

//objetos(object) --> son colecciones de datos y en su interior pueden existir todos los datos anteriores

let persona = {
    nombre: "Sol", //string
    edad: 16, //number
    soltera: true //boolean
}

//array

let comidasFavoritas = ["Milanesa napolitana", "Ravioles", "Pizza"];
let numerosSorteados = [12, 45, 56, 324, 452];

//Tipos de datos ESPECIALES

//NaN (not a number)
let malaDivision = "35" / 2

//Null (valor nulo)
let temperatura = null;

//Undefined (valor sin definir)
let saludo;

//======================================================================

//OPERADORES

//Operadores de asignacion

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"
var edad = 40

//Operadores Aritmeticos
// Nos permiten hacer operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

//Operadores de comparacion simple

10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad

//Operadores de comparacion estricta

10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo

//Operadores relacionales

15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor igual que...
15 < 10  //---> Menor que...
15 <= 10  //---> Menor igual que...

//Operadores logicos

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// && Todos sus valores deben evaluar como TRUE
(10 > 15) && (10 != 20) //---> 

// || (OR) Solo un valor debe evaluar como TRUE para que la expresión sea TRUE
(10 > 15) || (10 != 20) //---> TRUE porque 10 != 20 es verdadero

// ! (NOT) - Niega la condición, TRUE pasa a FALSE y FALSE a TRUE
let color = 'Verde';
let noEsRojo = !(color == 'Rojo'); //---> Esto daría FALSE, pero como está negado, da TRUE

//======================================================================

//FUNCIONES
function sumar (a,b){
    return a+b;
}

//funciones declaradas
function hacerHelado(cantidad){
    return "helado".repeat(cantidad);

}

//invocar funciones
hacerHelado();

//======================================================================

//CONDICIONALES

//if
if(condicion){
//codigo a ejecutar si la condicion es verdadera
}else{
    //codigo a ejecutar si la condicion es falsa
}

//======================================================================

//METODOS DE ARRAY

let colores = ["Rojo", "Naranja", "Azul"]
//.push() --> Agrega uno o mas elementos al final del array
//        --> Recibe uno o mas elementos como parametros
//        --> Retorna la nueva longitud del array
colores.push("Violeta") //retorna 4

//.pop() --> Elimina el ultimo elemento de un array
//       --> No recibe parametros
//       --> Devuelve el elemento eliminado
//variable para guardar lo que devuelve .pop()
let ultimoColor = colores.pop();

//.shift() --> Elimina el primer elemento de un array
//         --> No recibe parametros
//         --> Devuelve el elemento eliminado
//variable para guardar lo que devuelve .shift()
let primerColor = colores.shift();

//.unshift() --> Agrega uno o varios elementos al principio del array
//           --> Recibe uno o mas elementos como parametros
//           --> Retorna la nueva longitus del array
colores.unshift("Rosa")

//.join() --> Une los elementos de un array usando el separador que le especifiquemos; si no lo especificamos, usa comas
//        --> Recibe un separador (string), es opcional
//        --> Retorna un string con los elementos unidos

let separadosPorComa = colores.join()
console.log(separadosPorComa);

//.indexof() --> Busca en el array el elemento que recibe como parametro
//           --> Recibe un elemento a buscar en el array
//           --> Retorna el primer indice donde encontro lo que buscabamos. Si no lo encuentra, retorna un -1
colores.indexOf("Rosa")

//.lastIndexOf() --> Empieza buscando el elemento por el final del array
colores.lastIndexOf("Violeta")

//.includes() --> Si encuentra el parametro que le damos, retorna un booleano
colores.includes("Azul")

//Metodos de array II

//map()
//--> Recibe una funcion como parametro(callback)
//--> Recorre el array y devuelve un nuevo array modificado.
//--> Las modificaciones seran aquellas que programemos en nuestra funcion de callback

array.map(function(elemento){
    //definimos las modificaciones que queremos aplicar sobre cada elemento del array
});

let numeros = [2,4,6];
let elDoble = numeros.map(function(num){
    //multiplicamos por 2 cada numero
    return num*2
});

console.log(elDoble); //[4,8,12]

//filter()
//--> recibe una funcion como parametro
//--> recorre el array y filtra los elementos segun unacondicion que exista en el callback.
//--> devuelve un nuevo array que contiene unicamente los elementos que hayan cumplido con esa condicion. Es decir, que nuestro nuevo array puede contener menos elementos que el original.

array.filter(function(elemento){
    //definimos la condicion que queremos utilizar como filtro para cada elemento del array
})

var edades = [22,8,17,14,30];
var mayores = edades.filter(function(edad){
    return edad > 18;
});

console.log(mayores); // [22,30]

//reduce()
//--> recorre el array y devuelve un unico valor
//--> recibe un callback que se va a ejecutar sobre cada elemento del array. Este, a su vez, recibe dos parametros: un acumulador u el elemento actual que este recorriendo

array.reduce(function(acumulador, elemento){
    //definimos el comportamiento que queremos implementar sobre el acumulador y el elemento
})

var nums = [5,7,16];
var suma = nums.reduce(function(acum,num){
    return acum+num;
})

console.log(suma); //28

//forEach()
//--> la finalidad de este metodo es iterar sobre un array
//--> recibe un callback como parametro pero no retorna nada

array.forEach(function(elemento){
    //definimos el comportamiento que queremos implementar sobre cada elemento
})

var paises = ["Argentina", "Cuba", "Peru"];
paises.forEach(function(pais){
    console.log(pais);
})

//======================================================================

//JSON

//JSON.parse() --> convierte un texto con formato JSON al tipo de dato equivalente de JAvaScript
//             --> recibe una cadena de texto con formato JSON
//             --> devuelve el mismo dato que recibio en formato JavaScript

let datosJson = '{"club": "independiente", "barrio": "Avellaneda"}'
let datosConvertidos = JSON.parse(datosJason);

console.log(datosConvertidos);
// Se vera en consola un objeto literal
// {"club": "independiente", "barrio": "Avellaneda"}

//JSON.stringify() --> Convierte un tipo de dato de JavaScript en un texto en formato JSON
//                 --> Recibe un tipo de dato de JavaScript
//                 --> Devuelve una cadena de texto con formato JSON

let objetoLiteral = {nombre: "Carla", pais: "Argentina"};
let datosConvertidos = JSON.stringify(objetoLiteral);

console.log(datosConvertidos);
//Se veran en consola los datos en un string de tipo JSON
// '{nombre: "Carla", pais: "Argentina"}'

//======================================================================

//METODOS DE STRING

let nombre = "Fran";
//            0123

nombre[2];
//Accedemos a la letra a, el indice 2 del string

//.length --> retorna la cantidad de caracteres de un string
let miSerie = "Mad Men";
miSerie.length; //devuelve 7

let arrayNombres = ["Bart", "Lisa", "Moe"];
arrayNombres.length; //devuelve 3

arrayNombres[0].length; //Corresponde a "Bart", devuelve 4

//.indexof() --> Busca en un string, el string que recibe como parametro
//           --> Recibe un elemento a buscar en el array
//           --> Retorna el primer indice donde encontro lo que buscabamos. Si no lo encuentra, retorna un -1.

let saludo = "¡Hola! Estamos programando";
saludo.indexof("Estamos") //devuelve 7
saludo.indexOf("Vamos") //devuelve -1
saludo.indexOf("o") //encuentra la letra o que esta en la posicion 2, devuelve 2 y corta la ejecucion

//.slice() --> corta el string y devuelve una parte del string donde se aplica
//         --> recibe 2 numeros como parametros (pueden ser negativos)
//                --> el indice desde donde inicia el corte
//                --> el indice hasta donde hacer el corte (es opcional)
//         --> Retorna la parte correspondiente al corte

let frase = "Breaking Bad Rules!"
frase.slice(9,12); //Devuelve "Bad"
frase.slice(13); //Devuelve "Rules!"

//.trim() --> elimina los espacios que esten al principio y al final de un string
//        --> no recibe parametros
//        --> no quita los espacios del medio

let nombreCompleto = "  Homero Simpson    "
nombreCompleto.trim(); //Devuelve "Homero Simpson"

//.split() --> divide un string en partes
//         --> recibe un string que usara como separador de las partes
//         --> devuelve un array con las partes del string

let cancion = "And bingo was his name, oh!";
cancion.split(' ');
//devuelve ["And", "bingo", "was", "his", "name", "oh!"]

//.replace() --> reemplaza una parte del string por otra
//           --> recibe dos strings como parametros: el string que queremos buscar y el string que usaremos de reemplazo
//           --> retorna un nuevo string con el reemplazo

let frase = "Aguante Phython!";
frase.replace("Phython", "JS") //devuelve "Aguante JS!"
frase.replace("Phy", "JS"); //devuelve "Aguante JSton!"

//======================================================================

//OBJETOS LITERALES

//estructura

let auto = {
    patente: "AC 134 DD"
}
//propiedad  --> definimos el nombre de la propiedad del objeto
//dos puntos --> separa el nombre de la propiedad, de su valor
//valor      --> puede ser cualquier tipo de dato que conocemos

//Propiedades --> con objeto.propiedad accedemos al valor de cada una de ellas

let tenista = {
    nombre: "Roger",
    apellido: "Federer"
};

console.log(tenista.nombre) //Roger
console.log(tenista.apellido) //Federer

//Metodos --> so una propiedad almacna una funcion, diremos que es un metodo del objeto

let tenista = {
    nombre: "Roger",
    edad: 38,
    activo: true,
    saludar: function(){
        return "¡Hola! Me llamo Roger"
    }
};
//ejecucion
console.log(tenista.saludar()); //"¡Hola! Me llamo Roger"

//Funciones constructoras --> nos permiten armar un molde y luego crear todos los objetos necesarios

function auto(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

//instanciar un objeto
let miAuto = new auto("Ford", "Falcon")

//======================================================================

//ARROW FUNCTIONS

//Funcion convencional

function sumar(n1,n2){
    return n1 + n2
}

//Arrow function

let sumar = (n1,n2) => n1+n2

//======================================================================

//Condicionales (if ternario y switch)

//if ternario

//estructura basica
4 > 10 ? "El 4 es mas grande" : "El 10 es mas grande"
//condicion ;  primera expresion ; else

//switch
switch (expresion){
    case valorA:
        //codigo a ejecutar si la expresion es igual a valorA
        break;
    case valorB:
        //codigo a ejecutar si la expresion es igual a valorB
        break;
}

//agrupamiento de casos
switch (expresion){
    case valorA:
    case valorB:
        //codigo a ejecutar si la expresion es igual a valorB
        break;
    case valorC:
        //codigo a ejecutar si la expresion es igual a valorC
        break;
}

//default
switch (expresion){
    case valorA:
        //codigo a ejecutar si la expresion es igual a valorA
        break;
    case valorB:
        //codigo a ejecutar si la expresion es igual a valorB
        break;
    default:
        //codigo a ejecutar si ningun caso es verdadero

}

//======================================================================

//CICLOS

//for

//estructura
//  inicio          condicion   modificador
for(let vuelta = 1; vuelta <= 5; vuelta++){
    console.log("Dando la vuelta numero " + vuelta)
}

//======================================================================

//CALLBACKS --> funcion que se pasa como parametro de otra funcion

//callback anonimo

setTimeout(function(){
    console.log("Hola Mundo")
}, 1000)

//callback definido

let miCallback = () => console.log("Hola Mundo");
setTimeout(miCallback, 1000);

//codigo

function nombreCompleto(nombre,apellido){
    return nombre + " " + apellido;
};
//definimos la funcion nombreCompleto(). Esta se encarga de unir con un espacio un nombre y un apellido. Nos devuelve un string

function saludar(nombre,apellido, callback){
    return "¡Hola " + callback(nombre, apellido) + "!"
};
//Definimos la funcion saludar(). Esta recibe un nombre, un apellido y un callback como parametros. Este ultimo sera la funcion que vamos a querer ejecutar internamente.
//Lo que queremos devolver es un string completo. La primera parte la tenemos en el return. El resto(...) vendra de lo que nos retorne el callback en el momento en el que se ejecute.

saludar("Juanito", "Sanchez", nombreCompleto);
//Ejecutamos la funcion saludar, le pasamos como parametros un nombre, un apellido y la funcion nombreCompleto(). Primero se ejecutara el callback, que va a devolver el nombre completo y luego se ejecutara la funcion saludar(), que va a devolver el saludo completo.


//======================================================================


//Objeto Date

//sintaxis de un elemento

let miFecha = new Date();
//variable --> creamos una variable para almacenar el objeto Date
//metodo constructor --> metodo que devuelve un objeto Date de JavaScript

//.getDate() --> retorna el numero del dia del mes de una fecha

let diaDeMiFecha = miFecha.getDate();
console.log(diaDeMiFecha);
//El Nº del dia de miFecha --> ej: 22

//.getMonth() --> retorna el numero del mes de una fecha
//devolvera un numero entre 0(enero) y 11(diciembre)

let mesDeMiFecha = miFecha.getMonth();
console.log(mesDeMiFecha);
//El Nº del mes de miFecha --> ej: 5(junio)

//.getDay() --> retorna el dia de la semana de una fecha
//devolvera un numero entre 0(domingo) y 6(sabado).

let diaSemanaDeMiFecha = miFecha.getDay();
console.log(diaSemanaDeMiFecha);
//El Nº de dia de la semana de miFecha --> ej: 2(martes)

//.getFullYear() --> retorna el año completo(4 digitos) de una fecha

let anioDeMiFecha = miFecha.getFullYear();
console.log(anioDeMiFecha);
//El Nº del año actual --> ej: 2021

//======================================================================

//DESESTRUCTURING

//desestructurando arrays
//para desestructurar un array decalramos una variable (podemos usar var,let o const) y, entre corchetes, escribimos el nombre que queremos. Podemos declarar mas de una variable, separando cada una con una coma ,.
//luego, igualamos esa estructura al array del cual queremos extraer los datos

let colores = ["Rojo", "Azul", "Amarillo"];
let [rojo, azul, amarillo] = colores

//desestructurando objetos
//para desestructurar un objeto literal, creamos una variable(podemos usar var,let o const) y, entre llaves, declaramos el o los nombres de las propiedades que queremos extraer.
//a esa estructura la igualamos al objeto del cual queremos extraer los datos.

let persona = {nombre: "Laura", edad: 31, faltas: 3};
let {nombre, edad} = persona;

//======================================================================

//SPREAD OPERATOR

//permite expandir cada uno de los datos de un elemento iterable dentro de otro elemento

//uso y sintaxis
//el operador de propagacion se puede usar sobre cualquier elemento iterable. nos sirve para copiar y mover datos de un lugar a otro de forma eficaz
//operador spread (...) --> se escribe con 3 puntos seguidos, antecediendo al nombre de la variable
//elemento iterable --> la variable puede contener un array, un string, un objeto

//spread en arrays
//implementando este operador, podemos copiar todos los datos de un array en un array nuevo
let clubesUno = ["Boca", "River", "Racing"];
let clubesDos = ["San Lorenzo", "Lanus", "Gimnasia"];
let todosLosClubes = [...clubesUno, ...clubesDos];

//tambien podemos agregar todos los datos de un array dentro de un array existente
let parte = ["los", "cumplas"];
let oracion = ["que", ...parte, "feliz"];

//spread en objetos
//implementando este operador, podemos copiar todas las propiedades de un objeto dentro de otro objeto existente
let auto = {marca: "Ferrari", kms: 0, anio: 2019};
let corredorUno ={nombre: "Vettel", edad: 32, ...auto}
let corredorDos = {nombre: "Leclerc", edad: 21, ...auto};

//tanto corredorUno como corredorDos ahora tienen todas las propiedades que definimos en el objeto auto sin tener que definirlas a mano en cada uno de ellos

//spread y funciones
//implementando este operador, podemos pasarle a una funcion un array como argumento. El operador --- se encargara de expandir los datos para que la funcion los tome como argumentos separados.
//para ejemplificar usaremos el metodo de JavaScript Math.min(), que recibe N cantidad de argumentos y devuelve el menor

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); //Devuelve 3.2

//======================================================================

//REST PARAMETER

//permite capturar cada uno de los argumentos adicionales pasados a esa funcion

//parametro rest
//se escribe de la misma manera que el operador spread...
//la diferencia es que se utiliza durante la definicion de la funcion, y no durante su ejecucion.
//el parametro rest generara un array con todos los argumentos adicionales que se le pasen a la funcion

function miFuncion(param1, param2, ...otros){
    return otros;
}
miFuncion("a", "b", "c", "d", "e");
//retornara ["c", "d", "e"]