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

## Objecten?

Voor het aanmaken van objecten gebruiken we de methode van xxx. We maken in een functie een lokaal object, met de nodige operaties. Als resultaat leveren we een array van operaties op.