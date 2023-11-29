// para controlar cambio de tamaño de ventana
function cambioWindowsAlert(params) {
    var pageSize = {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
      let perras= document.getElementsByClassName('text');
      if (pageSize.width<850) {
        //size 
        let perr="w:"+$(this).width()+" h:"+$(this).height();
        //alert(perr);
        console.log("Ancho de la página: " + pageSize.width);
        console.log("Alto de la página: " + pageSize.height);
        //coger los slides text #section-1 .content-slider nav .controls label span.text
        const textSlides = $('#section-1 .content-slider nav .controls label span.text');        
        if (perras.length >0) {
            for(var _this of perras) _this.hidden=true;//oculto            
            };
        } else  {
            for(var _this of perras) _this.hidden=false;//muestro
        };      

    /*} else  {
        for(var _this of perras) _this.hidden=false;//oculto
};      */
    
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

const navegaCV= typeof equip_INCA_proy ?? Math.trunc(equip_INCA_proy.length/4 ) + 1 //navegacion los CV ["cvpag1","cvpag2","cvpag3"];
let posc_navegaCV=1;
/**
 * Cambiar visibilidad de los div *  
 * @param {*} posc_elemnts_AMostrar posicion de la pag que mostrar
 * @param {*} cantidad_elemnts cantidad de elem agrupados en 4
 */
function paginarDiv(posc_elemnts_AMostrar,cantidad_elemnts) {
    if(posc_elemnts_AMostrar < 1 ) posc_elemnts_AMostrar=cantidad_elemnts;
    if( posc_elemnts_AMostrar> cantidad_elemnts) posc_elemnts_AMostrar = 1;

    for (let divSelect =1 ;divSelect<cantidad_elemnts+1; divSelect++){
        li_id_selected=$("#cvpag"+divSelect)[0]; //selecionar la li
        li_id_selected.className =
            (li_id_selected.id=="cvpag"+posc_elemnts_AMostrar)
                ? "active": "";   // si es la li selecionada, la activo
        
        let divsSelected=$("#"+lugar_listPers+ divSelect)[0];  //coger div row         
            divsSelected.style = 
                posc_elemnts_AMostrar == divSelect ?
                    " " :
                    "display : none";
                 
    }
    posc_navegaCV =   posc_elemnts_AMostrar;
    window.location.href="#topCabeza"   
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

  /**
   * 
   * @param {string} lugar_list donde se pondra
   * @param {string} ruta_base donde esta la img
   * @param {int} cant_vinc cantidad de vinculos
   * @param {string} img_clss clase de la imagen
   */
  function FillLinksImage(lugar_list,ruta_base,cant_vinc=1,img_clss,nombre_buscar) {
    for (let index_vinc = 1; index_vinc <= cant_vinc; index_vinc++) {
        
        //imagen link
        let img_src=ruta_base +( index_vinc<10 ? "0":"" ) + index_vinc+".jpg",
            imgen_link=document.createElement("img"),
            element_vinc =document.createElement("a");
        
        imgen_link.setAttribute('width','100px') ;
        imgen_link.setAttribute('height',"200px");
        imgen_link.className=img_clss;
        imgen_link.src=img_src;

        
        element_vinc.href= "#";
        element_vinc.setAttribute('onclick', "VerteSola(1,'"+img_src+"');")
        element_vinc.setAttribute('data-lightbox', nombre_buscar);
        element_vinc.appendChild(imgen_link)
       
        $('#'+lugar_list)[0].appendChild(element_vinc.cloneNode(true)) 
    }
    
  }

  function VerteSola(params=1,img='') {
   if (params) {
    var popUp=$('#popUp')[0],
        my_img=$('#img01')[0];
    $('#popUp')[0].className=  "modal";
    
    var screenWidth = popUp.clientWidth;
    var screenHeight = popUp.clientHeight;
    my_img.width=screenWidth;
    my_img.height=screenHeight;
    my_img.src=img;

    
    $('#popUp')[0].showModal();

    var lapee=""
   }else{
    $('#popUp')[0].className=  "modal-unshow"
    $('#popUp')[0].close();
}
    

    }
  