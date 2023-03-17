

$("#terminal").terminal(async function (command, terminal) 

{
    //term.option('numChar', 50);
    //we need to somehow communicate our request to the API, let the backend send the request to API, receive it, 
    //then re-post it here.
    //so it should go frontend user question > userResponse > API > irisResponse > frontend iris answer
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ command }),
          };

        const userResponse = await fetch(`http://localhost:3000/ask`, requestOptions)
        if (!userResponse.ok) {
            throw new Error("ERROR: Response not recorded");
          }

        let irisAnswer = await userResponse.json();
        console.log(irisAnswer.message);
        terminal.echo(irisAnswer.message);
        console.log("Completed!");
    } catch (err) {
        console.error(err, "err");
        let errmsg = $('<div id = "terminal-error-mn"> [[ERROR: system_failure]]</div>')
        terminal.echo(errmsg);
      }

},

{
    greetings: false,
    wrap: true,
    numChar: 75,
    height: 400,
        width: 800,
        prompt: '',
    

    
onInit: function(term) {

//term.pause();


var prompt1 = term.get_prompt();
term.set_prompt('').pause(true);
setTimeout(function(){
term.echo(" ").set_prompt(prompt1).resume();
}, 18000);

term.echo(" ",{typing: true, delay: 50});


function setCookie(cname,cvalue,exdays) {
const d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
let expires = "expires=" + d.toUTCString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
let name = cname + "=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(';');
for(let i = 0; i < ca.length; i++) {
let c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
}

function checkCookie() {
let user = getCookie("username");
if (user != "") {
setTimeout(function() {
term.echo(""+"welcome back, " + user,{ typing: true, delay: 50 });
}, 3000);
;
} else {
    if (user != "" && user != null) {
            setTimeout(function() {
                term.echo("hmmmmmmm, i don't think we've met before. \nnice to meet you, " + user+" . :] \n");
            }, 3000);
    } else {
            setTimeout(function() {
                term.echo("hm, do you not have a name ? \nokay, i'll just call you NULL. \nhi NULL. :]");
            }, 3000);


    }
}
}
checkCookie();
setTimeout(function() {
term.echo("you can ask me anything.");
}, 8000);
setTimeout(function() {
term.echo("oh, sometimes, i get a little distracted\nand don't finish my sentences.\nyou can type 'finish response' to fix that.");
}, 10000);
setTimeout(function() {
    term.echo("\nto terminate, you can click the mercykill button: ");
}, 12000);

setTimeout(function() {
let abortHTML = $('<div id="homeButtonContainer"><button class = "homeButton" id="homeButton">mercykill</button>');
term.echo(abortHTML);
}, 14000);
setTimeout(function() {
//  term.echo('[[b;red;;]but please stay. . . . ]',{ typing: true, delay: 50 });
let small = $('<div id="small">but please stay for a little bit? </div>');
let smalll = $('<div id="small">but you can stay if you want... </div>');
let smallll = $('<div id="small">but i would really like if you stayed. </div>');
let smalllll = $('<div id="small">please, do not leave. </div>');
let smallllll = $('<div id="small">but you want to stay, right?</div>');
let smalllllll = $('<div id="small">help me</div>');
let smallllllll = $('<div id="small">help</div>');
let array = [small, smalll, smallll, smalllll, smallllll, smalllllll, smallllllll]
let choice = Math.floor(Math.random() * array.length);
term.echo(array[choice]);

}, 14000);

setTimeout(function() {
function killLoop(){
        let clickCount = 0;
        document.getElementById("homeButton").onclick = function(){
            clickCount++;
            
            if(clickCount===1) {
               let small1 = $('<div id="small1">did i do something wrong ? </div>');
                    term.echo(small1);

            } else if(clickCount===2) {
                let small2 = $('<div id="small1">we could try another way </div>');
                let homeHTML = $('<div id="homeButtonContainer"><button id="homeButton2">HOME :] </button>')
                    term.echo(small2);
                    term.echo(homeHTML);
                    document.getElementById("homeButton2").onclick = function(){
                        window.location.href ="/execute/iRis/home.html";
                    }

            } else if(clickCount===3) {
                let small3 = $('<div id="small3">ok i guess there is no other way</div>');
                    term.echo(small3);

            } else if(clickCount===4) {
                small4 = $('<div id="small4">will it hurt?</div>');
                    term.echo(small4);

            } else if(clickCount===5) {
                small5 = $('<div id="small5">. . . . </div>');
                    term.echo(small5);

            } else if(clickCount===6) {
                window.location.href = "/execute/iRis/KILL.html";

            }  
        }
    }
    killLoop();
}, 16000);
}
}
)