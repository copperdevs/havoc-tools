document.addEventListener('DOMContentLoaded', function () {
    multiply();
    showGameSelectorContent(localStorage.getItem('gameselector'));
    document.getElementById('gameselector').value = localStorage.getItem('gameselector');

    showUnitSelectorContent(localStorage.getItem('unitselector'));
    document.getElementById('unitselector').value = localStorage.getItem('unitselector');

    darkModeToggle(localStorage.getItem('themeselector'));
    document.getElementById('themeselector').value = localStorage.getItem('themeselector');


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


    // sens results
    var valtohavocsens = (valorantsens * 1.44) * (valorantdpi / havocdpi);
    document.getElementById('valorantresult').innerHTML = 'Havoc sens - ' + Math.round(valtohavocsens * 100) / 100;

    var cs2tohavocsens = (0.45 * cs2sens) * (cs2dpi / havocdpi);
    document.getElementById('cs2result').innerHTML = 'Havoc sens - ' + Math.round(cs2tohavocsens * 100) / 100;

    // 360 distance results - valorant
    var val360centimeters = 13067/(valorantsens * valorantdpi);
    var val360inches = val360centimeters / 2.54000562223471;

    document.getElementById('valorant360distanceinches').innerHTML = '360° Distance - ' + val360inches + 'in';
    document.getElementById('valorant360distancecentimeters').innerHTML = '360° Distance - ' + val360centimeters + 'cm';


    // 360 distance results - cs2
    var cs2360centimeters = 41560/(cs2sens * cs2dpi);
    var cs2360inches = cs2360centimeters / 2.54000562223471;

    document.getElementById('cs2360distanceinches').innerHTML = '360° Distance - ' + cs2360inches + 'in';
    document.getElementById('cs2360distancecentimeters').innerHTML = '360° Distance - ' + cs2360centimeters + 'cm';
}

function showGameSelectorContent(selectedValue) {
    // Hide all content elements
    document.getElementById('gameselector-valorant').style.display = 'none';
    document.getElementById('gameselector-cs2').style.display = 'none';

    // Show the selected content based on the dropdown value
    document.getElementById(selectedValue).style.display = 'block';

    localStorage.setItem('gameselector', selectedValue);
}

function showUnitSelectorContent(selectedValue) {
    document.getElementById('valorant360distanceinches').style.display = 'none';
    document.getElementById('valorant360distancecentimeters').style.display = 'none';
    document.getElementById('cs2360distanceinches').style.display = 'none';
    document.getElementById('cs2360distancecentimeters').style.display = 'none';

    if (selectedValue == 'unitselector-inches') {
        document.getElementById('valorant360distanceinches').style.display = 'block';
        document.getElementById('cs2360distanceinches').style.display = 'block';
    }

    if (selectedValue == 'unitselector-centimeters') {
        document.getElementById('valorant360distancecentimeters').style.display = 'block';
        document.getElementById('cs2360distancecentimeters').style.display = 'block';
    }

    localStorage.setItem('unitselector', selectedValue);
}

function darkModeToggle(selectedValue) {
    document.body.classList.remove('body-light');
    document.body.classList.remove('body-dark');

    switch (selectedValue) {
        case 'themeselector-light':
            document.body.classList.add('body-light');
            break;

        case 'themeselector-dark':
            document.body.classList.add('body-dark');
            break;

        default:
            document.body.classList.add('body-light');
            break;
    }

    localStorage.setItem("themeselector", selectedValue);
}
