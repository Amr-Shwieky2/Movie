let myLi = document.querySelector("li.start-here"); 
myLi.textContent= "main title"; 

let myLiNextSibling =myLi.nextElementSibling; 

let myUl = myLiNextSibling.firstElementChild; 
let newSubTitle = document.createElement("li"); 
let subTitleText = document.createTextNode("sub title 4"); 
newSubTitle.appendChild(subTitleText); 
myUl.appendChild(newSubTitle);   

myLiParent = myLi.parentElement;  
myLiParent.lastElementChild.remove(); 

let head= document.head; 
let title= head.lastElementChild; 
title.textContent="Dom Master"; 

let div =myLiParent.nextElementSibling; 
let p=div.firstElementChild; 
p.textContent= "now i  know how to traverse the dom "; 