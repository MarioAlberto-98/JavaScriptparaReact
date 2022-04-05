const nombre="Mar";
const edad= new Date().getFullYear()-2000;
console.log("Bienvenido", nombre, "tu edad es de", edad);
const mensaje=`Bienvenido ${nombre}, tienes la edad de ${edad}`;
document.write(mensaje);

//-----------
//Intervalos time
const saludo=()=>{
    document.write("<li>Hola mundo </li>");
};
document.write("<ol>");
setInterval(saludo,5000);
document.write("</ol>");

