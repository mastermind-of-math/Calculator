//set variables
var answer = "";
var currentdisp = "";
var display = "";
var currentans = "";
var currentnum = "";
var currentop = "";
var numlist = [];
var oplist = [];
var memory = "";

//setup
console.clear();
console.error("Does Not Follow Order of Operations");
window.alert("Does Not Follow Order of Operations");

//add a number to display
function num(number){
    currentnum = String(currentnum);
    number = String(number);
    if(number != "-" && number != "."){
        currentnum = currentnum + number;
        currentdisp = display.concat(currentnum);
        document.getElementById("display-div").innerHTML = currentdisp;
        console.log("Pressed " + number);
        console.log("Successfully Added Number");
    } else if(number == "-"){
        if(!currentnum.includes("-")){
            currentnum = "-" + currentnum;
            currentdisp = display.concat(currentnum);
            document.getElementById("display-div").innerHTML = currentdisp;
            console.log("Pressed (-)");
            console.log("Successfully Added Negation");
        }
    } else if(number == "."){
        if(!currentnum.includes(".")){
            currentnum = currentnum + ".";
            currentdisp = display.concat(currentnum);
            document.getElementById("display-div").innerHTML = currentdisp;
            console.log("Pressed 'Decimal'");
            console.log("Successfully Added Decimal");
        }
    }
}

//add operation to display
function oper(operation){
        numlist.push(currentnum);
        oplist.push(operation);
        currentnum = "";
        display = currentdisp + operation;
        document.getElementById("display-div").innerHTML = display;
        console.log("Pressed " + operation);
        console.log("Successfully Added Operator");
}

//clear all
function allClear(text){
    answer = "";
    currentdisp = "";
    display = "";
    currentans = "";
    currentnum = "";
    currentop = "";
    numlist = [];
    oplist = [];
    console.clear();
    console.error("Does Not Follow Order of Operations");
    window.alert("Does Not Follow Order of Operations");
    document.getElementById("display-div").innerHTML = "";
    document.getElementById("answer-div").innerHTML = text;
    console.log("Successfully Cleared All");
}

//clear current number
function clearCurrent(){
    currentnum = "";
    currentdisp = display;
    document.getElementById("display-div").innerHTML = currentdisp;
    console.log("Successfully Cleared");
}

//SOLVE!!!!!!!!!!!!!!!!!!
function solve(){
    console.log("Solve Started");
    numlist.push(currentnum);
    oplist.push("=");
    console.log(".push Sequence Completed");
    currentnum = "";
    display = currentdisp + "=";
    document.getElementById("display-div").innerHTML = display;
    currentans = numlist[0];
    console.log("solve setup Completed");
    console.log("for loop Started");
    for(var i = 0; i<numlist.length; i++){
        console.log("Switch Case Started");
        switch(oplist[i]){
            case "+":
                currentans = Number(currentans) + Number(numlist[Number(i)+1]);
                break;
            case "-":
                currentans = Number(currentans) - Number(numlist[Number(i)+1]);
                break;
            case "×":
                currentans = Number(currentans) * Number(numlist[Number(i)+1]);
                break;
            case "÷":
                currentans = Number(currentans) / Number(numlist[Number(i)+1]);
                break;
            case "^":
                currentans = Number(currentans) ** Number(numlist[Number(i)+1]);
                break;
            case "=":
                answer = currentans;
                console.log("Successfully Solved");
                document.getElementById("answer-div").innerHTML = answer;
        }
        console.log("Switch Case Ended");
    }
    console.log("for loop Ended");
    oplist = [];
    numlist = [];
    answer = "";
    currentdisp = "";
    display = "";
    currentans = "";
    currentnum = "";
    currentop = "";
    numlist = [];
    oplist = [];
    console.log("Solved");
}

//event keypressed
window.addEventListener("keypress", checkNum);

//keypressed check
function checkNum(e){
    numpressed = e.keyCode;
    if(numpressed >= 48 && numpressed <= 57){
        numpressed = numpressed - 48;
        num(numpressed);
    }
    if(numpressed == 45){
        num("-");
    }
}

//pi
function piValue(){
    currentnum = String(Math.PI);
    currentdisp = display.concat(currentnum);
    document.getElementById("display-div").innerHTML = currentdisp;
    console.log("Pressed " + currentnum);
}

//e
function eValue(){
    currentnum = String(Math.E);
    currentdisp = display.concat(currentnum);
    document.getElementById("display-div").innerHTML = currentdisp;
    console.log("Pressed " + currentnum);
}

//golden ratio
function grValue(){
    currentnum = String(1.618033988749894);
    currentdisp = display.concat(currentnum);
    document.getElementById("display-div").innerHTML = currentdisp;
    console.log("Pressed " + currentnum);
}