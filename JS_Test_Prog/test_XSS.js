console.log('hello');

var escape = require("html-escape");
var escapeHtml = require('escape-html');

var xssAttempt = "Hello <script>while(1);</script> world!";
// Output safe html
console.log("<p>" + escape(xssAttempt) + "</p>");
// "<p>Hello &lt;script>while(1);&lt;/script> world!</p>"
console.log("<p>" + escapeHtml(xssAttempt) + "</p>");