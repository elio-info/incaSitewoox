
/**
 * @param {string} tipo_doc donde se pone
 * @param {Array} literatureData arreglos de datos 
 * @param {icon} iconDatAutor icono que lleva
 * @void 
 */
function fillLiterature(tipo_doc,literatureData,iconDatAutor) {
    //crear estructura cuerpo tarjeta Documento
    // imagen-tipo-literatura {enlace-doc > imagen-tipo-doc-extension año-doc titulo-doc}
    //                           [autor-doc > imagen-tipo-autor nombre-autor]
    
	//dentro de la tarjeta completa, el nombre
    let literatureCard_p= document.createElement('p');
        
	 //dentro de la tarjeta completa, agrego el icono del tipo de Doc
    let doc_tipo_ico= document.createElement("img");
        doc_tipo_ico.src=tipo_doc.lugar;//poner icono lugar valor
        doc_tipo_ico.class=tipo_doc.clase;//poner icono clase valor

		literatureCard_p.appendChild(doc_tipo_ico);//agrego dentro de la tarjeta completa, agrego el icono del tipo de Doc
		
  //dentro de la tarjeta completa, el icono
	let doc_pdfLink= document.createElement("a");
		doc_pdfLink.href=literatureData.rutaDoc;
		doc_pdfLink.innerHTML=literatureData.titulo + "<br>";
          
		literatureCard_p.appendChild(doc_pdfLink);//agrego dentro de la tarjeta completa, enlace de Doc
    
	 //dentro de la tarjeta completa, el icono
    let autor_tipo_ico= document.createElement("img");
        autor_tipo_ico.src=iconDatAutor.lugar;//poner icono cargo valor
    	autor_tipo_ico.class=iconDatAutor.clase;//poner icono clase valor

   		literatureCard_p.appendChild(autor_tipo_ico);//agrego dentro de la tarjeta completa, enlace de Doc
	//crear el div
	let div_literatura= document.createElement("div");	
		div_literatura.appendChild(literatureCard_p);//agrego dentro de la tarjeta completa, agrego el p
		
  return div_literatura;
    
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
      ico_book={lugar:'../images/icos/book-64.ico',clase:'ico-img'},
	  ico_people={lugar:'../images/icos/edit-user-64.ico',clase:'ico-img'}
    for (const elemBk of books_lit) {
      lugar_libro.appendChild(fillLiterature(ico_book,elemBk,ico_people).cloneNode(true))
    }   
  
  
}