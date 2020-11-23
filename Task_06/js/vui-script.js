window.addEventListener("load", function () {
    var artyom = new Artyom();
    
    var commandHello = {
    indexes:["hallo","guten morgen","hey"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        artyom.say("Hallo ! Wie geht es dir heute?");
        console.log("commandHello");
        }
    };
    
    var commandAufgabe = {
        indexed: ["erstelle Aufgabe *","brauche Aufgabe *","erstelle die Aufgabe *"],
        smart: true,
        action: function(i,wildcard){
            artyom.say("Die neue Aufgabe " + wildcard + " wurde für dich erstellt");
            console.log("Task " + wildcard + " has been created.");
        }
    };
            
    
    artyom.addCommands(commandHello, commandAufgabe);
    
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
            });
        }, 250);
    }
    startContinuousArtyom();
});
