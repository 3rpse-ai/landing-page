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
let navBar = document.querySelector(".navbar__menu")
let navBarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
let timeoutHandle = null;
/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav
function populateNavBar(){
    const myDocFrag = document.createDocumentFragment();

    //bulding the navBarItems based on the sections
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
    //adding the navBar Items to the Document 
    navBarList.appendChild(myDocFrag);
    updateNavBar(sections[0]);

    //event listener for hiding / showing navBar
    window.addEventListener('scroll', function() {
        
        if(navBar.style.display === "none"){
            navBar.style.display = "block";
        }
        if(timeoutHandle){
            clearTimeout(timeoutHandle);
            timeoutHandle = null;
        }
        timeoutHandle = setTimeout(function(){
            navBar.style.display = "none";
            console.log("deons work")
        }, 4000)
    });
}


// Mark section as active  when near top of viewport
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

function addScrollListener(tolookfor){
    window.addEventListener('scroll', function() {
        var element = tolookfor;
        var position = element.getBoundingClientRect();
        if(position.top >= 0 && position.top < 400) {
            updateNavBar(element);
        }
    });
}

// Scroll to anchor ID using scrollTO event
function scrollToPosition(event){
    event.preventDefault();
    const element = document.querySelector(event.target.getAttribute("href"));
    element.scrollIntoView({behavior: "smooth"});
}

populateNavBar();



