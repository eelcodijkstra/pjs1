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

