function displayType(breed) {
    var breedType = breed.getAttribute("data-breed-type");
    alert(breedType + " is a type of " + breed.innerHTML + ".");
}