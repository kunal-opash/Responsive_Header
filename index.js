const navToggle = document.querySelector('.nav-toggle');


// function myFunction(x) {
//     x.classList.toggle("change");
//     var menuBox = document.getElementById("menu-box");
//     if(menuBox.style.display == "block"){
//         menuBox.style.display = "none";
//     }
//     else {
//         menuBox.style.display = "block";
//     }

//     navContent.classList.toggle('.show-navbar-content')
// }


navToggle.addEventListener('click', function () {
    
    let navContent = document.querySelector('.navbar-content');
    console.log(navContent);

    if (navContent.style.display == 'block') {
        navContent.style.display = 'none';
    }

    else {
        navContent.style.display = "block";
    }

    navContent.classList.toggle('.show-navbar-content');

});

