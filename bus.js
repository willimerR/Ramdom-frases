let descargar = document.querySelector('.introdu');
let descargaar = document.querySelector('.intro');
let Descargaapp = document.querySelector('.Descargaapp');
let dispo = document.getElementById('Dispo');
let cabcelar = document.getElementById('cancelar');
let cancelarq = document.getElementById('cancelarqr');
let frases = document.querySelector('.container-frase p');
let control1 =document.querySelector('.volumen');
let autor =document.querySelector('.autor');
let copy = document.querySelector('.copy');
let twitter = document.querySelector('.twiter');

    
setTimeout(()=>{
    descargar.classList.add('activa');
    descargaar.classList.add('activa');

},10000);



let splash = document.querySelector('.introduccion');
document.addEventListener('DOMContentLoaded',function(){

setTimeout(()=>{
    splash.classList.add('active');

},5000);

});

cancelarq.onclick =()=>{
    Descargaapp.classList.remove('activas');
}


cabcelar.onclick = ()=>{
    descargaar.classList.remove('activa');
}

dispo.onclick =function(){
    Descargaapp.classList.add('activas');
    descargaar.classList.remove('activa');
    //console.log("hi")
    
    
 };
 control1.addEventListener('click',()=>{
    const voz = new SpeechSynthesisUtterance(`${frases.innerText} escrito por ${autor.innerText}`);
//console.log("hi")
    speechSynthesis.speak(voz);
 });

copy.addEventListener('click',()=>{
navigator.clipboard.writeText(`${frases.innerText}`);

});

twitter.addEventListener('click',()=>{
    let navegar = `https://twitter.com/intent/tweet?url=${frases.innerText}`;

    window.open(navegar,"_blank");
   


});

let frasesPro=[
    {
        frases: "Lo mejor de los booleanos es que si te equivocas estás a un sólo bit de la solución correcta.",
        Autor: "-Bill Gates-"
    },
    {
        frases: "No te preocupes si no funciona bien Primero resuelve el problema.",
        Autor: "-John Johnson-"
    },
    {
        frases: "El optimismo es un riesgo laboral de la programación.",
        Autor: "-pedro martinez-"
    },
    {
        frases: "Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día.",
        Autor: "-Willimer Reyes-"
    },
    {
        frases: "Las contraseñas son como la ropa interior. No puedes dejar que nadie la vea.",
        Autor: "-Chris Pirillo-"
    },
    {
        frases: "No documentes el problema; arréglalo.",
        Autor: "-hernandez-"
    },
]

let frente = document.querySelector('.frente');
let nfrase = document.querySelector('.nfrase');


nfrase.addEventListener('click',()=>{
let random = Math.floor(Math.random()* frasesPro.length);

let pintar =  frente.innerHTML=  frasesPro[random].frases;
let autor1 =  autor.innerHTML=  frasesPro[random].Autor;
//console.log(pintar);

})

//setInterval(()=>{
    let random1 = Math.floor(Math.random()* frasesPro.length);
   let pintaqr =  frente.innerHTML=  frasesPro[random1].frases;
    let autor1 =  autor.innerHTML=  frasesPro[random1].Autor;
    
//}, 5000);