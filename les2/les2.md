# Les 2: input elementen

Een input element definieert een naam-waarde paar. De naam hiervan is het `name`-attribuut van het element, de waarde het `value`-attribuut.

> Het `id`-attribuut identificeert het html-element. Het `name`-attribuut wordt gebruikt voor input-elementen, om naam-waarde paren te maken. Verwar deze attributen niet.

Een input-element heeft geen afsluitende tag.

Er zijn allerlei verschillende soorten inputs. Enkele van de meest gebruikte zijn:

* text: een korte tekst (een of enkele woorden);
    * voor langere teksten gebruik je het `textarea` element.
* radiobutton: een aantal alternatieven waarvan er precies één geselecteerd kan worden. Als je een alternatief selecteert, wordt de vorige selectie ongedaan gemaakt.
* 

In HTML5 zijn er nog meer specialistische soorten input gedefinieerd, bijvoorbeeld voor telefoonnummers, kleuren, enz.. Deze inputs sluiten aan bij de mogelijkheden van het operating system, en van het specifieke gebruikersinterface - in het bijzonder voor mobiele apparaten. Voor de invoer van een telefoonnummer of een e-mail adres kun je dan bijvoorbeeld een speciaal toetsenbord krijgen. 

## Events: onchange

Als de gebruiker een waarde invoert voor een input-element, resulteert dit in een "change" event voor dit element. Je kunt de handler hiervoor zetten via de `onchange` property.

Je kunt dit bijvoorbeeld gebruiken om de invoerwaarde te controleren (valideren).


## Formulier (form): groeperen van input-elementen

Je kunt een formulier gebruiken om een aantal input-elementen te groeperen.

Voor het opsturen van gegevens naar de server gebruik je vaak een formulier.

(Is het handiger om het formulier een naam te geven, in plaats van een enkelvoudig element? Hoe kun je de input-elementen in het formulier benoemen, en koppelen?)

* `form.elements` - array of input elements; each element has a `name` and a `value` property.

```js
form.elements
```

## Opmerkingen

Naast `form.elements`, en `form.elements["myRadio"].value`, kun je ook gebruiken `form.myRadio.value`.

Alle alternatieven van een radio- of checkbox-element zijn elementen van het form.

* [MDN Forms tutorial](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form)

* een gebruikelijke techniek is om als naam voor een reeks checkbox-elementen "naam[]" te gebruiken. Dit wordt dan door PHP (aan de server-kant) omgezet in een array. De vraag is natuurlijk wat je hiervan ziet in het DOM-interface, omdat je voor een interactie met de server een JSON-formaat gebruikt - ook voor het doorgeven van de inhoud van het formulier.

* het is gebruikelijk om het label bij een checkbox te plaatsen in een label-element. Het id-attribuut van het input-element geef je dan op bij het for-attribuut van het label-element. Het label kun je ook aanklikken om het alternatief te selecteren. Je kunt ook het input element binnen het label plaatsen.

* ook voor een checkbox-groep is het gebruikelijk om dezelfde `name` te gebruiken (als bij radio elementen). In de URL-encoded vorm komt deze naam dan mogelijk met meerdere waarden voor.
    * hoe geef je dit weer in de DOM?
    * hoe geef je dit weer in een JSON formaat?
    
* `form.elements[i].checked` - voor checkbox en radio button. "value" werkt niet voor checkbox... (geeft altijd de lege string).

* zie: [HTML DOM: input element](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-6043025)
* zie: [HTML5 DOM input element](http://www.w3.org/TR/2011/WD-html5-20110113/the-input-element.html)
* zie: [MDN HTML DOM input element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
* zie: [MDN Forms Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)
    * [MDN - How to structure an HTML form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/How_to_structure_an_HTML_form)
    * [MDN Native Form Widgets](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/The_native_form_widgets)

* input-elementen hoeven niet onderdeel te zijn van een form, maar vaak is dat wel handig, zeker voor het groeperen van radio buttons en check boxen.

* de waarden in het HTML-document (eigenlijk de initiële/defaultwaarden) worden gegeven door de attributen `defaultValue` of `defaultChecked` (voor radio cq. checkbox).

* jQuery probeert er meer lijn in te brengen: `.val()` levert in het geval van checkboxen en multiple selections eventueel een array-waarde op. (`null` voor een lege waarde - in plaats van een leeg array...)

* Volgens mij is het helemaal niet zo logisch om meerdere checkbox-elementen eenzelfde `name` te geven?


> Algemene opmerking: ik vind het lastig om het materiaal hiervoor te vinden. De meeste tutorials zijn erg onvolledig, inclusief die van MDN.

* Een return in het form (bijv. bij de text) resulteert in een submit.

* De `FormData` API lijkt mij erg nuttig - ik begrijp dat deze niet door alle browsers ondersteund wordt. En ik kan deze in Chrome niet werkend krijgen, hoewel dit daar compleet ondersteund wordt. ("get" is geen functie???).





