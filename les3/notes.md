## Aantekeningen bij les 3

## Rode draad: todo-lijst.

Voor de todo-lijst willen we een lijst met elementen genereren. Dit kan een afbeelding zijn van een lijst in een array.

We hebben mogelijk wel een probleem met de koppeling tussen de elementen en de handlers. Hiervoor hebben we in principe twee mogelijkheden:

* we gebruiken een handler voor alle elementen; aan de hand van de event zoeken we uit om welk element het hier gaat (`event.target`? verschil met `event.currentTarget`?)
* we gebruiken een handler per element. In dat geval moeten we ook deze functies genereren - en dat gaat de meeste leerlingen waarschijnlijk boven de pet.

We hebben nog een tussenoplossing: we kunnen in de html-code ook stukjes JS genereren. Maar dat vind ik persoonlijk geen fraaie oplossing.

De eerste oplossing lijkt te werken, zie myscript-alt.js - deze gebruikt `event.target`, en maakt dan vervolgens aan de hand van de id het onderscheid.

Als we te maken hebben met een lijst van elementen, waarvan de namen een vaste structuur hebben, bijvoorbeeld met een volgnummer, dan kunnen we dat volgnummer ook weer uit de id isoleren. Hiervoor zijn vast wel handige string-operaties beschikbaar.

