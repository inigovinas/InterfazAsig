 var estoyDibujando;
 function comenzar(){ 
 	 pizarra = document.getElementById('canvas'); 
	 ctx = pizarra.getContext('2d'); 
	 //Dejamos todo preparado para escuchar los eventos 
	 document.addEventListener('mousedown',pulsaRaton,false); 
	 document.addEventListener('mousemove',mueveRaton,false); 
	 document.addEventListener('mouseup',levantaRaton,false); 
}
function pulsaRaton(capturo){ 
	estoyDibujando = true; 
	//Indico que vamos a dibujar 
	ctx.beginPath(); 
	//Averiguo las coordenadas X e Y por dónde va pasando el ratón 
	ctx.moveTo(capturo.clientX,capturo.clientY); 
}
function mueveRaton(capturo){ 
	if(estoyDibujando){ 
		//indicamos el color de la línea 
		ctx.strokeStyle='#000'; 
		//Por dónde vamos dibujando 
		ctx.lineTo(capturo.clientX,capturo.clientY); 
		ctx.stroke(); 
		} 
}

function levantaRaton(capturo){ 
//Indico que termino el dibujo 
ctx.closePath(); 
estoyDibujando = false; 
}