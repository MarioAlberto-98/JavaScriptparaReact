const  Usuario={
    name:"Mario",
    edad:20,
    email:"mario@gmail.com",
};
 document.write("<p>"+Usuario.name+"</p>");
 document.write("<p>"+Usuario.edad+"</p>");
 document.write("<p>"+Usuario.email+"</p>");

 //-----------

 const {namePersona, edadPersona, emailPersona}={
    namePersona:"Luis",
    edadPersona:23,
    emailPersona:"Luis@gmail.com"

 };
 document.write("<p>"+namePersona+"</p>");
 document.write("<p>"+edadPersona+"</p>");
 document.write("<p>"+emailPersona+"</p>");