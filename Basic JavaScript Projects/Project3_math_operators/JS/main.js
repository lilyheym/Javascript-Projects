function addition_Function() {
    var addition = 2+2;     //addition
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;   //subtraction
    document.getElementById("Sub").innerHTML = "5 - 2 = " + Subtraction;
}

function simple_Multiplication() {
    var multiplication = 6 * 8;   //multiplication
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + multiplication;
}

function simple_Division() {     //division
    var division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;    //combo math
    document.getElementById("More").innerHTML = "1 plus 2, multiplied by 10, divided inhalf and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Remainder = 25 % 6;   //remainder
    document.getElementById("remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Remainder;
}

function negation_Operator() {   //applied negative
    var x = 10;
    document.getElementById("Negative").innerHTML = -x;
}

var Y = 5;  //increase by one
Y++;
document.write(Y);

document.write("<br>");

var Z = 5.25;   //decrease by one
Z--;
document.write(Z);

document.write("<br>");

document.write(Math.round(4.6));  //round up to nearest whole number





window.alert(Math.random());  //pop up random number