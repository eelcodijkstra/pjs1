## Les 3

Dit is les 3.

We kunnen vanuit JavaScript de DOM veranderen:

* de attributen van een element veranderen;
    * in het bijzonder, de stijl van een element aanpassen;
* de inhoud van een element veranderen;
* de structuur van de DOM veranderen: elementen toevoegen of verwijderen.

### Veranderen van de attributen van een element

### Veranderen van de inhoud van een element

Door middel van de eigenschap `elt.innerHTML` kun je de inhoud van element `elt` opvragen als HTML-tekst. Je kunt deze eigenschap ook gebruiken om de inhoud van het element te veraderen, als HTML-tekst. Bij het invoegen van deze HTML-tekst zet de browser dit dan om in de interne DOM-representatie.

Hint: bekijk de DOM-representatie van het div-element `divA` nadat je dit uitgebreid hebt via `buttonC`.

De html-string die je opgeeft moet voldoen aan de html-syntax. Dit betekent dat je de tags goed afsluit, enz. In het bijzonder moet je er rekening mee houden dat tekens die in html een bijzondere betekenis hebben, zoals `<` en `>`, zo genoteerd worden als je in een html-bestand zou doen (bijvoorbeeld: `&gt;` en `&lt`).

### Gebruik van DOM-representatie

In plaats van de HTML-tekst representatie, kun je ook de DOM-representatie gebruiken. 