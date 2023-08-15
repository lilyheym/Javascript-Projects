function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;        //ternary operator
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}
function Fruit(color, taste, seeds) {
    this.Fruit_color = color;    //fruit, new and this
    this.Fruit_taste = taste;
    this.Fruit_seeds = seeds;
}
var fruit1 = new Fruit('Yellow', 'Sweet', 1);
function myFruit() {
    document.getElementById("New_and_This").innerHTML =
    "This fruit is " + fruit1.Fruit_color + ", tastes " + fruit1.Fruit_taste + " and has " + fruit1.Fruit_seeds + " seed(s)";    //fruit1
}
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 10;
        function Plus_one()               //nested function
 {Starting_point += 1;}
Plus_one();
return Starting_point;
    }
}