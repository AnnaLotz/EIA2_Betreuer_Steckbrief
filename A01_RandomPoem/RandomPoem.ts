namespace RandomPoem {

    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // console.log(subjekte);
    // console.log(prädikate);
    // console.log(objekte);

    for (let index: number = 6; index > 0; index--) {
        // console.log(index);
        let verse: string = getVerse(subjekte, prädikate, objekte);
        console.log(verse);
    }

    function getVerse(_subjekte: string[], _prädikate: string[], _objekte: string[]): string {
        let verse: string = "";
        let randNum: number = Math.floor(Math.random() * _subjekte.length);
        // console.log(randNum);
        verse += _subjekte.splice(randNum, 1) + " ";
        randNum = Math.floor(Math.random() * _prädikate.length);
        verse += _prädikate.splice(randNum, 1) + " ";
        randNum = Math.floor(Math.random() * _objekte.length);
        verse += _objekte.splice(randNum, 1) + ".";

        return verse;
    }
}