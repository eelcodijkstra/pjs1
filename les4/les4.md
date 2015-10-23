## Les 4: opslaan van gegevens (localStorage)

Als je het venster van een web-app sluit, of als je de browser afsluit, gaan de gegevens van de bijbehorende web-app in de browser verloren. Het is vaak handig als je gegevens van een website of van een web-app lokaal kunt bewaren, ook als de web-app afgesloten is. Je wilt de mogelijkheid hebben voor *persistente data*: gegevens die bewaard worden ook als het programma niet meer actief is.

In normale programma's gebruik je voor de  het filesysteem, of eventueel een database.
Eén van de voorstellen voor HTML5 is om binnen de browser een eigen filesysteem te definiëren.

In HTML5 hebben we voor deze persistente data verschillende mogelijkheden:

* `localStorage`: de lokale opslag van (name, value)-pairs. Zowel de name als de value zijn hierbij stringwaarden.

Sommige browsers bieden nog andere mogelijkheden. Safari biedt bijvoorbeeld een relationele database (gebaseerd op SQL).

In deze les zullen we vooral kijken naar de mogelijheden van `localStorage`.

## JSON

We kunnen in `localStorage` alleen string-waarden opslaan. Dit betekent dat we een JavaScript-waarde die we willen opslaan, eerst moeten omzetten in een string. Bij het terughalen van deze waarde moeten we de stringwaarde weer omzetten in de normale JavaScript-waarde.

Voor de string-vorm van JavaScript-waarden gebruiken we de JSON-notatie: JavaScript Object Notation.

### Voor gevorderden

We kunnen niet alle soorten waarden zomaar omzetten in JSON. Onder andere in de volgende gevallen moeten we extra opletten, en vaak zelf het nodige programmeren:

* cyclische datastructuren kun je niet representeren met JSON. Een mogelijkheid is om de verwijzingen naar andere objecten eerst om te zetten in een string-identificatie. Bij het terughalen moet je dan deze identificaties weer omzetten in object-verwijzingen.
    * `JSON.stringify` en `JSON.parse` hebben hiervoor speciale voorzieningen, om waarden van een bepaald type op een andere dan de gebruikelijke manier te representeren.
* speciale JavaScript-waarden zoals Date (dit is niet één van de JSON-types).
* functies
* undefined?

De elementaire types/waarden in JSON zijn: null, false, true, number, string.




