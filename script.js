// $(".menu-toggle").on('click', function() {
//   $(this).toggleClass("on");
//   $('.menu-section').toggleClass("on");
//   $("nav ul").toggleClass('hidden');
// });


function toggleNavigation(){
    console.log("Navigation Clicked!");
    nav = document.getElementById('sideNav');

    if (nav.style.display == "none"){
        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }

    // document.getElementById('sideNav').style.display = "block";
    // document.getElementById('contact').style.display = "none";
    // document.getElementById('sideNav').style.height = "40%";
}
