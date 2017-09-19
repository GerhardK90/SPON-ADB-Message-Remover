/*
 SPON Adblocker Message Removal 
 Removes the "adblocker detected" message periodically shown by spiegel.de 
 19-09-2017
 (c) 2017 - Gerhard Klasse - info@Gerhard-Klassen.de 
*/


function injectJS(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
}

injectJS(chrome.extension.getURL("/remover.js"));