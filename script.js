document.addEventListener('DOMContentLoaded', function () {
    multiply();
    showContent("gameselector-valorant");

    document.getElementById('havocdpi').addEventListener('input', function () {
        document.getElementById('havocdpivalue').value = this.value;
        multiply();
    });

    document.getElementById('havocdpivalue').addEventListener('input', function () {
        document.getElementById('havocdpi').value = this.value;
        multiply();
    });


    document.getElementById('valorantsens').addEventListener('input', function () {
        document.getElementById('valorantsensvalue').value = this.value;
        multiply();
    });

    document.getElementById('valorantdpi').addEventListener('input', function () {
        document.getElementById('valorantdpivalue').value = this.value;
        multiply();
    });

    document.getElementById('valorantsensvalue').addEventListener('input', function () {
        document.getElementById('valorantsens').value = this.value;
        multiply();
    });

    document.getElementById('valorantdpivalue').addEventListener('input', function () {
        document.getElementById('valorantdpi').value = this.value;
        multiply();
    });

    document.getElementById('cs2sens').addEventListener('input', function () {
        document.getElementById('cs2sensvalue').value = this.value;
        multiply();
    });

    document.getElementById('cs2dpi').addEventListener('input', function () {
        document.getElementById('cs2dpivalue').value = this.value;
        multiply();
    });

    document.getElementById('cs2sensvalue').addEventListener('input', function () {
        document.getElementById('cs2sens').value = this.value;
        multiply();
    });

    document.getElementById('cs2dpivalue').addEventListener('input', function () {
        document.getElementById('cs2dpi').value = this.value;
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
    // document.getElementById('valorantresult').innerHTML = 'Valorant to Havoc sens - ' + Math.round(valtohavocsens * 100)/100;
    document.getElementById('valorantresult').innerHTML = 'Havoc sens - ' + Math.round(valtohavocsens * 100) / 100;

    var cs2tohavocsens = (0.41 * cs2sens) * (cs2dpi / havocdpi);
    // document.getElementById('cs2result').innerHTML = 'Counter Strike 2 to Havoc sens - ' + Math.round(cs2tohavocsens * 100)/100;
    document.getElementById('cs2result').innerHTML = 'Havoc sens - ' + Math.round(cs2tohavocsens * 100) / 100;
}

function showContent(selectedValue) {
    // Hide all content elements
    document.getElementById('gameselector-valorant').style.display = 'none';
    document.getElementById('gameselector-cs2').style.display = 'none';

    // Show the selected content based on the dropdown value
    document.getElementById(selectedValue).style.display = 'block';
}