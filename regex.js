// Poner un guión "-" entre los espacios en blanco
var texto = "hola mundo !";
var pattern = /\s/gi;
var nuevoTexto = texto.replace(pattern, '-');

console.log('hola mundo ! \n', nuevoTexto);

// Poner un guión "-" después de los 4 primeros caracteres y después de los 5 caracteres siguientes
//Por ejemplo: holamundo! --> hola-mundo-!

var texto = "holamundo!";
var pattern = /(\w{4})(\w{5})(\w*)/gi;
var nuevoTexto = texto.replace(pattern, '$1-$2-$3');

console.log('holamundo! \n', nuevoTexto);

// El resultado es un objeto pattern de regex
// recordar escapar "\"
var pattern = new RegExp("(\\w{4})(\\w{5})(\\w*)", "gi");
console.log(pattern); // output /(\w{4})(\w{5})(\w*)/gi
console.log(pattern.source); //  out del pattern en forma de string
var texto = "holamundo!";
var nuevoTexto = texto.replace(pattern, '$1-$2-$3');
console.log(nuevoTexto);


// Hacer match de todo el que cumple el pattern
// Fíjate que sólo hay un objeto (pattern) y el flag globa. 
// EL objeto va buscando uno a uno hasta no encontrar más y sale del bucle while. 
// Si ponemos el pattern directamente en el while tendremos un loop infinito 
//while (letra = /([a-z])/gi.exec(letras))  y en chrome es shit + esc y cerrar la pestaña https://stackoverflow.com/questions/905322/how-do-you-stop-an-infinite-loop-in-javascript
var letras = "a,b,c,d,e,f,g,i";
var letra;
var pattern = /([a-z])/gi;
while (letra = pattern.exec(letras)) {
  console.log(letra[0]);
}

// Testear si una cadena de texto cumple o no el pattern
// Si ponemos el flag g, cada vez que ejecutemos , el puntero se mueve y se testeará desde esa posición para la próxima vez. 
// https://stackoverflow.com/questions/47229364/validate-multiple-dates-in-regular-expression-with-the-same-pattern
var texto = "abcd12kdsf";
var pattern = /^[a-z]*[0-9]{2}[a-z]*$/gi;
console.log(pattern.test(texto));

//un ejemplo del movimiento del puntero, la solución para que esto salga bien es quitar el g
var s = "2009/03/10";
var regex=/^\d{4}[/]\d{2}[/]\d{2}$/g;
console.log(regex.test(s));
console.log(regex.lastIndex);
console.log(regex.test(s));
console.log(regex.lastIndex);
console.log(regex.test(s));
console.log(regex.lastIndex);
console.log(regex.test(s));
console.log(regex.lastIndex);



// Referencias
// - https://www.javascripture.com/RegExp