function selectRandomTemplate()   //add each new template to the array to randomly select the next problem
{
    var func = ["slopeIntercept1"];
    //var func = ["slopeIntercept1","slopeIntercept2","slopeIntercept3"];   //for testing to demonstrate random function selection
    return eval(func[getNumber(0, func.length)]+"()");                      //concatinates array value to make function call and evaluates, returns values to main.
}

function slopeIntercept1()
{
    //alert("Slope Intercept 1");
    let x=getNumber(1,10);
    let y=getNumber(1,10);
    let b=getNumber(1,10);
    
    document.getElementById("section1").innerHTML = "Rewrite the following in Slope Intercept Form:";
    
    let answer = [x,"x","=",y,"y","+",b];
    document.getElementById("section2").innerHTML = (toString(answer));
    
    answer = [0,"=",y,"y","+",b,"-",x,"x"];
    document.getElementById("section3").innerHTML = (toString(answer));
    
    answer = ["-",y,"y","=","-",x,"x","+",b];
    document.getElementById("section4").innerHTML = (toString(answer));
    
    answer = ["y","=",x/y,"x","+",b/y];
    document.getElementById("section5").innerHTML = (toString(answer));
    
    return [x,y,b,toString(answer)];
}

function slopeIntercept2()              //placeholder for second slope intercept template
{
    //alert("Slope Intercept 2");
}

function slopeIntercept3()              //placeholder for third slope intercept template
{
    //alert("Slope Intercept 3");
}

/*
function slopeInterceptAlt()            //template attempt #1
{
    alert("alt");
    let x=getNumber(1,10);
    let b=getNumber(1,10);
    let y=getNumber(1,10);
    
    document.getElementById("section1").innerHTML = (x+"x = "+y+"y + " + b);
    document.getElementById("section2").innerHTML = ("0 = "+y+"y - "+x+"x + " + b);
    document.getElementById("section3").innerHTML = ("-"+y+"y = -"+x+"x + "+b);
    document.getElementById("section4").innerHTML = ("y = "+x/y+"x - "+b/y);
    
    let dec_answer=("y="+parseFloat((x/y).toFixed(3))+"x-"+parseFloat((b/y).toFixed(3)));
    let frac_answer=("y="+x+"/"+y+"x-"+b+"/"+y);
    
    document.getElementById("section6").innerHTML = (dec_answer);
    document.getElementById("section7").innerHTML = (frac_answer);
}
*/

/*
function solveX()
{
    let a=getNumber(2,10);
    let b=getNumber(2,10);
    let c=getNumber(2,10);
    
    document.getElementById("section1").innerHTML = ("");
    document.getElementById("section2").innerHTML = ("");
    document.getElementById("section3").innerHTML = ("");
    document.getElementById("section4").innerHTML = ("");
}
*/