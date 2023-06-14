function calcular () {
    var monto = document.getElementById("pesos").value;
    var total = 0;

    if (monto){
        total = (monto / 17.23);
    }
    document.getElementById("total").value=total.toFixed(2);
}


function limpiar() {
    document.getElementById ("botones").reset();
}

