var artyom = new Artyom();

var inhalt = ["Salami","Cola","Butter","Lauch","Milch"];
var essen = ["Salami","Butter","Lauch"];
var trinken = ["Cola","Milch"];

var einkaufszettel = [];

var hinzu = "";

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
                artyom.say("Guten Morgen. Wie geht es dir?");
            }
            else if(i == 2){
                artyom.say("Hallo.");
            }
            console.log("commandHello");
        }
    },
    {
        description: "Timer stellen",
        smart: true,
        indexes: ["Stelle einen Wecker auf * Uhr",
                  "Stelle einem Wecker auf * Uhr",
                  "Stelle einen Timer auf * Uhr",
                  "Stelle einem Timer auf * Uhr",
                  "Erinnere mich um * Uhr"],
        action: function(i,wildcard){
            artyom.say("Ein Wecker wurde auf " + wildcard + "Uhr gestellt.");
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
        description: "Erstelle einen Einkaufszettel",
        smart: false,
        indexes: ["Erstelle einen Einkaufszettel",
                  "Erstelle einem Einkaufszettel",
                 "Erstelle einen neuen Einkaufszettel",
                 "Erstelle einem neuen Einkaufszettel",],
        action: function(i){
            einkaufszettel = [];
            console.log("Einkaufszettel erstellt");
            artyom.say("Die Liste mit dem Namen Einkaufszettel wurde erstellt. Soll ich dieser Liste etwas hinzufügen?");
        }
    },
    {
        description: "Füge etwas zum Einkaufszettel hinzu",
        smart: true,
        indexes: ["Füge dem Einkaufszettel * hinzu",
                  "Füge den Einkaufszettel * hinzu",
                  "Füge * zum Einkaufszettel hinzu",
                  "Vermerke * auf dem Einkaufszettel",
                  "Vermerke * auf den Einkaufszettel",
                  "Füge * dem Einkaufszettel hinzu",
                  "Füge * den Einkaufszettel hinzu"],
        action: function(i, wildcard){
            console.log(wildcard + " will be added");
            var newInhalt = einkaufszettel.push(wildcard);
            einkaufszettel.forEach(function(item, index, array){console.log(item, index);});
            artyom.say(wildcard + "wurde der Liste Einkaufszettel hinzugefügt. Soll ich noch etwas hinzufügen?");
        }
    },
    {
        description: "Entferne etwas vom dem Einkaufszettel",
        smart: true,
        indexes: ["Nehme * vom Einkaufszettel",
                  "Nehme * von Einkaufszettel",
                  "Entferne * vom dem Einkaufszettel",
                  "Entferne * vom den Einkaufszettel",
                  "Entferne * von dem Einkaufszettel",
                  "Entferne * von den Einkaufszettel"],
        action: function(i, wildcard){
            hinzu = wildcard;
            console.log(hinzu + " will be removed");
            einkaufszettel.forEach(function(item, index, array){
                if(item == hinzu){ 
                    var removedItems = einkaufszettel.splice(index, 1);
                    artyom.say(wildcard + " wurde vom Einkaufszettel entfernt");
                }
                einkaufszettel.forEach(function(item, index, array){console.log(item, index);});
            });
            hinzu = "";
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
            console.log(hinzu + " will be removed");
            inhalt.forEach(function(item, index, array){
                if(item == hinzu){ 
                    var removedItems = inhalt.splice(index, 1);
                }
                inhalt.forEach(function(item, index, array){console.log(item, index);});
            });
            //Essen wird entfernt
            essen.forEach(function(item, index, array){
                if(item == hinzu){
                    var removedItems = essen.splice(index, 1);
                    artyom.say("Das Essen " + hinzu + " wurde aus dem Kühlschrank entfernt.");
                }
                essen.forEach(function(item, index, array){console.log(item, index);});
            });
            //Trinken wird entfernt
            trinken.forEach(function(item, index, array){
                if(item == hinzu){
                    var removedItems = trinken.splice(index, 1);
                    artyom.say("Das Getränk " + hinzu + " wurde aus dem Kühlschrank entfernt.");
                }
                trinken.forEach(function(item, index, array){console.log(item, index);});
            });
            hinzu = "";
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
            else {
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
        }
    }
];

window.addEventListener("load", startup());
                        
function startup() {
    
    artyom.addCommands(commandGroup);
    
    startContinuousArtyom();
}

function startButton() {

artyom.say("Möchtest du etwas bestimmtes?");

}

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
if(isFinal){
document.getElementById("understanded").value = recognized;
}else{
document.getElementById("understanded").value = recognized;
}
});
    
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
            console.log("And ready again!");
        });
    }, 250);
}
