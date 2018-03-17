/*
 SPON Adblocker Message Removal 
 Removes the "adblocker detected" message periodically shown by spiegel.de 
 19-09-2017
 (c) 2017 - Gerhard Klasse - info@Gerhard-Klassen.de 
 https://github.com/GerhardK90/SPON-ADB-Message-Remover
*/

(function() {
    'use strict';
    function remPersistentMessage(){
        var removed1 = false;
        var removed2 = false;
        var divs = document.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++){

    
            if (divs[i].className != null){
                if(divs[i].className.includes("sp_veil")){
                     divs[i].style.display = "none";
                     removed1 = true;
                }
            }
            if (divs[i].getAttribute('id') != null){
                if( divs[i].getAttribute( 'id' ).includes("sp_message")){
                    divs[i].style.display = "none";
                    removed2 = true;
                }
            }
        }
        if(!removed1 || !removed2)
            setTimeout(remPersistentMessage, 100);

        document.getElementsByClassName("dt-www")[0].style.overflowY = "scroll";
        

    }

    function remAdWarning(){
        var removed = false; 

        var adbElement = document.getElementsByClassName('ua-default');
        while(adbElement[0]) {
            adbElement[0].parentNode.removeChild(adbElement[0]);
            removed = true;
        }

        var adbElement = document.getElementsByClassName('ua-detected ua-webkit');
        while(adbElement[0]) {
            adbElement[0].parentNode.removeChild(adbElement[0]);
            removed = true;
        }
        if(!removed)
            setTimeout(remAdWarning, 500);
    }

    remPersistentMessage();
    remAdWarning();

    
})();