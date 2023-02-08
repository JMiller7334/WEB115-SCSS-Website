
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
  let current = "Story";
  const contentTypes = ["Story", "Rides", "Features"];
  const contentTexts = {
    Story:"Play the story, live the Adventure", 
    Rides:"Featuring over 20 epic rides", 
    Features: "Explore a world of thrills"};
  
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
        document.getElementById('heroText').innerHTML = contentTexts[request];
        //------------------------------------------------------------//
        current = request;
    }
  }

//NOTE: func below handles clearing the intro screen after animations play.
const contentContainer = document.getElementById("contentContainer");
contentContainer.addEventListener('animationend', (event) => {
    console.log("jsMain: animEnd:", event.animationName);
    if (event.animationName === 'anim-appear'){
        console.log('jsMain: removing introContainer')
        if (document.getElementById('introContainer')){
            document.getElementById('introContainer').remove();
        }
    }
 });
