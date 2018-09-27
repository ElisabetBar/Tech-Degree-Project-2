/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
"use strict";

// Constants needed
const pageList = document.querySelector('ul');
const eachStudent = pageList.children;
const studentsPerPage = 10;
var pagesNumbersList;
var studentList = document.getElementsByClassName('student-list')[0];
var studentNumber = studentList.children.length;

const page = document.querySelector(".page");
const buttonDiv = document.createElement("div");
buttonDiv.className = "pagination";
const buttonUl = document.createElement("ul");
buttonDiv.appendChild(buttonUl);
page.appendChild(buttonDiv);

//create a function that would determining the amount of pages needed per students
function amountOfPages() {
    let pages = Math.ceil(eachStudent.length / studentsPerPage);
    return pages;
}

// create a Function that would show the first ten students
function showFirstTen() {
    for (let i = 0; i < eachStudent.length; i++) {
        if (i < studentsPerPage) {
            eachStudent[i].style.display = '';
        } else {
            eachStudent[i].style.display = 'none';
        }
    }
    var a = document.querySelectorAll('ul li a');
    a[0].classList.add('active');


}

// create a function to get the links to be active
function activePage(item){
    item.onclick = function(){
         for(var i=0; i<studentNumber; i++){
            studentList.children[i].style.display = 'none';
        }

        for(var i=0; i<pagesNumbersList.length; i++){
            pagesNumbersList[i].classList.remove('class', 'active');
        }

        item.classList.add('active');
        var pageNumber = parseInt(item.innerHTML);
        var start = (pageNumber * 10) - 10;
        var end = (pageNumber * 10);
        for(var i=start; i<end; i++){
            studentList.children[i].style.display = 'block';
        }
    }
}

//  create page links based on the number of pages needed
for (let i = 1; i <= amountOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = '';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonUl.appendChild(pageli);
    pageli.appendChild(pageLink);
    pagesNumbersList = document.querySelectorAll('ul li a');
    pagesNumbersList.forEach(activePage, eachStudent);
}


// create an event listener to divide students among the pages
buttonDiv.addEventListener('click', (event) => {
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;
    for (let i = 0; i < eachStudent.length; i++) {
        if (i >= min && i < max) {
            eachStudent[i].style.display = '';
        }  else {
            eachStudent[i].style.display = 'none';
        }
    }
});


// Function call to display first ten students on load
showFirstTen();







