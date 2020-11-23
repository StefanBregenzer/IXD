var artyom = new Artyom();

var inhalt = [];
var essen = [];
var trinken = [];

var hinzu = "";
var addDelete = true;

var commandGroup = 
[
    {
        description: "Aus Höflichkeit sagt man guten Tag",
        smart: false,
        indexes: ["hallo",
                  "guten morgen",
                  "hey"],
        action: function(i){
            if(i == 0){
                artyom.say("Hallo auch.");
            }
            else if(i == 1){
                artyom.say("Guten Morgen. Wie gehts es dir?");
            }
            else if(i == 2){
                artyom.say("Hallo.");
            }
            console.log("commandHello");
        }
    },
    {
        description: "Was befindet sich im Kühlschrank",
        smart: false,
        indexes: ["Was ist im Kühlschrank",
                  "Was ist in Kühlschrank",
                  "Was befindet sich im Kühlschrank",
                  "Was befindet sich in Kühlschrank",
                  "Was habe ich im Kühlschrank",
                  "Was habe ich in Kühlschrank"],
        action: function(i){
            if(inhalt.length == 0){
                artyom.say("Der Kühlschrank ist leer.");
            }
            else{
                artyom.say("Es befinden sich ");
                inhalt.forEach(function(item, index, array){
                    artyom.say(item);
                });
                artyom.say(" im Kühlschrank.");
            }
        }
    },
    {
        description: "Welches Essen befindet sich im Kühlschrank",
        smart: false,
        indexes: ["Was für Essen ist im Kühlschrank",
                  "Was für Essen ist in Kühlschrank",
                  "Welches Essen befindet sich im Kühlschrank",
                  "Welches Essen befindet sich in Kühlschrank",
                  "Was habe ich zu essen",
                  "Was für Essen habe ich"],
        action: function(i){
            if(essen.length == 0){
                artyom.say("Im Kühlschrank ist kein Essen.");
            }
            else{
                artyom.say("Es befinden sich ");
                essen.forEach(function(item, index, array){
                    artyom.say(item);
                });
                artyom.say(" im Kühlschrank.");
            }
        }
    },
    {
        description: "Welche Getränke befindet sich im Kühlschrank",
        smart: false,
        indexes: ["Was für Getränke sind im Kühlschrank",
                  "Was für Getränke sind in Kühlschrank",
                  "Welche Getränke befindet sich im Kühlschrank",
                  "Welche Getränke befindet sich in Kühlschrank",
                  "Was habe ich zu trinken",
                  "Was für Getränke habe ich"],
        action: function(i){
            if(trinken.length == 0){
                artyom.say("Im Kühlschrank sind keine Getränke.");
            }
            else{
                artyom.say("Es befinden sich ");
                trinken.forEach(function(item, index, array){
                    artyom.say(item);
                });
                artyom.say(" im Kühlschrank.");
            }
        }
    },
    {
        description: "Füge etwas zum Kühlschrank hinzu",
        smart: true,
        indexes: ["Füge dem Kühlschrank * hinzu",
                  "Füge den Kühlschrank * hinzu",
                  "Füge * zum Kühlschrank hinzu",
                  "Stelle * in den Kühlschrank",
                  "Stelle * in dem Kühlschrank",
                  "Füge * dem Kühlschrank hinzu",
                  "Füge * den Kühlschrank hinzu"],
        action: function(i, wildcard){
            hinzu = wildcard;
            addDelete = true;
            console.log(hinzu + " will be added");
            var newInhalt = inhalt.push(wildcard);
            inhalt.forEach(function(item, index, array){console.log(item, index);});
            artyom.say("Handelt es sich um etwas zu essen oder zu trinken?");
        }
    },
    {
        description: "Entferne etwas aus dem Kühlschrank",
        smart: true,
        indexes: ["Nehme * aus dem Kühlschrank",
                  "Nehme * aus den Kühlschrank",
                  "Entferne * aus dem Kühlschrank",
                  "Entferne * aus den Kühlschrank"],
        action: function(i, wildcard){
            hinzu = wildcard;
            addDelete = false;
            console.log(hinzu + " will be removed");
            inhalt.forEach(function(item, index, array){
                if(item == hinzu){ 
                    var removedItems = inhalt.splice(index, 1);
                }
                inhalt.forEach(function(item, index, array){console.log(item, index);});
            });
            artyom.say("Handelt es sich um etwas zu essen oder zu trinken?");
        }
    },
    {
        description: "Switche zwischen Essen und Trinken",
        smart: false,
        indexes: ["Essen",
                  "Etwas zu essen",
                  "Zum essen",
                  "Trinken",
                  "Etwas zu trinken",
                  "Zu trinken"],
        action: function(i){
            //Prüfen ob hinzu leer ist
            if(hinzu == ""){artyom.say("Es wurde nicht definiert um was es sich handelt");}
            
            //Prüfen ob etwas hinzugefügt oder entfernt werden soll
            else if(addDelete){
                //Es soll etwas hinzugefügt werden
                //Prüfen ob Essen oder Trinken hinzugefügt werden soll
                if(i<3){
                    //Essen wird hinzugefügt
                    var newFood = essen.push(hinzu);
                    artyom.say(hinzu + " wurde dem Kühlschrank als Essen hinzugefügt.");
                    essen.forEach(function(item, index, array){console.log(item, index);});
                    hinzu = "";
                }
                else {
                    //Trinken wird hinzugefügt
                    var newDrink = trinken.push(hinzu);
                    artyom.say(hinzu + " wurde dem Kühlschrank als Getränk hinzugefügt.");
                    trinken.forEach(function(item, index, array){console.log(item, index);});
                    hinzu = "";
                }
            }
            else {
                //Es wird etwas entfernt
                //Prüfen ob Essen oder Trinken entfernt werden
                if(i<3){
                    //Essen wird entfernt
                    essen.forEach(function(item, index, array){
                        if(item == hinzu){
                            var removedItems = essen.splice(index, 1);
                            artyom.say("Das Essen " + hinzu + " wurde aus dem Kühlschrank entfernt.");
                        }
                    essen.forEach(function(item, index, array){console.log(item, index);});
                    });
                }
                else{
                    //Trinken wird entfernt
                    trinken.forEach(function(item, index, array){
                        if(item == hinzu){
                            var removedItems = trinken.splice(index, 1);
                            artyom.say("Das Getränk " + hinzu + " wurde aus dem Kühlschrank entfernt.");
                        }
                    trinken.forEach(function(item, index, array){console.log(item, index);});
                    });
                }
                hinzu = "";
            }
        }
    }
];

window.addEventListener("load", startup());
                        
function startup() {
    
    artyom.addCommands(commandGroup);
    
    startContinuousArtyom();
}
    
function startContinuousArtyom() {
    artyom.fatality();
    
    setTimeout(function () {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
        }).then(function () {
            console.log("Ready!");
            artyom.say("Möchtest du etwas bestimmtes?");
            consloe.log("And ready again!");
        });
    }, 250);
}
