namespace L00 {

    document.addEventListener("DOMContentLoaded", greet);

    function greet(): void {  
        let name: string = <string>window.prompt("Wie ist dein Name", "Name");
        console.log(name);
        if (name == "Name")
            name = "Unbekannter";
        document.getElementsByTagName("body")[0].innerText = "Viel Erfolg bei Eia2, " + name + "!";
    }
}