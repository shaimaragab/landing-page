/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//to access th navigation bar to add items to it
let navList = document.getElementById('navbar__list');
//to get all sections in the landing page
let sectionsList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//function to clear old active class state from the sections and its links
function clearOldActiveFunction(oldActiveState){
    oldActiveState.forEach(list => {
        list.classList.remove("your-active-class");
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//using foreach method to loop on the section list and create nav bar dynamically (nav item and link for each section dynamically)
let fragment = document.createDocumentFragment();
sectionsList.forEach(elem => {
let textLink = elem.getAttribute('data-nav');
let newLi = document.createElement('li');
let newLink = document.createElement('a');
let newText = document.createTextNode(textLink);
newLink.appendChild(newText);
newLi.appendChild(newLink);
// Scroll to section on link click using event listener on the link of the section in nav bar
newLink.addEventListener('click',function (){elem.scrollIntoView({behavior: "smooth"})});
//using document fragment to increase performance
fragment.appendChild(newLi);
});
//creating nav bar
navList.appendChild(fragment);


// Add class 'active' to section when near top of viewport
//adding event listener on scroll the window
window.addEventListener('scroll',function(){
sectionsList.forEach(elem => {
// USING getBoundingClientRect to return the section position relative to the viewport
let sectionPos = elem.getBoundingClientRect();
//to check which section is in the viewport
if (sectionPos.top > 0 && sectionPos.top < 200 ){
    // to remove the old active state for the sections before adding the active class to the recent active section in the view port
    sectionsList.forEach(list => {
        list.classList.remove("your-active-class");
    });
    // Set sections as active
  elem.classList.add("your-active-class");
  let linkList = document.querySelectorAll('a');
  // to remove the old active state for the links of the sections before adding the active class to link of the recent active section in the view port
  linkList.forEach(link => {
      if (link.textContent == elem.getAttribute('data-nav')){
        linkList.forEach(list => {
            list.classList.remove("your-active-class");
        });
          link.classList.add('your-active-class');
      }

  });  
}
})
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

