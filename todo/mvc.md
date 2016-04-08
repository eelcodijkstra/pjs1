## Model View Controller - opmerkingen

Een MVC-systeem bestaat uit een model (of meerdere modellen), met daarop een of meerdere Views, en mogelijk meerdere controllers. De MVC-architectuur is erop gericht om de verschillende views consistent te houden met het model.

De interactie verloopt als volgt:

* een controller veroorzaakt een verandering in het model;
* het model signaleert de verschillende views dat er iets veranderd is;
* de views inspecteren het model met betrekking tot deze veranderingen, en passen hun representatie aan.

De veranderingen worden in principe niet van het model aan de views doorgegeven: de views inspecteren zelf het model met betrekking tot die elementen die nodig zijn voor de representatie.

* Hoe kan een model de bijbehorende views signaleren?
    * dit kan met behulp van een pub-sub mechanisme;
    * een verandering in een model kun je zien als een event - je kunt hiervoor dus ook gebruik maken van een event-mechanisme (als dat beschikbaar is);
* Hoe kan een view het bijbehorende model vinden?
    * dit kan bij het signaleren (of de event) als parameter meegegeven worden;
* Hoe kan een controller (vaak als onderdeel van een view) het bijbehorende model, of onderdeel van een model vinden?

`Model -> View`

`View -> Model`

De vraag is ook op welk niveau je de koppeling tussen deze verschillende elementen maakt: vanuit het model, vanuit de view, of vanuit de totale toepassing?

Omdat we dynamisch elementen toevoegen, moeten we deze koppeling ook dynamisch kunnen maken.

### REST-URL aanpak

In de REST architectuur (van het web) zijn de CRUD-operaties op een "resource" (eigenlijk het meest generieke model) afgebeeld op de HTTP-opdrachten GET/POST/PUT/DELETE/UPDATE. Bovendien heeft de URL een specifieke vorm, voor het identificeren van de juiste resource. De parameters van de operatie zijn parameters in de URL (bij GET) of afzonderlijk (bij POST).

Voor het web is het belangrijk om onderscheid te maken tussen idempotente en niet-idempotente operaties. GET, PUT en DELETE zijn idempotent; POST is dat niet.

> Is dat in ons geval ook van belang?

Suggestie: gebruik voor de identificatie van de modellen en hun elementen dezelfde structuur als de REST-URL. 

## Verschillende varianten

### React

### Elm

* Action (data)
* update: Action -> Model -> Model
* view : Signal.Address Action -> Model -> Html

(Hoe moet ik het type van `view` lezen?)

`Address` concept: 

"view" krijgt een adres mee: als bestemming voor de control-elementen van de view. Dit adres "draagt" een action naar de juiste update/Model?

### "genereren" van handlers

We moeten handlers koppelen aan de elementen die we genereren. Dit kan op verschillende manieren. We kunnen generieke handlers gebruiken, die aan de hand van de identificatie van het element proberen uit te vinden op welk onderdeel van een model dit betrekking heeft.

> Een event-object heeft een "target" property: dat is het element dat de event getriggerd heeft. Dat is niet noodzakelijk het element waaraan de handler gekoppeld is: het target-element kan een sub-element daarvan zijn. (Je kunt van een element de `nodeName` opvragen - i.e., de tag; en de `id` property.)

We kunnen ook functies genereren met de juiste "ingebouwde" parameters, in de vorm van closures. Die constructie zal voor leerlingen minder eenvoudig te begrijpen zijn, lijkt mij.

#### Gebruik van class voor handlers

We kunnen ook generieke handlers maken voor alle elementen die van een bepaalde class zijn. Zo kunnen we de checkboxen van de todo-elementen allemaal van een bepaalde class maken. In de handler hoeven we dan alleen de "name" te inspecteren om te weten om welk element het gaat.

### Frameworks

Er zijn allerlei frameworks die op de een of andere manier gebaseerd zijn op MVC, of op varianten daarvan zoals MVVM (Model-View-ViewModel).

* Backbone
* Knockout
* Angular

Vaak wordt een data-attribuut gebruikt, met een name-value paar (of een lijst daarvan), om de koppeling tussen de view en het model te beschrijven. (Dit is dan een "declaratieve binding".)

## Editing van de tekst

Voor het editen van de tekst kunnen we de volgende aanpak gebruiken:

* we gebruiken twee elementen voor het renderen van de tekst: een input-element en een niet-input element.
* we zorgen ervoor dat er altijd precies één van deze twee zichtbaar is;
* een klik (selectie) op het niet-input element verandert de zichtbaarheid van de twee elementen;
* het invullen van een waarde in het input-element (changed?) verandert de zichtbaarheid van de twee elementen - en is een actie/input voor MVC.

## Opboow van een pagina

