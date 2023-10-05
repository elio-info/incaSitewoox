let equip_INCA_proy= [
    { 
        cargo:" * Investigador Titular",
        name:" Michel Ruiz S&acute;nchez",
        titulo:"Dr.C. Agr&ocute;nomas Ingeniero Agr&ocute;nomo",
        pict_cargo:"user-tie",
        lugar:"UCTB Los Palacios. Dpendencia Instituto Nacional de Ciencias Agr�colas (INCA).",
        pict_tipo_personal:"tree",
        dato :"Personal Directivo del Proyecto",
        cv:"Michel"
    }
]

/**
 * 
 * @param {equip_INCA_proy[0]} personData 
 * @returns 
 */
function fillPerson(personData) {
    //crear estructura cuerpo tarjeta CV
    //
    /**
     * 
     * @param {texto} i_class nombre de la clse que se pondre
     * @param {texto} list_title texto que se pondra dentro de la etiqueta
     * @returns div class x y con texto dentro del span
     */
    function divClassRow_col6(i_class,list_title) {
        //nombre de algo en tarjeta con div y span
        let personCard_inside_classContent_span= document.createElement('span');
            personCard_inside_classContent_span.class="list";
          personCard_inside_classContent_span.innerHTML= list_title; 
          
        //dentro de la tarjeta completa, el icono
        let personCard_inside_classContent_iconValue= document.createElement("i");
            personCard_inside_classContent_iconValue.class=i_class;


          // personCard_inside_classContent_icon.class=;//dentro de la tarjeta completa, el col del row
        let personCard_inside_classContent_divClassRow_col6= document.createElement("div");
            personCard_inside_classContent_divClassRow_col6.class="col-6";
            personCard_inside_classContent_divClassRow_col6.appendChild(personCard_inside_classContent_iconValue);
            personCard_inside_classContent_divClassRow_col6.appendChild(personCard_inside_classContent_span);

        return personCard_inside_classContent_divClassRow_col6;
    }
    

    //dentro de la tarjeta completa, el row de col -6 para facult
    let personCard_inside_classContent_divClassRow= document.createElement("div");
        personCard_inside_classContent_divClassRow.class="row";
        //personCard_inside_classContent_divClassRow. entrar 2 col 6 :fac y lugar
        personCard_inside_classContent_divClassRow.appendChild(divClassRow_col6(personData.pict_tipo_personal,personData.titulo));//facul y graduacion
        personCard_inside_classContent_divClassRow.appendChild(divClassRow_col6("map",personData.lugar));//map y trabaja
       


      
    //dentro de la tarjeta completa, el nombre
    let personCard_inside_classContent_p= document.createElement('p');
        personCard_inside_classContent_p.innerHTML=personData.dato;  

    //dentro de la tarjeta completa, el nombre
    let personCard_inside_classContent_h4= document.createElement("h4");
        personCard_inside_classContent_h4.innerHTML=personData.name;      

    //dentro de la tarjeta completa, el icono
    let personCard_inside_classContent_icon= document.createElement("i");
        personCard_inside_classContent_icon.class="fa fa-"+personData.pict_cargo;//poner icono cargo valor
       
    /**
     * 
     * @param {nombre del vinculo del pdf} pdfLink 
     * @returns elmt div_class:main-button , href: nombre link
     */
       function buttonCV(pdfLink) {
          //dentro de la tarjeta completa, el icono
        let personCard_inside_classContent_pdfLink= document.createElement("a");
            personCard_inside_classContent_pdfLink.href="dbcv/CV_"+pdfLink+".pdf";
          
          //boton de CVtarjeta completa
        let personCard_inside_classContent_linkBtt= document.createElement("div");
            personCard_inside_classContent_linkBtt.class="main-button";
            personCard_inside_classContent_linkBtt.appendChild(personCard_inside_classContent_pdfLink);

        return personCard_inside_classContent_linkBtt;

    }
    
    
    //tarjeta completa
    let personCard_inside_classContent_spanHeriarchy= document.createElement('span');
        personCard_inside_classContent_spanHeriarchy.class="info";
        personCard_inside_classContent_spanHeriarchy.innerHTML=personData.cargo;//agrego cargo valor

    
    
    //tarjeta elemento
    let personCard_eltm_classContent= document.createElement("div");
        personCard_eltm_classContent.class="content";
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_spanHeriarchy);//agrego cargo etiqueta
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_icon);//agrego cargo etiqueta
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_h4);//agrego nombre etiqueta
        
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_divClassRow);//agrego div col 6

        personCard_eltm_classContent.appendChild(personCard_inside_classContent_p);// dato
        personCard_eltm_classContent.appendChild(buttonCV(personData.cv));// cv
       
    
    //tarjeta completa
    let personCard= document.createElement("div");
        personCard.class="col-lg-6 align-self-center";//distribucion ajustable
        personCard.appendChild(personCard_eltm_classContent);// agrego elemento class Item

   
  return personCard;
    
}

/**
 * 
 * @param {indx} indx indice que tendra el template del CV
 * @param {cvCard_persn} cvCard_persn cv creado desde la persona
 * @returns CardTempleta
 */
function cvPag_Template(indx,cvCard_persn) {
  //imagen link
  let cvCard_teml_item_row_col6_imgen=document.createElement("img");
      cvCard_teml_item_row_col6_imgen.src="assets/images/cosas/pdf-file.svg";
  //img
  let cvCard_teml_item_row_col6_img=document.createElement("div",{"class":"image"});
      cvCard_teml_item_row_col6_img.appendChild(cvCard_teml_item_row_col6_imgen);
  //col 6
  let cvCard_teml_item_row_col6=document.createElement("div",{"class":"col-lg-6"});
      cvCard_teml_item_row_col6.appendChild(cvCard_teml_item_row_col6_img);  
  //row
  let cvCard_teml_item_row=document.createElement("div",{"class":"row","id":"perrow"+indx});
    cvCard_teml_item_row.appendChild(cvCard_teml_item_row_col6);
    cvCard_teml_item_row.appendChild(cvCard_persn)
  //item
  let cvCard_teml_item=document.createElement("div",{"class":"item"});
      cvCard_teml_item.appendChild(cvCard_teml_item_row);

   
  let cvCard_teml=document.createElement("div");
  //tarjeta completa lantilla
    cvCard_teml.id="cvTmpl"+indx;//distribucion ajustable
    cvCard_teml.class="col-lg-6 col-lg-6 col-sm-6";//distribucion ajustable
    cvCard_teml.appendChild(cvCard_teml_item);// agrego elemento class Item

   
  return cvCard_teml;
}

/**
 * 
 * @param {equip_INCA_proy} listPers 
 */
function FillPersons() {
  //alert("asdhvaskdvas");
  let nucleo=document.getElementsByName("cvpag");
  let plant=cvPag_Template(1,fillPerson(equip_INCA_proy[0]));
  //let perrrr=;
  nucleo.appendChild(plant);
  
}