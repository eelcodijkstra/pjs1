## Opmerkingen bij de verschillende testen

## ToDo lijst

* array van objecten; volgorde is ook volgorde van weergave;
* per object: omschrijving (string); open (boolean);
    * eventueel: doorgestreept?

Voor het renderen van de todo-lijst maken we gebruik van HTML. We construeren eerst de HTML-string, en voegen deze daarna in één keer toe in de DOM.

Dit is niet alleen om de zaken te vereenvoudigen, maar ook om de rendering soepel te laten verlopen. Elke verandering in de DOM is in principe een verstoring op het scherm.

In jQuery heb je handige middelen voor het construeren van een HTML-subtree.

(Welke middelen heb je hiervoor in JS? Welk interface/API gebruik je daarvoor?)

## Open vragen

* [ ] Hoe werk je met meervoudige inputs - zoals checkboxen en meervoudige selecties? (In de verschillende onderdelen van de app: input/formulier; AJAX; http-interface naar de server; en in de server?)
* [ ] Wat is een handig model voor de ToDo-lijst?
