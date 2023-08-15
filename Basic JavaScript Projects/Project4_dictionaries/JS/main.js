function my_Dictionary() {
    var Pet = {
        Species: "Cat",
        Color: "Black",    //my pet description
        Age: "six months",
        Sex: "Female",
        Name: "Black Sesame"
    };
    delete Pet.Name;   //delete key
    document.getElementById("Dictionary").innerHTML = Pet.Name;  //display when called
    
}