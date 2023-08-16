function Call_Loop() {
    var count = 0;
    document.write("Starting Loop" + "<br />");
    do {
        document.write("Current Count : " + count + "<br />");     //loop function
        count++;
    }

    while (count < 5);
    document.write ("Loop Stopped!");

}


var Shows = ["The Good Place", "MASH", "Euphoria", "Buffy the Vampire Slayer", "Star Trek", "Avatar: The Last Airbender", "The Mandalorian"];
var Content = "";
var Y;                                    //for loop function
function for_Loop() {
    for (Y = 0; Y < Shows.length; Y++) {
        Content += Shows[Y] + "<br>";
    }
    document.getElementById("List_of_Shows").innerHTML = Content
}

function array_Function() {     //array function
    var Drink = [];
    Drink[0] = "milkshake";
    Drink[1] = "tea";
    Drink[2] = "soda";
    Drink[3] = "coffee";
    document.getElementById("Array").innerHTML = "There are  many types of drinks, such as a " +
        Drink[0] + ".";

}

function constant_Function(){            //constant function, put my time as a ramp agent to use
    const Cargo_Airplane = {type: "Airbus 300", company: "United Postal Service", decks:"two" };
    Cargo_Airplane.decks = "one";
    Cargo_Airplane.bellies = "yes";
    document.getElementById("Constant").innerHTML = "The cargo plane, The " + Cargo_Airplane.type + " has " + Cargo_Airplane.decks + " deck(s).";
}

var X = 50;
document.write(X);
{
    let X = 25;
    document.write("<br>" + X);  //let demonstration, only works if I remove 'defer' from html 
}
document.write("<br>" + X);

let pen = {   //let object keyword
    type: "gel ",
    color: "black ",
    grip: "rubber ",
    use: "click",
    description : function() {
        return "The pen is a " + this.color + this.type + this.grip + this.use + " pen.";
    }

};
document.getElementById("Pen_Object").innerHTML = pen.description();