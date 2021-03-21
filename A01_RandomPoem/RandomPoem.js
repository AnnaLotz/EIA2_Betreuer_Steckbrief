"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subjekte);
    // console.log(prädikate);
    // console.log(objekte);
    for (let index = 6; index > 0; index--) {
        // console.log(index);
        let verse = getVerse(subjekte, prädikate, objekte);
        console.log(verse);
    }
    function getVerse(_subjekte, _prädikate, _objekte) {
        let verse = "";
        let randNum = Math.floor(Math.random() * _subjekte.length);
        // console.log(randNum);
        verse += _subjekte.splice(randNum, 1) + " ";
        randNum = Math.floor(Math.random() * _subjekte.length);
        verse += _prädikate.splice(randNum, 1) + " ";
        randNum = Math.floor(Math.random() * _subjekte.length);
        verse += _objekte.splice(randNum, 1) + ".";
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map