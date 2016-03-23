## Aantekeningen bij de Todo applicatie

## Gebruik van MVC

We gebruiken de MVC-aanpak voor deze toepassing:

* we hebben een model, in dit geval een interne datastructuur met de toestand van de todo-lijst.

Een todo-element bevat de volgende properties:

* `done` (boolean)
* `text` (string)


```js
var
  todoList = new Array();

function mkTodoElt() {
}

```

We hebben de volgende functies op de todo-lijst nodig:

* `newTodoElt(done, text)`
* `setDone(elt)`
* `setUndone(elt)`

Voor het vertonen van de juiste selectie van elementen:

* `displayAll()`
* `displayOpen()`

Deze functies zijn natuurlijk geen onderdeel van het model; we gebruiken ze alleen voor het tonen van het model op het scherm. Het zijn eigenlijk twee verschillende views.


## Voorbeeld van MVC

We kunnen laten zien dat dit een voorbeeld van MVC is door meerdere views tegelijk te laten zien, zo mogelijk elk met een controller. De wijzigingen in de ene view moeten dan ook te zien zijn in de andere view.

Bij de interactie met de gebruiker zoeken we in de event-handler het bijbehorende DOM-element. Hoe komen we dan bij het bijbehorende model-element? Aan de hand van de index?

## Voorbeeld voor het genereren van html

Voor de lijst moeten we html-code genereren. Hiervoor definiëren we een aantal hulpfuncties.

## Forms en input-elementen

* https://docs.webplatform.org/wiki/guides/html_forms_basics
* https://docs.webplatform.org/wiki/tutorials/html5_form_features

Ook in jQuery heb je soortgelijke hulpfuncties.

Form: attribute (property): `elements`, te indiceren met getal, of met name-s.

Voor input-elementen is het wel zo netjes om labels te gebruiken. Die koppel je met behulp van het id-attribuut.

### Checkbox-elementen

Net als de andere input-elementen, heeft een checkbox een `name` en een `value`.

In de klassieke form-aanpak wordt `name=value` alleen opgenomen als het vakje aangekruist is ("checked"). Je kunt het checked-attribuut ook direct opvragen (of zetten).

Je kunt dit op verschillende manieren gebruiken.

Vaak wordt dit gebruikt als een verzameling opties. In dat geval wordt voor de verschillende opties hetzelfde `name` attribuut gebruikt.

> Voor PHP gebruik je dan als name de vorm `name[]`, met een paar array-haken aan het eind. Voor de browser maakt dit niet uit, maar op de server maakt het PHP-systeem hiervan een array.

## Objecten?

Voor het aanmaken van objecten gebruiken we de methode van xxx. We maken in een functie een lokaal object, met de nodige operaties. Als resultaat leveren we een array van operaties op.