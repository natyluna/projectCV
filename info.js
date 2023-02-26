
fetch('datos.json')
.then(response=>response.json())
.then(data=>{
    nombre = data['resultados'][0]['nombre']['primero'];
    apellido= data['resultados'][0]['nombre']['último'];
    mail = data['resultados'][0]['correo electrónico'];
    fechanac = data['resultados'][0]['dob']['fecha'];
    genero = data['resultados'][0]['género'];
    tel = data['resultados'][0]['teléfono'];
    pais = data['resultados'][0]['localización']['país'];
    dom = data['resultados'][0]['localización']['calle']['nombre'];
    num = data['resultados'][0]['localización']['calle']['número'];


/* console.log(data); */
    document.getElementById('displayname').innerHTML=nombre+apellido;
    document.getElementById('correo').innerHTML=mail;
    document.getElementById('fechanac').innerHTML=fechanac;
    document.getElementById('genero').innerHTML=genero;
    document.getElementById('tel').innerHTML= tel;
    document.getElementById('pais').innerHTML=pais;
    document.getElementById('dom').innerHTML = dom+" - "+num;
});



document.getElementById('experiencia').addEventListener('click', function(){
    let infoExperiencia = document.getElementById('exp').style.display;
    document.getElementById('exp').style.display= infoExperiencia=='block' ? 'none' : 'block';
})

document.getElementById('habilidad').addEventListener('click', function(){
    let infoHabilidad = document.getElementById('hab').style.display;
    document.getElementById('hab').style.display= infoHabilidad=='block' ? 'none' : 'block';
})

