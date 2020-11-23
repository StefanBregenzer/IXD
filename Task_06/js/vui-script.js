var artyom = new Artyom();

var commandGroup = [
    {
        description: "Aus Höflichkeit sagt man guten Tag",
        smart: false,
        indexes: ["hallo","guten morgen","hey"],
        action:function(i){
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
        description: "Erstellen einer neuen Aufgabe",
        smart: true,
        indexed: ["erstelle Aufgabe *","brauche Aufgabe *","erstelle die Aufgabe *","brauche die Aufgabe *"],
        action: function(i, wildcard){
            artyom.say("Die neue Aufgabe " + wildcard + " wurde für dich erstellt");
            console.log("Task " + wildcard + " has been created.");
        }
    }
];

window.addEventListener("load", startup());
                        
function startup() {
    
    artyom.addCommands(commandGroup);
    
    startContinuousArtyom();
};
    
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
};
