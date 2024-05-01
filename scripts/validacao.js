    const form = document.querySelector('#form');
    const campos = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    //const radioButton = document.querySelectorAll('input[name="opcao"]')
    const emailRegex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i
    const data = document.getElementById("DataEntrada");
    document.getElementById('valor').textContent = calcValor();
    const btn = document.querySelector('#send');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        nameValidade();
        emailValidade();
        dataEntradaValidate();
        numNoitesValidate();
        numHospedesValidate();
        //promocaoValidate();
        calcValor();
        //form.submit();
    });
    form.addEventListener("input", ()=>{
        mascarasData();
    });
    btn.addEventListener("click",(event)=>{
        event.preventDefault();
        exibirValor();
    });
    

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display='block';
    }
    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display='none';
    }

    function nameValidade(){
        if(campos[0].value.length < 3){
            setError(0);
            //console.log('Nome deve ter no mínimo 3 caracteres');
        }else{
            removeError(0);
        }
    }

    function emailValidade(){
        if(!emailRegex.test(campos[1].value)){
            setError(1);
        }else{
            removeError(1);
        }
    }
    function dataEntradaValidate(){
        if (campos[2].value === "") {
            setError(2);
        } else {
            removeError(2);
        }
    }
    function numNoitesValidate(){
        if (campos[3].value === "") {
            setError(3);
            console.log(campos[3].value);
        } else {
            removeError(3);
        }
    }
    function numHospedesValidate(){
        if (campos[4].value === "") {
            setError(4);
        } else {
            removeError(4);
        }
    }
    // function promocaoCheck(radioButton){
    //     let isChecked = false;
    //     radioButton.forEach((radio)=>{
    //         if(radio.checked){
    //             isChecked = true;
    //         }
    //     });
    //     return isChecked;
    // }
    // function promocaoValidate(){
    //     if(!promocaoCheck(radioButton)){
    //         setError(5);
    //     }else{
    //         removeError(5);
    //     }
    // }
    function mascaraData(){
        $(data.mask('00/00/0000'))
    }
    function mascarasData(){
        var limpar = data.value.replace(/\D/g,"").substring(0,8);
        var numArray = limpar.split("");
        var numFormat = "";
        if(numArray.length>0){
            numFormat+= `${numArray.slice(0,2).join("")}`;
        }
        if(numArray.length>2){
            numFormat+= `/${numArray.slice(2,4).join("")}`;
        }
        if(numArray.length>4){
            numFormat+= `/${numArray.slice(4,8).join("")}`;
        }
        data.value = numFormat;
    }
    function calcValor(){
        let dias = campos[3].value;
        console.log(dias);
        let hospedes = campos[4].value;
        console.log(hospedes);
        let result = hospedes*50;
        console.log(result);
        result *= dias;
        console.log(result)
        return String(result);
    }
    function exibirValor(){
        document.getElementById('valor').textContent = calcValor();
    }