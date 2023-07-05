// para controlar cambio de tamaño de ventana
function cambioWindowsAlert(params) {
    var pageSize = {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
      let perras= document.getElementsByClassName('text');
      if (pageSize.width<850) {
        let perr="w:"+$(this).width()+" h:"+$(this).height();
        //alert(perr);
        console.log("Ancho de la página: " + pageSize.width);
        console.log("Alto de la página: " + pageSize.height);
        //coger los slides text #section-1 .content-slider nav .controls label span.text
        const textSlides = $('#section-1 .content-slider nav .controls label span.text');        
        if (perras.length) {
            for(var _this of perras) _this.hidden=true;//oculto
            
        };
    } else  {
        for(var _this of perras) _this.hidden=false;//oculto
};      
    
};

$(window).load(function() {    
    cambioWindowsAlert();
})
.resize(function() {    
    cambioWindowsAlert();
});

function toogleView(quien){
	let  piss=$("#"+quien)[0];//coger el elemt de consulta
	piss.style.display = "none"== piss.style.display ? "block":"none";
}

function toogleViewSimbol(ordena,quien){
	let ser=$("#"+ordena)[0];
	ser.innerHTML=ser.innerHTML.includes(" - ")? " + ": " - ";
	toogleView(quien);
}

function toogleViewSigned(ordena,quien){
	let ser=$("#"+ordena)[0];
	ser.innerHTML=ser.innerHTML.includes("menos")? " Ver m&aacute;s ": " Ver menos ";
	toogleView(quien);
}
/**
 * Cambiar visibilidad de los div
 * @param {*} elemntsAOcultar pasar la etiqueta name con los nombres a buscar que ocultar 
 * @param {*} elemnts_AMostrar pasar la etiqueta name con los nombres a buscar que mostrar
 */
function paginarDiv(elemntsAOcultar,elemnts_AMostrar) {
    let serOc=document.getElementsByName(elemntsAOcultar),
        serMos=document.getElementsByName(elemnts_AMostrar);
    for (const divSelect of serOc) divSelect.style.display ="none";
    for (const divSelect of serMos) divSelect.style.display ="block";
}

//iui
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });