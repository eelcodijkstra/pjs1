# Manier van werken met git en GitHub

Voor deze lessen werken we met git en GitHub. Je kunt dit gebruiken om je software met anderen te delen: je kunt samen met andere aan dezelfde software werken. In deze lessen gebruiken we dit vooral om je code door anderen te laten bekijken. Je levert je uitwerkingen in via git en GitHub, en je kijgt ook feedback via GitHub.

### Module git-0 als voorkennis

In de module git-0 leer je werken met git en GitHub. Je kunt die module eerst doen, of tegelijkertijd met deze module.

### Aanpassen van de bestanden en testen van de software

GitHub gebruiken we alleen voor het opslaan van de bestanden "in the cloud". Voor het aanpassen van je bestanden, en voor het testen van je code, heb je twee mogelijkheden:

* je werkt op je eigen computer. In dit geval is de editor Brackets een handige keuze. Deze heeft veel voorzieningen om met html, css en javascript om te gaan. En door de git-plugin hoef je niet met "git op de commandline" te werken.
* je werkt met Cloud9. Je hebt dan een omgeving voor het bewerken van je bestanden, en voor het uittesten van je code, "in the cloud". Dit heeft onder andere als voordeel dat je direct je apps kunt uittesten in het publieke internet. Bovendien kun je met anderen samenwerken alsof je achter hetzelfde scherm zit.

## Map voor elke les

We gebruiken voor elke les een aparte map.

Als we eenzelfde bestand in meerdere lessen gebruiken, dan kunnen we dit in een aparte map plaatsen - met een harde link naar de map van de betreffende les. (Ik begrijp dat git verstandig met dergelijke links omgaat.)

Een alternatieve aanpak, die we nu niet (meer) gebruiken, is om voor elke les een aparte branch te gebruiken. Dit maakt het echter te gemakkelijk om bestanden in een verkeerde branch te plaatsen.

> Deze aanpak, van een branch per les, wordt o.a. gebruikt door het Angular tutorial. De aanwijzingen bij de lessen zijn ook nog op deze aanpak ingericht: die moeten we aanpassen.

> We hebben liever dat een leerling een aparte branch maakt - eventueel per opdracht. In elk geval moet een leerling een pull-request doen voor elke opdracht die deze inlevert.

## Fork van het origineel

Op GitHub maak je een *fork* van het origineel: `eelcodijkstra/pjs1`.

Zie: https://help.github.com/articles/fork-a-repo/

Een fork is een speciale GitHub-vorm van een git-clone. In de geforkte repo kun je helemaal je eigen gang gaan.

JE gebruikt een fork vaak om veranderingen in het origineel voor te bereiden. Je verandert de fork, en test deze totdat alles ok is. Daarna probeer je de wijzingen te "mergen" met het origineel, door middel van een pull-request.

> Een pull is eigenlijk een push waarbij je de uiteindelijke beslissing aan de beheerder van het origineel overlaat.


### Werken met Cloud9

De volgende stap is om een *clone* hiervan te maken naar Cloud9. 

* Koppel hiervoor eerst Cloud9 aan je GitHub-account.  
* Vervolgens kun je een workspace maken (in het menu onder "repositories" door op de knop van de bijbehorende repository te klikken ("clone to edit").


### Werken op je eigen computer

Je kunt dit ook op je 

## Kopiëren naar GitHub

Als je in Cloud9 de files veranderd hebt, kun je de veranderingen integreren in de GitHub-versie, door

1. lokaal een commit uit te voeren (`git commit -am "beschrijving"`)
2. push naar remote: `git push`


## Gebruik van branches voor veranderingen

