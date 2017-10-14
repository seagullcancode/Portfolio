 window.onload=main;
          
        function main(){
            typeHTML();
        }
          
        function typeHTML(){
            var theDoc = document.getElementById('typecontainer');   
            var theText = "<!DOCTYPE html> <br> < html> <br> < head> <br> < title> A Simple Project < /title> <br> < /head> <br> < body> <br> < div id='main'> <br> < h1> A Simple Project < /h1> <br>  < div id='nav'> <br> < a href='index.html'> home < /a> <br> < /div> <br>  < div id='main'> <br> < p> 'A journey of a thousand miles begins with one single step.' < /p> <br> < p> Here is a chance to create something wonderful. < /p> <br> < p> < strong> Seagull Creative Factory < /strong> Let's work together! < /p> <br> < /div> <br> < /div> <br> < /body> <br> < /html>";
            var iChar = 1;
            var theLength = theText.length  + 2;
           timer = setInterval(function() {
               var newText = theText.substring(0, iChar);
               var bestText = newText.replace("<", '&#60;');
               theDoc.innerHTML = bestText;
               iChar+=2;
              if ( iChar > theLength ) {
                clearInterval( timer );
              }
            }, 200);
            
            
        }