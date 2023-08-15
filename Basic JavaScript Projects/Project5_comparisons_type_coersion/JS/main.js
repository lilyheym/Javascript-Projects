document.write(typeof "Word");
document.write("<br>")
document.write(45 + "15");
document.write("<br>");
document.write(5>10);
document.write("<br>");
document.write(7 == 7);
document.write("<br>");
document.write(9 == 6);
document.write("<br>");
X = "Dingus";
Y = "Dingus";
Z = "Bingus";
A = 5;
B = "5";
document.write(X === Y);
document.write("<br>");
document.write(X === Z);
document.write("<br>");
document.write(A === Y);
document.write("<br>");
document.write(A === B);
document.write("<br>");
document.write(5 < 8 && 9 < 13);
document.write("<br>");
document.write(5 > 8 && 9 < 13);
document.write("<br>");
document.write(5 < 8 || 8 < 5);
document.write("<br>");
document.write(5 > 8 || 8 < 5);





function my_Infinity() {
    document.getElementById("infinity").innerHTML = 5E954;
}

function my_NotInfinity() {
    document.getElementById("negativeInfinity").innerHTML = -5E954;
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 < 10);
}

function not_Function2() {
    document.getElementById("DoubleNot").innerHTML = !(5 > 10);
}

console.log(8 + 9);