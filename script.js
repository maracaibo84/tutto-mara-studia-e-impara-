

let contenitore = document.createElement('div')
contenitore.style.borderStyle = 'solid';
contenitore.style.width = '70px';
contenitore.style.height = '70px';
contenitore.style.position = 'absolute' ;
contenitore.style.top = '500px';
contenitore.style.left = '500px';






let numeroAtomico = document.createElement('samp')
numeroAtomico.innerText = '1' ;

let simbolo = document.createElement ('a')
simbolo.innerText = 'H'
simbolo.style.fontSize = '40px'
simbolo.href = 'https://it.wikipedia.org/wiki/Idrogeno'

let nomeElemento = document.createElement ('span')
nomeElemento.innerText = 'idrogeno'

contenitore.appendChild(numeroAtomico);
contenitore.appendChild(simbolo);
contenitore.appendChild(nomeElemento);

let contenutoPrincipale = document.getElementById('contenuto-principale');

contenutoPrincipale.appendChild(contenitore);