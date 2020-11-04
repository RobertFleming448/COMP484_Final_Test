var correct;
function main(){
    document.getElementById("check").disabled = false; 
    hideAll();
    correct=selectRandomTemplate();
}
function getNumber(min, max) //random number between min and max(non-inclusive)
{
  return Math.floor(Math.random() * (max - min) ) + min;
}

function clean(input)
{
    let answer=input;
    for(i=0;i<answer.length; i++)
    {
        if(typeof answer[i] === "number")
        {
            input[i]=parseFloat((answer[i]).toFixed(3));
            if (i<answer.length)
            {
                if(answer[i] === 1 && (answer[i+1]==="y" || answer[i+1]==="x") )  //removes leading 1 from variables
                {
                    answer[i]=null;
                } 
            }
        }
    }
    
    let cleaned = [];
    for(i=0;i<answer.length; i++)
    {
        if(answer[i] !== null)
        {
            cleaned.push(answer[i]);
        }
    }
    
    return cleaned;
}

function toString(input)
{
    let answer=clean(input);
    ansString="";
    for(i=0;i<answer.length; i++)
    {
        ansString+=answer[i];
    }
    return ansString;
}
function hideAll()
{
    $("#status").fadeOut();
    $("#status").addClass("invisible");
    
    $("#section3").fadeOut();
    $("#section3").addClass("invisible");
    
    $("#section4").fadeOut();
    $("#section4").addClass("invisible");
    
    $("#section5").fadeOut();
    $("#section5").addClass("invisible");
    
    $("#section6").fadeOut();
    $("#section6").addClass("invisible");
    
    $("#section7").fadeOut();
    $("#section7").addClass("invisible");
    
    $("#section8").fadeOut();
    $("#section8").addClass("invisible");
    
    $("#section9").fadeOut();
    $("#section9").addClass("invisible");
    
    $("#contBut").fadeOut();
    $("#contBut").addClass("invisible");
}

function showAll()
{ 
    $("#status").fadeIn();
    $("#status").removeClass("invisible");
    
    $("#section3").delay(500).fadeIn();
    $("#section3").removeClass("invisible");
    
    $("#section4").delay(1000).fadeIn();
    $("#section4").removeClass("invisible");
    
    $("#section5").delay(1500).fadeIn();
    $("#section5").removeClass("invisible");
    
    $("#section6").delay(2000).fadeIn();
    $("#section6").removeClass("invisible");
    
    $("#section7").delay(2500).fadeIn();
    $("#section7").removeClass("invisible");
    
    $("#section8").delay(3000).fadeIn();
    $("#section8").removeClass("invisible");
    
    $("#section9").delay(3500).fadeIn();
    $("#section9").removeClass("invisible");
    
    $("#section10").delay(4000).fadeIn();
    $("#section10").removeClass("invisible");
    
    $("#contBut").delay(4000).fadeIn();
    $("#contBut").removeClass("invisible");
}

function checkAns()
{
    $("#status").removeClass("tryAgain");
    $("#status").removeClass("nice");
    
    //alert(correct[3]);
    let answer=document.getElementById("answer").value;
    answer = answer.replace(/\s/g,'');
    if(correct[3]===answer)
    {
        document.getElementById("status").innerHTML = ("Nice Work!");
        $("#status").addClass("nice");
        showAll();
    }
    else
    {
        document.getElementById("status").innerHTML = ("Not Quite...");
        $("#status").addClass("tryAgain");
        showAll();
    }
    
    document.getElementById("check").disabled = true; 
}

function NextQuestion()
{
    hideAll();
    document.getElementById("section1").innerHTML = ("");
    document.getElementById("section2").innerHTML = ("");
    document.getElementById("section3").innerHTML = ("");
    document.getElementById("section4").innerHTML = ("");
    document.getElementById("section5").innerHTML = ("");
    document.getElementById("section6").innerHTML = ("");
    document.getElementById("section7").innerHTML = ("");
    document.getElementById("section8").innerHTML = ("");
    document.getElementById("section9").innerHTML = ("");
    document.getElementById("section10").innerHTML = ("");
    
    $("#status").removeClass("tryAgain");
    $("#status").removeClass("nice");
    document.getElementById("status").innerHTML = ("");
    
    main();
}
