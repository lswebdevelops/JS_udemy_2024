let inputButton = document.querySelector("input");
inputButton.click();

let ulEl = document.firstElementChild.querySelector("ul")
ulEl.style.listStyle = "none"

let ulEl2 = document.querySelector("body a")
ulEl2.style.textDecoration = "none"
ulEl2.style.color = "blue"



let liElement = document.querySelectorAll("ul > li")

liElement.forEach(element => {
    element.style.color = "blue"
});

let buttomElemnt = document.querySelector("button")
buttomElemnt.style.color = "firebrick"
buttomElemnt.style.borderBlockColor = "grey"
buttomElemnt.style.borderRadius = "8px"
buttomElemnt.style.padding = "10px"

document.querySelector("button").classList.add("small");
document.querySelector("button").classList.toggle("small");

//  adding attributes 
document.querySelector("a").setAttribute("href", "https://www.bing.com/");


document.querySelector("a").setAttribute("target", "_blank");

document.querySelector("a").textContent = "Go to Bing"

