var display = document.querySelector('.test');
var body = document.querySelector('body');

var XML = new XMLHttpRequest();

// XML.open('GET', 'http://www.freegeoip.net/xml/4.2.2.2');
XML.open('GET', 'http://www.freegeoip.net/json/github.com');

XML.send();

// XML.onload = function (response) {
//     if (XML.status === 200) {
//         var doc = XML.responseXML;
//         console.log(doc);
        
//         var result = doc.querySelector('IP');
//         console.log(result);
        
//         // var parser = new DOMParser();
//         // var data = parser.parseFromString(text, 'application/xml')
//         // console.log(data);
//         display.appendChild(result)
//         body.appendChild(display);

        
        
//     }
// }
XML.onload=function(){
    if (XML.status >= 200 && XML.status < 400) {
        // Success!
        var data = JSON.parse(XML.responseText);
        console.log(data);
        var result=data.city
        display.textContent=result;
        body.appendChild(display);
        } else {
        // We reached our target server, but it returned an error
        
        }
        };
        



