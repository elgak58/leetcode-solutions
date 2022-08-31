/**
*    Title: Javascript: console.log to html Solution
*    Author: Arun P Johny (https://stackoverflow.com/users/114251/arun-p-johny)
*    Date: Nov 28, 2013 at 2:42
*    Code version: no available
*    Availability: https://stackoverflow.com/questions/20256760/javascript-console-log-to-html
*
*/

(function () {
  var old = console.log;
  var output_screen = document.getElementById("output");
  
  console.log = function (message) {
      if (typeof message == 'object') {
          output_screen.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
      } else {
          output_screen.innerHTML += message + '<br />';
      }
  }
})();