Je kunt voor het opbouwen van de pagina verschillende methodes gebruiken:

### 1.

* een plaatsvervangend/omvattend element, waarin de uiteindelijke view(s) geplaatst moeten worden;
* afzonderlijke functies om deze views te renderen - uitgaande van het model

### 2.

* html, met daarin verwijzingen naar het model (bijvoorbeeld, zoals in knockout).

Deze vorm is meer declaratief: dit geeft een eenvoudiger gebruik, maar meestal ook minder mogelijkheden om e.e.a. aan te passen.

----

Je hebt te maken met het opbouwen van de pagina - en de verschillende views daarin; en met de updates op de elementen op de pagina.

Bij het opbouwen moet je ook de verbindingen maken.

Voor het renderen van een onderdeel van een model moet je de juiste context hebben; bijvoorbeeld het element in de DOM dat moet veranderen. Deze context moet je ergens vastleggen. (In principe kun je dat element niet vernoemen naar het model, omdat er meerdere elementen kunnen zijn die van het model afhangen. Of: je moet hiervoor een class gebruiken.)

Beschouwen we een view ook als een component? Heeft deze component ook een eigen state nodig, of is de state van het model voldoende, eventueel in combinatie met de context in de DOM?

----

De meeste voorbeelden van MVC-frameworks bieden een "patroon" dat je moet volgen om het geheel te laten werken. Er valt verder niet veel te begrijpen: het mechanisme is in het framework verborgen. In het bijzonder krijg je niet direct inzicht in de complexiteit en de kosten van het geheel. Maar voor eenvoudige toepassingen is dat verder geen probleem.

Wat voegt dit toe aan de kennis van programmeren? Wat is hier conceptueel aan?

* het onderscheid tussen model en view is iets dat je op veel verschillende plaatsen tegenkomt; denk ook aan de verschillende views op een database-model.

----

Over keys: we kunnen keys gebruiken die onder alle soorten veranderingen (redelijkerwijs) uniek zijn, bijvoorbeeld op basis van een random generator/hash key. Daarmee kunnen we ervoor zorgen dat gedistribueerd aangemaakte nieuwe todo-elementen geen onderlingen conflicten opleveren. We kunnen dan de synchronisatie waarschijnlijk beter uitvoeren.

----

Over efficiëntie: uiteindelijk is het belangrijk om een efficiënte implementatie te hebben. We willen niet bij elke kleine verandering in het model alle views op het model compleet opnieuw genereren. Maar voor de eerste versie maken we ons daarover nog niet druk.

Structuur:

* bij elke verandering van het model wordt de functie `updateViews` aangeroepen. Deze eigenschap van het model wordt ingevuld door de views (buiten het model).
* voor de acties op de todo-elementen gebruiken we een generieke handler (op de hele lijst), waarin we aan de hand van het event-target uitzoeken waar de actie plaats gevonden heeft.
* hiervoor moeten we de verschillende elementen van de view benoemen; dit kan eigenlijk niet op basis van de namen in het model - immers, in principe zijn er meerdere views op het model mogelijk. Deze namen zijn gekoppeld aan de views. (Maar als voorlopige oplossing kunnen we dit wel kiezen.)
* 

We proberen voor het tekst-veld van de todo een "editor" te openen, als een gebruiker op dit veld klikt. Deze editor bestaat uit een input-element van het type text.

NB: als je buiten het input-veld klikt, dan moet dit opgeruimd worden - bijvoorbeeld door opniew de view te renderen. Het kan dan nodig zijn om tweemaal te klikken als je een ander veld wilt veranderen.
(Een minder fraaie methode is om in het begin van de click-handler een "render" uit te voeren.)

Het is misschien handiger om eerst een eenvoudige versie van de todo-list te maken, waarbij de tekst weergegeven wordt als een input-element.

### Delete todo item

Een todo-element heeft een button(o.i.d.) voor het verwijderen van het element.

### Meerdere stappen

We ontwikkelen de todo-toepassing in een aantal stappen:

1. toevoegen en verwijderen van items; markeren als "done";
2. veranderen van de tekst van een item;
3. lokaal opslaan van de lijst van items;
4. synchroniseren met een server van de lijst met items.

(We proberen de moeilijkheden geleidelijk te introduceren. E.e.a. is wat ingewikkelder dan ik eerst ingeschat had.)

Een open vraag: hoeveel rekening houden we met de efficiëntie van de MVC update? Een eenvoudige oplossing is om alles opnieuw te renderen, maar dat geeft voor mijn gevoel niet het juiste voorbeeld.

NB: de voorbeelden op GitHub, van de Todo, zijn vooral ook bedoeld om te laten zien hoe goed bepaalde frameworks zijn. Ze zijn minder geschikt voor het illustreren van de manieren waarop je de met "kaal" JS en HTML kunt doen.

