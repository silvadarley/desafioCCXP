function addReadBorder(id){
    element = document.querySelector("#"+id);
    element.style.border= "5px solid red";
}

/*Aqui está chamando altomaticamente a função ao carregar a pagina*/
addReadBorder('quinta')