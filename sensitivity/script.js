const GameSelectorKey = "havoctools-gameselector";
const UnitSelectorKey = "havoctools-unitselector";
const ThemeSelectorKey = "havoctools-themeselector";

const Themes = new Map();
Themes.set("themeselector-light", "body-light");
Themes.set("themeselector-dark", "body-dark");
Themes.set("themeselector-lighter", "body-lighter");
Themes.set("themeselector-darker", "body-darker");
Themes.set("themeselector-discord", "body-discord");

function selectorLocalStorageHandler(storageKey, selectorId, defaultSelected) {
    var localStorageData = localStorage.getItem(storageKey);
    var targetValue = null;

    if (localStorageData === null || localStorageData === undefined) {
        targetValue = defaultSelected;
    } else {
        targetValue = localStorageData;
    }

    document.getElementById(selectorId).value = targetValue;
    localStorage.setItem(storageKey, targetValue);
}

document.addEventListener("DOMContentLoaded", function () {
    selectorLocalStorageHandler(
        GameSelectorKey,
        "gameselector",
        "gameselector-valorant"
    );
    selectorLocalStorageHandler(
        UnitSelectorKey,
        "unitselector",
        "unitselector-inches"
    );
    selectorLocalStorageHandler(
        ThemeSelectorKey,
        "themeselector",
        "themeselector-dark"
    );

    showGameSelectorContent(localStorage.getItem(GameSelectorKey));
    showUnitSelectorContent(localStorage.getItem(UnitSelectorKey));
    themeSelector(localStorage.getItem(ThemeSelectorKey));

    multiply();
});

function multiply() {
    // havoc
    var havocdpi = document.getElementById("havocdpi").value;

    var gameDpi = document.getElementById("gamedpi").value;
    var gameSens = document.getElementById("gamesens").value;

    var sensResult = 0;
    var distanceResult = 0;

    // sens math
    switch (document.getElementById("gameselector").value) {
        case "gameselector-valorant":
            sensResult = gameSens * 1.44 * (gameDpi / havocdpi);
            break;
        case "gameselector-cs2":
            sensResult = 0.45 * gameSens * (gameDpi / havocdpi);
            break;
        default:
            sensResult = gameSens * 1.44 * (gameDpi / havocdpi);
            break;
    }

    // distance math
    switch (document.getElementById("unitselector").value) {
        case "unitselector-inches":
            switch (document.getElementById("gameselector").value) {
                case "gameselector-valorant":
                    distanceResult =
                        13067 / (gameSens * gameDpi) / 2.54000562223471;
                    break;
                case "gameselector-cs2":
                    distanceResult =
                        41560 / (gameSens * gameDpi) / 2.54000562223471;
                    break;
                default:
                    break;
            }
            break;
        case "unitselector-centimeters":
            switch (document.getElementById("gameselector").value) {
                case "gameselector-valorant":
                    distanceResult = 13067 / (gameSens * gameDpi);
                    break;
                case "gameselector-cs2":
                    distanceResult = 41560 / (gameSens * gameDpi);
                    break;
                default:
                    break;
            }
            break;
        default:
            switch (document.getElementById("gameselector").value) {
                case "gameselector-valorant":
                    distanceResult =
                        13067 / (gameSens * gameDpi) / 2.54000562223471;
                    break;
                case "gameselector-cs2":
                    distanceResult =
                        41560 / (gameSens * gameDpi) / 2.54000562223471;
                    break;
                default:
                    break;
            }
            break;
    }

    // setting values
    document.getElementById("sensresult").innerHTML =
        "Havoc Sens - " + sensResult;

    switch (document.getElementById("unitselector").value) {
        case "unitselector-inches":
            document.getElementById("distantresult").innerHTML =
                "360° Distance - " + distanceResult + "in";
            break;
        case "unitselector-centimeters":
            document.getElementById("distantresult").innerHTML =
                "360° Distance - " + distanceResult + "cm";
            break;
        default:
            document.getElementById("distantresult").innerHTML =
                "360° Distance - " + distanceResult + "in";
            break;
    }
}

function showGameSelectorContent(selectedValue) {
    switch (selectedValue) {
        case "gameselector-valorant":
            document.getElementById("game-title").innerHTML = "Valorant";
            break;
        case "gameselector-cs2":
            document.getElementById("game-title").innerHTML =
                "Counter Strike 2";
            break;
        default:
            document.getElementById("game-title").innerHTML = "Valorant";
            break;
    }

    localStorage.setItem(GameSelectorKey, selectedValue);

    multiply();
}

function themeSelector(selectedValue) {
    Themes.forEach((value, keys) => {
        document.body.classList.remove(value);
    });

    document.body.classList.add(Themes.get(selectedValue));

    localStorage.setItem(ThemeSelectorKey, selectedValue);
}

function showUnitSelectorContent(selectedValue) {
    multiply();
    localStorage.setItem(UnitSelectorKey, selectedValue);
}
