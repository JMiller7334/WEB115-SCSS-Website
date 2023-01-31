
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
  let contentTypes = ["Story", "Rides", "Features"];
  function toggleContent(request){
    if (request !== current){
        // hides all content //
        for (let i = 0; i < contentTypes.length; i++) {
            //if ("category"+request !== "category"+contentTypes[i]){
                let pageContent = document.getElementById('category'+contentTypes[i]);
                pageContent.style.opacity = '1';
                pageContent.style.display = 'none';
                document.getElementById('button'+contentTypes[i]).classList = 'notSelected';
                document.getElementById('hero'+contentTypes[i]).style.zIndex = '-1';
            //}
        }
        // brings in new content //
        document.getElementById('category' + request).style.display = "block";
        document.getElementById('button'+ request).classList = ("isSelected");
        document.getElementById('hero'+ request).style.zIndex = '1';
        //------------------------------------------------------------//
        current = request;
    }
  }
