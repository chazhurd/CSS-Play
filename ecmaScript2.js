var myLetters = ["H","E","L","L","O"," ","W","O","R","L","D"];
var myLetLocation = 0;
var myTiming=0;


function startPage(){
    let myTimer = setInterval(lineBlinker,333);
    function lineBlinker(){
        if(myTiming%2 == 0){
            document.getElementById("intro").hidden = true;
            
            }
            else{
            document.getElementById("intro").hidden = false;
        }   
        myTiming++;
        if(myTiming == 4){
            clearInterval(myTimer);
            startWorld();
            myTiming =0;
        }
    }
}
function startWorld(){
    let myTimer = setInterval(blinker,100);
    function blinker(){
        switch(myLetLocation){
            case 0: document.getElementById("intro").innerHTML += myLetters[0];
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

function showHats(){
        document.getElementById("intro").innerHTML = "";
        var mySeHat = document.getElementById("mySe");
        var myPaintHat = document.getElementById("myPaint");
        let myTimer = setInterval(showBiz, 2);

        function showBiz(){
                mySeHat.width += 6;
                mySeHat.height += 3;
                myPaintHat.width += 6;
                myPaintHat.height += 3;
                if(mySeHat.width >= 389){
                        clearInterval(myTimer);
                }
        }

}
