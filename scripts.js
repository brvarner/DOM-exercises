let textAppear = function(){
let paragraph = document.createElement("p");
let text = document.createTextNode("This is an example of some paragraph text!!");

paragraph.style.color = "red";
paragraph.style.textTransform = "uppercase";
paragraph.className = "some-paragraph";

paragraph.appendChild(text);
// Element on the LEFT of the appendChild function will ALWAYS be the one with the child being appended to it.

document.body.appendChild(paragraph);

let button = document.createElement("button");
let btnText = document.createTextNode("Click Me!");
button.appendChild(btnText);
document.body.appendChild(button)

let creator = function(){
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("I've been clicked!");
    h1.appendChild(h1Text);
    document.body.appendChild(h1);
}

button.addEventListener("click", creator)
};

document.addEventListener("DOMContentLoaded", textAppear)