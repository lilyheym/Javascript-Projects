var A = "This is a string?"         //These are variables
var B = "This is the beginning of the string " + " and this is the end of the string"
var Barbie = " Margo Robbie", Ken = " Ryan Gosling", Merman = " John Cena ";
var C = "Boo!"

x = 7   //expression

window.alert("Hello, World!");  //a window alert

document.write(A);

document.write(B)


document.write(" And so I told him, \"Silly Rabbit! Trix are for kids!\"");

document.write(" Some guy in Florida just won like 1.5 billion dollars. " +"Great! Now he can leave Florida!")         //a bunch of text
document.write(Merman)

const button = document.createElement('button')

button.innerText = 'Can you click me?'

button.id ='mainButton'

button.addEventListener('click', () => {
    alert('Oh, you clicked me!')
})
 document.body.appendChild(button)

