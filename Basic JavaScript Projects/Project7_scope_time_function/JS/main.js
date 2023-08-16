var X = 6
function Add_numbers_1() {
    var Y = 10;
    document.write (X + Y + "<br>")         //adding function, demonstrating global vs local variables
}
function Add_numbers_2() {
    var Y = 10;
    document.write(12 + Y);
}
Add_numbers_1();
Add_numbers_2();

function myFunction() {
    if (new Date().getHours() < 18) {    //if function time
        document.getElementById("but what if").innerHTML = "It's not 6pm yet";
    }
}

if (5 > 7 || 8 < 12) {
    document.write("<br>" +"Idk, here's a statement.")      //if statement
}

function bird_Function() {
    var species = document.getElementById("bird").value;
    var answer
    if (species === "bird") {       //if functions
        answer = "you may enter the nest";
    }
    else {                       //if and else, angry birds
        answer = "you may not enter the nest";
    }
    document.getElementById("Bird_or_Pig").innerHTML = answer;

}
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon.";     //else if 
    }
    else {
        Reply = "It is the evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}