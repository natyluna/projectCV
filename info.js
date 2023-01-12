
fetch('datos.json')
.then(response=>response.json())
.then(data=>{
    nombre = data['resultados'][0]['nombre']['primero'];
    apellido= data['resultados'][0]['nombre']['último'];
    mail = data['resultados'][0]['correo electrónico'];
console.log(data);
    document.getElementById('displayname').innerHTML=nombre+apellido;
    document.getElementById('correo').innerHTML=mail;
});


document.getElementById('infoPersonal').addEventListener('click', function(){
    document.getElementById('infoPers').style.display='block';
    
  
})

document.getElementById('experiencia').addEventListener('click', function(){
    document.getElementById('exp').style.display='block';
})

document.getElementById('habilidad').addEventListener('click', function(){
    document.getElementById('hab').style.display='block';
})

