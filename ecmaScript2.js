var myLetters = ["H","E","L","L","O"," ","W","O","R","L","D"];
var myLetLocation = 0;
var myTiming=0;


function startPage(){
    var mySoftDiv = document.getElementById("mySHatDiv");
    mySoftDiv.style.left = '20px';
    mySoftDiv.style.top = '20px';
    var myPaintDiv = document.getElementById("myPHatDiv");
    myPaintDiv.style.left = '20px';
    myPaintDiv.style.top = '170px';
    var myEntDiv = document.getElementById("myEntHatDiv");
    myEntDiv.style.left = '20px';
    myEntDiv.style.top = '270px';



    let myTimer = setInterval(lineBlinker,333);
    function lineBlinker(){
        if(myTiming%2 == 0){
            document.getElementById("intro").innerHTML = "|";
            
            }
            else{
            document.getElementById("intro").innerHTML = "_";
        }   
        myTiming++;
        if(myTiming == 6){
            clearInterval(myTimer);
            startWorld();
            myTiming =0;
        }
    }
}
function startWorld(){
        document.getElementById("intro").innerHTML ="_";
    let myTimer = setInterval(blinker,100);
    function blinker(){
        switch(myLetLocation){
            case 0: 
                    document.getElementById("intro").innerHTML = myLetters[0];
                    break;
            case 1: document.getElementById("intro").innerHTML += myLetters[1];
                    break;
            case 2: document.getElementById("intro").innerHTML += myLetters[2];
                    break;
            case 3: document.getElementById("intro").innerHTML += myLetters[3];
                    break;
            case 4: document.getElementById("intro").innerHTML += myLetters[4];
                    break;
            case 5: document.getElementById("intro").innerHTML += myLetters[5];
                    break;
            case 6: document.getElementById("intro").innerHTML += myLetters[6];
                    break;
            case 7: document.getElementById("intro").innerHTML += myLetters[7];
                    break
            case 8: document.getElementById("intro").innerHTML += myLetters[8];
                    break;
            case 9: document.getElementById("intro").innerHTML += myLetters[9];
                    break;
            case 10: document.getElementById("intro").innerHTML += myLetters[10];
                     break;
            case 25: clearInterval(myTimer);
                    showHats();
                    break;
        }
        myLetLocation++;
    }
}
var hatTimer;
function showHats(){
        var mySeDiv = document.getElementById("mySHatDiv");
        hatTimer = setInterval(moveHats,1);
        var sPos = -400;
                function moveHats(){
                        mySeDiv.style.left =   sPos + "px";
                        sPos+=20;
                        if(sPos > 20){
                                clearInterval(hatTimer);
                                flashHat();
                        }
                }

}

function flashHat(){
        var x=0;
        var timer = setInterval(flasher,10)
        var myPic = document.getElementById("mySe");
        function flasher(){
                if(x<5){
                        document.getElementById("mySe").style.boxShadow = "0px 0px 20px blue";
                }else{
                        document.getElementById("mySe").style.boxShadow  = "0px 0px 0px red";
                }
                x++;
        }

}



