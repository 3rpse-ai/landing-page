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
let navBarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function populateNavBar(){
    const myDocFrag = document.createDocumentFragment();

    for (section of sections){
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute("href","#" + section.id);
        link.innerHTML = section.getAttribute("data-nav");
        link.className = "menu__link";
        listItem.appendChild(link);
        listItem.addEventListener('click',scrollToPosition);
        myDocFrag.appendChild(listItem);
        addScrollListener(section);
    }
    navBarList.appendChild(myDocFrag);
    updateNavBar(sections[0]);
}
//es ist nicht ganz klar wie man scrollen soll -> event listener für anchor? -> default behavior unterdrücken? -> id von anchor nehmen und mit $('#id').ScrollTo(); hinscrollen
function scrollToPosition(event){
    event.preventDefault();
    const element = document.querySelector(event.target.getAttribute("href"));
    element.scrollIntoView({behavior: "smooth"});
}

function addScrollListener(tolookfor){
    window.addEventListener('scroll', function() {
        var element = tolookfor;
        var position = element.getBoundingClientRect();
        if(position.top >= 0 && position.top < 400) {
            updateNavBar(element);
        }
    });
}


function updateNavBar(target){
    const navBarItems = navBarList.querySelectorAll("li");
    for(navItem of navBarItems){
        let link = navItem.querySelector("a");
        if (link.innerHTML == target.getAttribute("data-nav")){
            link.classList.remove("menu__link");
            link.classList.add("menu__link__selected");
        } else{
            link.classList.add("menu__link");
            link.classList.remove("menu__link__selected");
        }
    }
}


populateNavBar();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


