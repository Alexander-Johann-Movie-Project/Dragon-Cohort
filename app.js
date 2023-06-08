// LOADING ANIMATION
// $(window).on("load", function(){
//     $(".loader").fadeOut(4000);
// });

// PAUSE MOVIE
// Get the video
let video = document.getElementById("myVideo");
// Get the button
let btn = document.getElementById("myBtn");
// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

let text = document.querySelectorAll('.addPopup');
//SHOW AND HIDE INPUT FIELD
function clickMe(e){

    e.preventDefault();
    // let text = document.getElementById("popup", "popup2", "popup3");
    // let text = field;
    for(let i = 0; i <= text.length; i++){

        if (text[i].style.display === "none") {
            text[i].style.display = "block";
        } else {
            text[i].style.display = "none";
        }
        // text[i].display.toggle("addpop");
    }
    }
    document.getElementById("showList").addEventListener("click", clickMe)


// API FETCH
fetch("https://free-trite-appliance.glitch.me/movies")
    .then(response => response.json())
    .then(data => {
            document.querySelector(".title1").innerHTML = data[0].title;
            document.querySelector(".rating1").innerText = data[0].rating;

            document.querySelector(".title2").innerHTML = data[1].title;
            document.querySelector(".rating2").innerText = data[1].rating;

            document.querySelector(".title3").innerHTML = data[2].title;
            document.querySelector(".rating3").innerText = data[2].rating;

            document.querySelector(".title4").innerHTML = data[3].title;
            document.querySelector(".rating4").innerText = data[3].rating;
    });

// // const newMovie = {title: "Do Andriods Dream of Electric Sheep?", author: "Philip K. Dick"}
// // const options = {
// //     method: 'POST',
// //     headers: {
// //         'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(newMovie)
// // }
// // fetch("https://third-repeated-saffron.glitch.me/books", options).then(() =>
// //     fetch("https://third-repeated-saffron.glitch.me/books"))
// //         .then(response => response.json())
// //         .then(data => console.log(data));
//
// // fetch("https://glitch.com/edit/#!/free-trite-appliance?path=README.md%3A1%3A0", {
// //     method: "PATCH",
// //     headers: {
// //         'Content-Type': 'Application'
// //     },
// //     body: JSON.stringify({title})
// // })