## Aantekeningen bij de Todo applicatie

## Gebruik van MVC

We gebruiken de MVC-aanpak voor deze toepassing:

* we hebben een model, in dit geval een interne datastructuur met de toestand van de todo-lijst.

Een todo-element bevat de volgende properties:

* `done` (boolean)
* `description` (string)

Bovendien heeft een todo-element een unieke identificatie. Deze gebruiken we o.a. bij de communicatie met de server. Deze identificatie hebben we ook nodig voor de koppeling tussen de DOM (HTML) en de JS-toestand.

> We laten nog even in het midden waar we die identificatie aanmaken. Als we een server gebruiken kan het nodig zijn om die identificatie bij de server aan te maken. (cf. REST interface.)

```js
var
  todoList = new Array();

function mkTodoElt() {
}

```

We hebben de volgende functies op de todo-lijst (en elementen) nodig:

* `newTodoElt(done, text)`
* `setDone(elt)`
* `setUndone(elt)`
* `setDescription(elt, text)`

We moeten ook elementen kunnen verwijderen.

> We kunnen dit vormgeven als een CRUD interface. Hoe geven we de update vorm?

> Als we dit definiëren als methods van een object, dan hoeven we het element zelf niet als parameter mee te geven.

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

Voor het aanmaken van objecten gebruiken we de methode van Douglas Crockford. We maken in een functie een lokaal object, met de nodige operaties. Als resultaat leveren we een array van operaties op. Deze hebben impliciet het object in hun context.

> We maken hierbij geen classes aan, met instanties; we maken alleen instanties.

### Frameworks

We willen voor deze voorbeelden geen gebruik maken van frameworks. Maar we willen wel een eerste idee hebben hoe e.e.a. eruit zou zien bij gebruik van een bepaald framework.

#### React

De React-aanpak maakt geen gebruik van templates; de DOM-componenten worden vanuit JS aangemaakt.

> Kunnen we onze aanpak afstemmen op die van React? (Het is waarschijnlijk niet mogelijk, maar ook niet nodig, om direct al de efficiëntie van React te bieden.)

#### Elm

En hoe vergelijkt dit met de Elm-aanpak?

#### Meteor

Meteor maakt wel gebruik van templates.

#### MVC

* model: de eigenlijke data
    * bij een verandering van de data voert het model een broadcast uit naar alle views;
* view: een representatie van de data op het scherm ("rendering").
    * bij ontvangst van de genoemde broadcast haalt de view de relevante data op van het model.
    
