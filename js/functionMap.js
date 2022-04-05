const numeros=[12,2,3,5];
 document.write(numeros);

 //--------------
 const num=[12,2,3,0];
 document.write("<ul>");
 for(numero in num){
     document.write("<li>");
     document.write(numero);
     document.write("</li>");

 }
document.write("</ul>");

//------------------

const number=[1,2,3,4,5,6,7,8,9];
document.write("<ul>");
const nuevo=number.map((numbers) => numbers+1);
document.write("</lu>");
document.write(number);
document.write(nuevo);



//----------
//Array Destructuring
const [usuario1]=["Pepe", "Mario", "Shirel"];// Elige el primer dato del array
document.write(usuario1);
const [ , ,person3]=["Pepe", "Mario", "Shirel"];// Elige el ultimo dato del array
document.write(person3);

//---------------------
//Spread Operator

const frutas =["manzana","uva","melon"];
const citricos=["naranja","limon","toronja"];
const newDatas = [...frutas, ...citricos];
document.write(newDatas);
