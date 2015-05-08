## Programmeren: JavaScript in de browser

In deze serie lessen maken we kennis met het gebruik van JavaScript in de browser. Het doel is drieledig:

* uitbreiden van algemene programmeerkennis
* uitbreiden van de kennis van JavaScript
* leren werken met JavaScript in de browser

## Manier van werken: git

We maken gebruik van git, een programma voor versiebeheer. Elke les bouwt voor een groot deel voort op de vorige les. Met behulp van git kun je de omgeving voor een les precies opzetten. Deze omgeving kan bestaan uit meerdere bestanden:

* een tekstbestand met een beschrijving van de opdracht, en van de stappen die je kunt nemen;
* een html-bestand van de toepassing - zoals deze op dat moment is
* extra bestanden met bijvoorbeeld css en scripts.

Je kunt in je eigen kopie van zoveel veranderen als je wilt. Je kunt je eigen versie eventueel ook in git bewaren. Als het nodig is, kun je ook weer terug naar de oorspronkelijke versie.

### Clone van lessenpakket

```
$ git clone https://github.com/eelcodijkstra/pjs1.git
```

Hierin is `$ ` de command-line prompt van de shell; deze moet je niet kopiëren.

### Opzetten van de bestanden voor een les

Je kunt de bestanden van les1 opzetten met het commando:

```
$ git checkout les1
```

En voor de andere lessen kan dit op een vergelijkbare manier.

### Bewaren van je eigen wijzigingen

Je kunt je eigen veranderingen bewaren met behulp van 

Het is misschien verstandig om dat in een eigen branch te doen: 

```
$ git checkout -b [name_of_your_new_branch]
```

(Misschien is dit het eerste wat je moet doen, na de checkout van een les, voordat je er aan gaat werken?)
