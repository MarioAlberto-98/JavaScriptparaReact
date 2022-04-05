const peticion=async ()=>{
    setTimeout(()=>{
        const datos={
            id:3,
            name:"Mario Albert",
            username:"Mar",
            email:"mar@gmail.com",
        };
        console.log(datos);
    }, 1000);
}

peticion().then(console.log);


