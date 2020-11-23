window.addEventListener("load", function () {
    var artyom = new Artyom();
    
    var commandHello = {
    indexes:["hello","good morning","hey"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        artyom.say("Hey buddy ! How are you today?");
        }
    };
    
    var commandAufgabe = {
        indexed: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i,wildcard){
            artyom.say("Neue Aufgabe wird erstellt: " + wildcard);
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
