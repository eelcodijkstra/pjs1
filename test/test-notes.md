## Opmerkingen bij de verschillende testen

## ToDo lijst

* array van objecten; volgorde is ook volgorde van weergave;
* per object: omschrijving (string); open (boolean);
    * eventueel: doorgestreept?

Voor het renderen van de todo-lijst maken we gebruik van HTML. We construeren eerst de HTML-string, en voegen deze daarna in één keer toe in de DOM.

Dit is niet alleen om de zaken te vereenvoudigen, maar ook om de rendering soepel te laten verlopen. Elke verandering in de DOM is in principe een verstoring op het scherm.

In jQuery heb je handige middelen voor het construeren van een HTML-subtree.

(Welke middelen heb je hiervoor in JS? Welk interface/API gebruik je daarvoor?)

Eén van de manieren om het resultaat van de aanpassingen van de DOM te controleren, is het inspecteren van de DOM in de browser-tools.

## Select, options

* het select-item heeft een array van options.
* voor elke options heb je een `selected` property die de actuele selectie weergeeft.
* alternatief interface: een array `selectedOptions`
* alternatief interface: je kunt de select-property ook direct als array gebruiken, bijv. `myForm.fruit[0].selected`.

Hoe wordt dit weergegeven in de get-URL?

* als in het geval van de checkboxen: "fruit=B-fruit&fruit=C-fruit&fruit=L-fruit", dus de `name` van het select-element, en de verschillende `values` van de geselecteerde waarden.
* voor PHP gebruik je dan een naam die eindigt op `[]`, bijvoorbeeld `fuit[]`.

Opmerking: je kunt door middel van `fruit[1].selected = false;` de actuele waarde veranderen. Op deze manier kun je niet het attribuut veranderen. Kan dat wel met `getAttribute`?

REFS:

* [W3C Forms std: select](http://www.w3.org/TR/html5/forms.html#the-select-element)


## Open vragen

* [ ] Hoe werk je met meervoudige inputs - zoals checkboxen en meervoudige selecties? (In de verschillende onderdelen van de app: input/formulier; AJAX; http-interface naar de server; en in de server?)
* [ ] Wat is een handig model voor de ToDo-lijst?
