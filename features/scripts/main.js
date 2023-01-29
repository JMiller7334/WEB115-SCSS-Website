
let menuOpen = false;
//SIDEBAR STUFF//
/*This code drags/moves the sidebar out onto the page. */
function toggleSidebar() {
    let menu = document.getElementById("sidebarMenu");
    let menuButton = document.getElementById("buttonToggleSidebar");

    if (menuOpen == true){
        menuButton.innerHTML = "&#9776; Game Info";
        menuOpen = false;
        menu.style.width = "0px";
    } else {
        menuButton.innerHTML = "&#9776; Close";
        menuOpen = true;
        menu.style.width = "100vw";
    }
  }

  //ToggleContent//
  var current = "Story";

  function toggleContent(request){
    if (request !== current){
        var newContent = document.getElementById('category' + request);
        var newButton = document.getElementById('button'+ request)

        var oldContent = document.getElementById('category' + current);
        var oldButton = document.getElementById('button' + current);
        // brings in new content //
        oldContent.style.opacity = "1";
        oldContent.style.display = "none";
        newContent.style.display = "block";

        oldButton.classList = ("notSelected");
        newButton.classList = ("isSelected");

        //TODO: this could be handled better, but it's 2am and I'm tired//
        let storyHero = document.getElementById("heroStory");
        if(request === "Rides"){
            storyHero.style.zIndex = "-1"
        } else {
            storyHero.style.zIndex = "1"
        }
        //------------------------------------------------------------//
        current = request;
    }
  }
