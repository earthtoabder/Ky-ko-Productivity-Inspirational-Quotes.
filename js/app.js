function refreshTime() {
    var datetime = new Date().toLocaleTimeString('en-GB')
    document.getElementById('time').innerHTML=datetime;
}
  setInterval(refreshTime, 1000);


function Quote() {
  var fs = require("fs");
  var text = fs.readFileSync("./quotes.txt", 'utf8');
  var quotes = text.split("\n")

  var random_quote = quotes[Math.floor(Math.random() * quotes.length)]
  console.log(random_quote)

  document.getElementById('quote').innerHTML=random_quote;
 
}  
  Quote();
  setInterval(Quote, 1000);

var button = document.getElementById('btn');
  button.onclick = function user() {
    var input = document.getElementById("name").value;
    document.getElementById("greet").innerHTML=("Good evening "+input);
};

