/*
 SPON Adblocker Message Removal 
 Removes the "adblocker detected" message periodically shown by spiegel.de 
 19-09-2017
 (c) 2017 - Gerhard Klasse - info@Gerhard-Klassen.de 
 https://github.com/GerhardK90/SPON-ADB-Message-Remover
*/

(function() {
    'use strict';
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
 remAdWarning();
    
})();