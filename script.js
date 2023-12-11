document.addEventListener('DOMContentLoaded', function () {
    multiply();

    document.getElementById('havocdpi').addEventListener('input', function () {
        document.getElementById('havocdpivalue').innerHTML = this.value;
        multiply();
    });

    document.getElementById('valorantsens').addEventListener('input', function () {
        document.getElementById('valorantsensvalue').innerHTML = this.value;
        multiply();
    });

    document.getElementById('valorantdpi').addEventListener('input', function () {
        document.getElementById('valorantdpivalue').innerHTML = this.value;
        multiply();
    });

    document.getElementById('cs2sens').addEventListener('input', function () {
        document.getElementById('cs2sensvalue').innerHTML = this.value;
        multiply();
    });

    document.getElementById('cs2dpi').addEventListener('input', function () {
        document.getElementById('cs2dpivalue').innerHTML = this.value;
        multiply();
    });

});

function multiply() {
    // havoc
    var havocdpi = document.getElementById('havocdpi').value;

    // valorant
    var valorantdpi = document.getElementById('valorantsens').value;
    var valorantsens = document.getElementById('valorantdpi').value;

    // cs2
    var cs2dpi = document.getElementById('cs2sens').value;
    var cs2sens = document.getElementById('cs2dpi').value;


    // results
    var valtohavocsens = (valorantsens * 0.65 * 3.182) * (valorantdpi / havocdpi);
    // document.getElementById('valorantresult').innerHTML = 'Valorant to Havoc sens - ' + valtohavocsens;
    document.getElementById('valorantresult').innerHTML = 'Valorant to Havoc sens - ' + Math.round(valtohavocsens * 100)/100;

    var cs2tohavocsens = (0.41 * cs2sens) * (cs2dpi / havocdpi);
    // document.getElementById('cs2result').innerHTML = 'Counter Strike 2 to Havoc sens - ' + cs2tohavocsens;
    document.getElementById('cs2result').innerHTML = 'Counter Strike 2 to Havoc sens - ' + Math.round(cs2tohavocsens * 100)/100;
}