
/**
 * @param {string} tipo_doc donde se pone
 * @param {Array} literatureData arreglos de datos 
 * @param {icon} iconData icono que lleva
 * @void 
 */
function fillLiterature(tipo_doc,literatureData,iconData) {
    //crear estructura cuerpo tarjeta Documento
    // imagen-tipo-literatura {enlace-doc > imagen-tipo-doc-extension año-doc titulo-doc}
    //                           [autor-doc > imagen-tipo-autor nombre-autor]
      

    //dentro de la tarjeta completa, el row de col -6 para facult
    let personCard_inside_classContent_divClassRow= document.createElement("div");
        personCard_inside_classContent_divClassRow.className="row";
        //personCard_inside_classContent_divClassRow. entrar 2 col 6 :fac y lugar
        personCard_inside_classContent_divClassRow.appendChild(divClassRow_col6(literatureData.pict_tipo_personal,literatureData.titulo));//facul y graduacion
        personCard_inside_classContent_divClassRow.appendChild(divClassRow_col6("map",literatureData.lugar));//map y trabaja
       


      
    //dentro de la tarjeta completa, el nombre
    let personCard_inside_classContent_p= document.createElement('p');
        personCard_inside_classContent_p.innerHTML=literatureData.dato;  

    //dentro de la tarjeta completa, el nombre
    let personCard_inside_classContent_h4= document.createElement("h4");
        personCard_inside_classContent_h4.innerHTML=literatureData.name;      

    //dentro de la tarjeta completa, el icono
    let doc_tipo_ico= document.createElement("img");
        doc_tipo_ico.src=literatureData.pict_cargo;//poner icono cargo valor
       
    /**
     * 
     * @param {nombre del vinculo del pdf} pdfLink 
     * @returns elmt div_class:main-button , href: nombre link
     */
       function buttonCV(pdfLink) {
          //dentro de la tarjeta completa, el icono
        let personCard_inside_classContent_pdfLink= document.createElement("a");
            personCard_inside_classContent_pdfLink.href="dbcv/CV_"+pdfLink+".pdf";
            personCard_inside_classContent_pdfLink.innerHTML=" Ver Curriculum";
          
          //boton de Doc_tarjeta completa
        let doc_card= document.createElement("div");
            
            doc_card.appendChild(personCard_inside_classContent_pdfLink);

        return personCard_inside_classContent_linkBtt;

    }
    
    
    //tarjeta completa
    let personCard_inside_classContent_spanHeriarchy= document.createElement('span');
        personCard_inside_classContent_spanHeriarchy.className="info";
        personCard_inside_classContent_spanHeriarchy.innerHTML=literatureData.cargo;//agrego cargo valor

    
    
    //tarjeta elemento
    let personCard_eltm_classContent= document.createElement("div");
        personCard_eltm_classContent.className="content";
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_spanHeriarchy);//agrego cargo etiqueta
        personCard_eltm_classContent.appendChild(doc_tipo_ico);//agrego cargo etiqueta
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_h4);//agrego nombre etiqueta
        
        personCard_eltm_classContent.appendChild(personCard_inside_classContent_divClassRow);//agrego div col 6

        personCard_eltm_classContent.appendChild(personCard_inside_classContent_p);// dato
        personCard_eltm_classContent.appendChild(buttonCV(literatureData.cv));// cv
       
    
    //tarjeta completa
    let personCard= document.createElement("div");
        personCard.className="col-lg-6 align-self-center";//distribucion ajustable
        personCard.appendChild(personCard_eltm_classContent);// agrego elemento class Item

   
  return personCard;
    
}


/**
 * 
 * @void 
 */
function Fill_All_Literature() {
  //declara
    let books_lit=books_INCA_proy,
        divContenedor=null;
  // llenar libros
    let lugar_libro=$('#bks')[0],
      ico_book='../images/icos/book-64.ico'

    for (const elemBk of books_lit) {
      lugar_libro.appendChild(fillLiterature('pdf',elemBk,ico_book).cloneNode(true))
    }   
  
  
}