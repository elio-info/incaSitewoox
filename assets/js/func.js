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

const navegaCV=["cvpag1","cvpag2","cvpag3"]; //navegacion los CV
let posc_navegaCV=0;
/**
 * Cambiar visibilidad de los div *  
 * @param {*} posc_elemnts_AMostrar posicion de la pag que mostrar
 * @param {*} Lista_elemnts listado de nomencladores
 */
function paginarDiv(posc_elemnts_AMostrar,Lista_elemnts) {
    if(posc_elemnts_AMostrar<0 ) posc_elemnts_AMostrar=Lista_elemnts.length-1;
    if( posc_elemnts_AMostrar>= Lista_elemnts.length) posc_elemnts_AMostrar=0;

    for (let divSelect =0 ;divSelect<Lista_elemnts.length; divSelect++){
        li_id_selected=$("#"+Lista_elemnts[divSelect])[0]; //selecionar la li
        li_id_selected.className =li_id_selected.id==Lista_elemnts[posc_elemnts_AMostrar]? "active": "";   // si es la li selecionada, la activo
        
        let divsSelected=document.getElementsByName(navegaCV[divSelect]);  //coger todos las div de name ¿?          
            for (const Selectdiv of divsSelected) 
                 Selectdiv.style.display = Selectdiv.attributes["name"].value==Lista_elemnts[posc_elemnts_AMostrar]? "block" : "none";
                 
    }
    posc_navegaCV =   posc_elemnts_AMostrar;
    perr=$("#"+Lista_elemnts[posc_elemnts_AMostrar]);
    
    $("#"+Lista_elemnts[posc_elemnts_AMostrar])[0].focus();
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