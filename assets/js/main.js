/* Was soll passieren:
-Auswahl Netto/brutto:
-->check radio
--> Text anpassen

- Auswahl Prozent-Button:
-->check radio
 --> Wert zuordnen & return?!
 --> Berechungswert anpassen,
--> #betrag anpassen

- Berechung Mehrwertsteuer:
--> input.value
--> if () mit Berechung für 19% & 7&
--> sum ins #output (nur Mehrwertsteuer) & outputTwo
--> #outputTwo = Mwst + input.value
 */

console.log("Hutinni!")

let output = document.getElementById("output")
let radioOne = document.getElementById("radioOne") // Text anpassen
let radioTwo = document.getElementById("radioTwo")// Text anpassen
let radioNine = document.getElementById("radioNine")// Wert zuordnen
let radioSeven = document.getElementById("radioSeven")// Wert zuordnen
let endbetrag = document.getElementById("endbetrag") // Text passt sich an
let outputTwo = document.getElementById("outputTwo")
let betrag = document.getElementById("betrag") // Text passt sich an


let getTaxes = () => {
    let input = document.getElementById("input").value
    switch (radioOne.checked) {
        case true:
            switch (radioNine.checked) {
                case true:
                    output.innerHTML = (Number(input) * 0.19).toFixed(2);
                    outputTwo.innerHTML = (Number(input) * 1.19).toFixed(2);
                    break;
                case false:
                    output.innerHTML = (Number(input) * 0.07).toFixed(2);
                    outputTwo.innerHTML = (Number(input) * 1.07).toFixed(2);
                    break;
            }
            break;
        case false:
            switch (radioNine.checked) {
                case true:
                    output.innerHTML = ((Number(input) / 119) * 19).toFixed(2);
                    outputTwo.innerHTML = (Number(input) / 1.19).toFixed(2);
                    break;
                case false:
                    output.innerHTML = ((Number(input) / 107) * 7).toFixed(2);
                    outputTwo.innerHTML = (Number(input) / 1.07).toFixed(2);
                    break;
            }
            break;
        default: betrag.innerHTML = "Betrag";
            endbetrag.innerHTML = "Endbetrag";
    }
}

let radioClick = () => {
    if (radioOne.checked) {
        betrag.innerHTML = "Nettobetrag (Preis ohne Mehrwersteuer) in Euro";
        endbetrag.innerHTML = "Bruttobetrag";
    } else {
        betrag.innerHTML = "Bruttobetrag (Preis inclusive Mehrwertsteuer) in Euro";
        endbetrag.innerHTML = "Nettobetrag";
    }
}
