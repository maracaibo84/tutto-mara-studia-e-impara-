for (const elemento of elementi) {
    let contenitore = document.createElement('div')
    contenitore.style.borderStyle = 'solid';
    contenitore.style.width = '70px';
    contenitore.style.position = 'absolute';
    contenitore.style.top = 70 * elemento.ypos + 'px' ;
    contenitore.style.left = 70 * elemento.xpos + 'px' ;
   contenitore.style.boxSizing = 'border-box' ;
    contenitore.style.padding = '2px'
    contenitore.style.backgroundColor = '#' + elemento ['cpk-hex']
    
    
    
    
    
    let numeroAtomico = document.createElement('samp')
    numeroAtomico.innerText = elemento.number ; 
    numeroAtomico.style.display = 'block'

    

    let simbolo = document.createElement ('a')
    simbolo.innerText = elemento.symbol 
    simbolo.style.fontSize = '25px'
    simbolo.href = elemento.source
    simbolo.style.display = 'block'
    simbolo.style.textAlign = 'center'
    
    let nomeElemento = document.createElement ('span')
    nomeElemento.innerText = elemento.name ;
    nomeElemento.style.display = 'block'
    nomeElemento.style.fontSize = '10px'
    nomeElemento.style.textAlign = 'center'
    
    contenitore.appendChild(numeroAtomico);
    contenitore.appendChild(simbolo);
    contenitore.appendChild(nomeElemento);
    
    let contenutoPrincipale = document.getElementById('contenuto-principale');
    contenutoPrincipale.style.position = 'relative'
    contenutoPrincipale.appendChild(contenitore); 
}




