/* Copyright Drizzle LTE
Created by @ZippyMagic
Version {{version}}
*/
function binaryAgent(str) {

var binString = '';

str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
}


(function () {


    // Create Username Cookie
    var u = binaryAgent(document.getElementById("drizzle-uname").innerHTML);
    document.cookie = "uName=" + u + ";";

    
    // Begin Style loader
    var STYLE = document.createElement("LINK");
        STYLE.rel = 'stylesheet';
        STYLE.type = 'text/css';
        STYLE.href = 'drizzle/drizzle-style.min.css'
    document.getElementById("body").appendChild(STYLE);
    
    
    // Begin Header Creation
    var HEADER = document.createElement("DIV");
        HEADER.id = 'drizzle-header';
        HEADER.style = "display: block; position: absolute; float: right; top: 0px; right: 0px; border: 2px solid purple;";
        document.body.appendChild(HEADER);
    var CREDIT_ELEMENT = document.createElement("P");
    var CREDIT = document.createTextNode("Powered by ");
        CREDIT_ELEMENT.id= 'drizzle-element';
        CREDIT_ELEMENT.style = "padding: 4px 2px 4px 2px; text-color: lightGray; font-color: lightGray; color: lightGray;";
        CREDIT_ELEMENT.appendChild(CREDIT);
        document.getElementById("drizzle-header").appendChild(CREDIT_ELEMENT);
    var CREDIT_ELEMENT_LOGO = document.createElement("CODE");
    var CREDIT2 = document.createTextNode("DRIZZLE");
        CREDIT_ELEMENT_LOGO.style = "text-color: purple; color: purple; font-color: purple;";
        CREDIT_ELEMENT_LOGO.appendChild(CREDIT2);
        document.getElementById("drizzle-element").appendChild(CREDIT_ELEMENT_LOGO);
    
    // Begin Website
    var WEB_JSON = [
        document.getElementById("drizzle-web-top-array").innerHTML
    ]
     
    function createHeader(arr) {
        var out = '<div id="drizzle-web-header">';
        var count;
        for(count = 0; count < arr.length; count++) {
            out += '<a id="drizzle-web-header-content" href="' + arr[count].url + '">' + arr[count].display + '</a>';
        }
        var out2 = out;
        var out = out2 + '</div>'
        var doc = document.getElementById("body").innerHTML;
            document.getElementById("body").innerHTML = doc + out;
    }
    
    createHeader(WEB_JSON);
})();
