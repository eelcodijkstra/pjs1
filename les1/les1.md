# Les 1: Document Object Model (DOM)

Het Document Object Model is de interne representatie van het HTML-document dat de browser geladen heeft. Via de DOM kun je vanuit JavaScript interactie plegen met het document. Je kunt allerlei acties aan de DOM hangen, bijvoorbeeld om een klik op een button af te handelen. Je kunt de attributen van HTML-elementen in de DOM veranderen, bijvoorbeeld de opmaak (style). En je kunt de inhoud van de DOM veranderen: je kunt elementen toevoegen en verwijderen. De browser gebruikt de DOM om te bepalen wat er op het scherm moet komen. Als je een element aan de DOM toevoegd, dan zal de browser de aangepaste versie van de DOM op het scherm vertonen.

HTML -> DOM -> scherm

> Je kunt vanuit JavaScript wel de DOM veranderen, maar niet het oorspronkelijke HTML document. De DOM is een lokale kopie van dit document, omgezet in een interne vorm in de browser.

## HTML elementen

Elk HTML-element uit het HTML-document vind je terug in de DOM. Om vanuit JavaScript iets met dat element te doen, heb je een "handvat" nodig. We zullen daarvoor verschillende mogelijkheden leren kennen. Als eerste gebruiken we het `id`-attribuut.

## Attributen en properties

Door middel van `document.getElementById("inleiding")` krijgen we het object in de DOM dat overeenkomt met het HTML-element met `id="inleiding"` (als dat er is). Dit object heeft als properties onder andere de attributen van het element.

| HTML      | DOM - functie          | JavaScript       |
| :---      | :---                   | :---             |
| element   | `getElementById(id)`   | object           |
| attribuut | `elt.getAttribute(nm)` | property         |

Je kunt een attribuut `attr` ook opvragen met: `elt.getAttribute("attr")`. Je kunt het veranderen met: `elt.setAttribute("attr", value)`, waarbij `value` een stringwaarde is.

> Met `getAttribute` en `setAttribute` heb je meer mogelijkheden dan met de object-properties. Je kunt ook je eigen attributen toevoegen. HTML heeft daarvoor een speciale conventie: attribuutnamen die beginnen met data- leveren nooit een conflict met de html-attributen.

De waarde van een attribuut is *altijd een string*, ook als dit een getal of een boolean waarde voorstelt. Dit betekent dat je soms moet zorgen voor de omzetting van of naar het juiste JavaScript-type.

Eén van de attributen is `style`: dit is een object met daarin de CSS-properties. Deze kun je als een JavaScript-object behandelen, bijvoorbeeld: `elt.style.color = "red";`

Voor meer informatie: 

* [MDN DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [MDN DOM Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## DOM: een boomstructuur

De DOM is een voorbeeld van een boomstructuur. Het buitenste element is het document; dit is de "wortel" (root) van de boom. Het document-element heeft een aantal attributen, en twee "kinderen" (children): `document.head` en `document.body`. Het document-element is de ouder-knoop (parent) van het head-element.

In een boom spreken we over een ouder-knoop, en over kind-knopen.

Zie de notitie ove bomem.

> Wat zijn de kinderen van het body-element?

## Opdrachten

Voer de volgende opdrachten uit in de ontwikkeltools van de browser. Zie XXX waar je deze kunt vinden voor de browser die je gebruikt. Gebruik een recente browser, bijvoorbeeld FireFox of Chrome. We gaan hieronder uit van de benamingen in Chrome.

1. inspecteer de verschillende vensters: onder Sources (FireFox: Netwerk, "Antwoord"-tab) vind je de oorspronkelijke bestanden (HTML, JavaScript, CSS); onder Elements (FireFox: Inspector) vind je de DOM: het HTML-document in interne representatie.
2. bekijk de DOM-representatie. Je kunt onderdelen hiervan in- en uitvouwen (folding): dat is handig als je met een groot document te maken hebt. Als je in de DOM-representatie een bepaald element selecteert, zie je dit in het browser-venster aangegeven.
3. ga naar het console-venster. Daar kun je de waarde van `document` opvragen.
4. vraag de waarde van `inleidingElt` op: dit is een variabele die in het eigen script gedefinieerd is. Verander de kleur van de letters.

Andere opdrachten:

* voeg een extra button toe in het html-bestand. Geef deze button een naam.
* maak een handler voor deze button waarmee je de inleiding onzichtbaar kunt maken.
    * gebruik hiervoor de style-property `display`, met als mogelijke waarden `none` - niet zichtbaar, en `block`, wat de normale waarde is voor een p-element. `display` heeft ook een mogelijke waarde `inline`, maar die is hiet niet van belang.
* koppel deze handler aan de button (`onclick` property). 
