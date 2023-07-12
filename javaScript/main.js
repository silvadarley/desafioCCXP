function addReadBorder(id) {
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

/*Aqui está chamando altomaticamente a função ao carregar a pagina
addReadBorder('quinta')*/

/*Trabalhando com o seletor de classes*/
function highlightCard(selector) {

    let element = document.querySelector(selector);
    /* 
        A propriedade toggle é para verificar se a propriedade existe ou não existe
        então passo o nome da classe criada em *CSS*
    */
    element.classList.toggle("cardHighlight");
}

/*
    Esta função retorna qual tecla do teclado foi precionada com o seu respectivo código
 */
function checkKeyBoardCode() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        alert(`Tecla Pressionada ${name} \r\nKey code: ${code}`);
    }, false)
}

//checkKeyBoardCode()

function addKeyBoardEventListners(){
    document.addEventListener('keydown',(event) => {

        let ingresso1 = document.getElementById('quinta');
        let ingresso2 = document.getElementById('sexta');
        let ingresso3 = document.getElementById('sabado');
        let ingresso4 = document.getElementById('domingo');

        let code = event.code;
        if(code == 'Digit1' || code == 'Numpad1'){
            ingresso1.classList.toggle('cardHighlight');
            ingresso2.classList.remove('cardHighlight');
            ingresso3.classList.remove('cardHighlight');
            ingresso4.classList.remove('cardHighlight');   
        }

        if(code == 'Digit2' || code == 'Numpad2'){
            ingresso1.classList.remove('cardHighlight');
            ingresso2.classList.toggle('cardHighlight');
            ingresso3.classList.remove('cardHighlight');
            ingresso4.classList.remove('cardHighlight');   
        }

        if(code == 'Digit3' || code == 'Numpad3'){
            ingresso1.classList.remove('cardHighlight');
            ingresso2.classList.remove('cardHighlight');
            ingresso3.classList.toggle('cardHighlight');
            ingresso4.classList.remove('cardHighlight');   
        }

        if(code == 'Digit4' || code == 'Numpad4'){
            ingresso1.classList.remove('cardHighlight');
            ingresso2.classList.remove('cardHighlight');
            ingresso3.classList.remove('cardHighlight');
            ingresso4.classList.toggle('cardHighlight');   
        }
    }, false);
}
addKeyBoardEventListners();
