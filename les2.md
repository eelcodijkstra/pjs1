# Les 2: input elementen

Een input element definieert een naam-waarde paar. De naam hiervan is het `name`-attribuut van het element, de waarde het `value`-attribuut.

> De rol van het `id`-attribuut is voor de identificatie van het element; het `name`-attribuut wordt gebruikt voor input-elementen. Verwar deze attributen niet.

Een input-element heeft geen afsluitende tag.

Er zijn allerlei verschillende soorten inputs. Enkele van de meest gebruikte zijn:

* text: een korte tekst (een of enkele woorden);
    * voor langere teksten kun je het `textarea` element gebruiken.
* radiobutton: een aantal alternatieven waarvan er precies één geselecteerd kan worden. Als je een alternatief selecteert, wordt de vorige selectie ongedaan gemaakt.
* 

In HTML5 zijn er nog meer specialistische soorten input gedefinieerd, bijvoorbeeld voor telefoonnummers, kleuren, enz.. Deze inputs sluiten aan bij de mogelijkheden van het operating system, en van het specifieke gebruikersinterface - in het bijzonder voor mobiele apparaten. Voor de invoer van een telefoonnummer of een e-mail adres kun je dan bijvoorbeeld een speciaal toetsenbord krijgen. 

## Events: onchange

Als de gebruiker een waarde invoert voor een input-element, resulteert dit in een "change" event voor dit element. Je kunt de handler hiervoor zetten via de `onchange` property.

Je kunt dit bijvoorbeeld gebruiken om de invoerwaarde te controleren (valideren).


## Formulieren

Je kunt een formulier gebruiken om een aantal input-elementen te groeperen.

Voor het opsturen van gegevens naar de server gebruik je vaak een formulier.

