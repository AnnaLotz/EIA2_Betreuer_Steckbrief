"use strict";
var L00;
(function (L00) {
    document.addEventListener("DOMContentLoaded", greet);
    function greet() {
        let name = window.prompt("Wie ist dein Name", "Name");
        console.log(name);
        if (name == "Name")
            name = "Unbekannter";
        document.getElementsByTagName("body")[0].innerText = "Viel Erfolg bei Eia2, " + name + "!";
    }
})(L00 || (L00 = {}));
//# sourceMappingURL=script.js.map