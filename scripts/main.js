
let menuOpen = false;

//Below handles a scrolling glitch present during anim on mobile/touch devices//
let galleryContainer = document.getElementById("galleryContainer");

galleryContainer.style.overflow = "hidden";
setTimeout(function(){
    galleryContainer.style.overflow = "visible";
}, 3000);

/* SIDEBAR STUFF */
/*This code drags/moves the sidebar out onto the page. */
function toggleSidebar() {
    let menu = document.getElementById("sidebarMenu");
    let menuButton = document.getElementById("buttonToggleSidebar");
    let logo = document.getElementById("gameLogo");

    let articleL1 = document.getElementById('article-left1');
    let articleL2 = document.getElementById('article-left2');
    let articleR1 = document.getElementById('article-right1');

    if (menuOpen == true){
        if (window.innerWidth > 1000){
            logo.style.width = "30vh";
        }
        else{
            logo.style.width = "42%";

        }
        logo.style.height = "auto"
        logo.style.overflow = "visible";

        articleL1.style.display = "flex";
        articleL2.style.display = "flex";
        articleR1.style.display = "flex";

        menuButton.innerHTML = "&#9776; Game Info";
        menuOpen = false;
        menu.style.width = "0px";
    } else {


        logo.style.width = "0";
        logo.style.height = "0";
        logo.style.overflow = "hidden";

        articleL1.style.display = "none";
        articleL2.style.display = "none";
        articleR1.style.display = "none";

        menuButton.innerHTML = "&#9776; Close";
        menuOpen = true;
        menu.style.width = "100vw";
    }
  }