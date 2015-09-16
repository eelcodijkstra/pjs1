# Manier van werken met git en GitHub

## map voor elke les

We gebruiken voor elke les een aparte map.

Als we eenzelfde bestand in meerdere lessen gebruiken, dan kunnen we dit in een aparte map plaatsen - met een harde link naar de map van de betreffende les. (Ik begrijp dat git verstandig met dergelijke links omgaat.)

Een alternatieve aanpak, die we nu niet (meer) gebruiken, is om voor elke les een aparte branch te gebruiken. Dit maakt het echter te gemakkelijk om bestanden in een verkeerde branch te plaatsen.

> Deze aanpak, van een branch per les, wordt o.a. gebruikt door het Angular tutorial. De aanwijzingen bij de lessen zijn ook nog op deze aanpak ingericht: die moeten we aanpassen.

> We hebben liever dat een leerling een aparte branch maakt - eventueel per opdracht. In elk geval moet een leerling een pull-request doen voor elke opdracht die deze inlevert.

## fork van het origineel

Op GitHub maak je een *fork* van het origineel: `eelcodijkstra/pjs1`.

Zie: https://help.github.com/articles/fork-a-repo/

De volgende stap is om een *clone* hiervan te maken naar Cloud9. 

* Koppel hiervoor eerst Cloud9 aan je GitHub-account.  
* Vervolgens kun je een workspace maken (in het menu onder "repositories" door op de knop van de bijbehorende repository te klikken ("clone to edit").

## copiëren naar GitHub

Als je in Cloud9 de files veranderd hebt, kun je de veranderingen integreren in de GitHub-versie, door

1. lokaal een commit uit te voeren (`git commit -am "beschrijving"`)

## Gebruik van branches voor veranderingen

