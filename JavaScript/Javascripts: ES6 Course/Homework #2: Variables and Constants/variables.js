
// Spanish Languaje

/*
var es utilizado para crear variables, y tiene alcance (scope) de función. 
*/
// Ejemplo 1:

function change(){
    var functionScope = 123;
}

functionScope = 456; /* Esta asignación da error, ya que functionScope fué definida dentro 
                     de la función change y no puede ser modificada por fuera de la misma. */


// Ejemplo 2:

var rootScope = 789;

function change2(){
    rootScope = 100; /* Esta asiganción es válida ya que rootScope ha sido definida en la raíz. 
                        De esta manera, puede ser modificada desde cualquier función. 
                        rootScope actúa como una variable de alcance global, lo cual no es una 
                        buena práctica*/
}


/* let también es utilizado para crear variables, pero estas tienen alcance dentro del bloque de código
donde son definidas. */

// Ejemplo 3:
if (true){
    let ifScope = 159;
}

ifScope = 357; /* Esta asignación da error, ya que ifScope fué definida dentro del bloque de 
                código del if, y no puede ser modificada por fuera del mismo. */


// Ejemplo 4:
let rootScope2 = 100;

if (true){
    let rootScope2 = 200;
    console.log(rootScope2); /* Esta sentencia imprimirá el valor 200 en la consola. 
                                Esto sucede debido a que la variable rootScope2 creada dentro del if
                                solo existe en este bloque de código. No existe por fuera de este.*/
}

console.log(rootScope2); /* Esta sentencia imprimirá el valor 100 en la consola. 
                            Esto sucede debido a que la variable rootScope2 que tiene asignado el valor 100
                            existe en la raíz, pero no es modificada dentro del if porque allí se 
                            ha declarado otra variable con el mismo nombre utilizando la palabra 
                            reservada let. 
                            */


/* const se utiliza para crear constantes, lo cual indica que cuando se le asigna un valor, este no 
puede ser modificado. Tiene alcance dentro del bloque de código donde es creado. */


// Ejemplo 5:
const NAME = "Seba";
NAME = "Pepe"; // Esta sentencia no es válida, debido a que NAME ha sido definida como una constante.


// Ejemplo 6:
const rootConst = 456;

if(true){
    const rootConst = 789;
    console.log('dentro del bloque if', rootConst); /* Esta sentencia imprimirá el valor 789 en la consola.
                                                       Esto sucede ya que la constante rootConst que tiene
                                                       el valor 789, ha sido definida dentro del if. */
}

console.log('en la raíz', rootConst); /* Esta sentencia imprimirá el valor 456 en la consola debido a que
                                         la constante rootConst que tiene el valor 456 ha sifo definida
                                         en la raíz. */ 

// Hosting
/*
En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al 
principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es muy 
importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.


Teniendo en cuenta cómo funciona el hoisting, podemos llamar a una función 
y definirla más abajo, porque automáticamente JS la “subirá”. 
Así, este código funciona correctamente:

add();

function sayHi() {
   console.log("Hello");
}

Porque, aproximadamente, JS está haciendo:

function sayHi() {
   console.log("Hello");
}

add();


En el caso de las variables, es muy importante tener en cuenta que el 
hoisting solo se aplica a la declaración, y no a su asignación.

Por lo tanto, si escribimos esto, da error:

add();

function add() {
    console.log(myNumber + myNumber);
}

var myNumber = 4;
*/                                         