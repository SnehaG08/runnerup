function openRightsideMobileNav() {
    document.getElementById("rightsideMobileNav").style.height = "70%";
}

function closeRightsideNav() {
    document.getElementById("rightsideMobileNav").style.height = "0%";
}

function openMobileNav() {
    document.getElementById("mobileNav").style.height = "90%";
}


function closeNav() {
    document.getElementById("mobileNav").style.height = "0%";
}

/*function overlay100(media_query) {
    if (media_query.matches) { // If media query matches
        document.getElementById("mobileNav").style.width = "100%";
    } else {
        document.getElementById("mobileNav").style.width = "50%";
    }
  }
  
var media_query = window.matchMedia("(max-width: 200px)")
overlay100(media_query) // Call listener function at run time
media_query.addEventListener(overlay100)  */