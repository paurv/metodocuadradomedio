function cargarDatos(){
    document.getElementById('t01').innerHTML=`    <table id="t01" style="margin-left: auto; margin-right: auto;" >
    <tr>
      <th id="tf-1" value="0">n</th>
      <th>R(n)</th> 
      <th>R(n)<sup>2</sup></th>
      <th>M.R(n)<sup>2</sup></th>
    </tr>   
</table>`;
    var x1 = document.getElementById("id-semilla").value;
    var x2 = document.getElementById("id-dsig").value;
    var x3 = document.getElementById("id-gen").value;;
    var semilla =parseInt(x1);
    var digSig = parseInt(x2);
    var restr = parseInt(x3);
    if(x1 =="" || x2 =="" || x3==""){
        alert("Por favor llene los campos");
        return;
    }
    carga(semilla, digSig, 1, restr);
}

function carga(seed, dig,numeral, stop){
    if(numeral==(stop+1)){
        return;
    }
        let cuadrado = Math.pow(seed, 2);
        var fila = `
        <tr>
            <td>${numeral++}</td>
            <td>${seed}</td>
            <td>${cuadrado}</td>
            <td>${calmed(cuadrado,dig)}</td>
        </tr>`;
        document.getElementById('t01').innerHTML+=fila;
        var nValor = parseInt(calmed(cuadrado,dig));
    if(nValor!=0){
        carga(nValor,dig,numeral, stop);
    }
}

function calmed(number, sig){
    var output = [],
    sNumber = number.toString();
    var nmedio = [];
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(sNumber.charAt(i));
    }

    sobra = sNumber.length - sig;
    n = sobra % 2 !=0;
    var div = sobra/2;
    if(n==true){
        div = (sobra+1)/2;
        output.unshift("0");
    }

    for(var i = 1, len  = output.length; i <=(len-div); i++){
        if (i>(div))
            nmedio.push(output[i-1])
    }

    var res = "";
    for(var i = 0; i<nmedio.length; i++){
        res= res + nmedio[i];
    }
    
    return res;
}