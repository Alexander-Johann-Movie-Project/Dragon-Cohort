// LOADING ANIMATION
$(window).on("load", function(){
    $(".loader").fadeOut(4000);
});


// API FETCH
fetch("https://third-repeated-saffron.glitch.me/books")
    .then(response => response.json())
    .then(data =>
        document.querySelector(".title1").innerHTML = data[0].title;
    );

// const newMovie = {title: "Do Andriods Dream of Electric Sheep?", author: "Philip K. Dick"}
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newMovie)
// }
// fetch("https://third-repeated-saffron.glitch.me/books", options).then(() =>
//     fetch("https://third-repeated-saffron.glitch.me/books"))
//         .then(response => response.json())
//         .then(data => console.log(data));

// fetch("https://glitch.com/edit/#!/free-trite-appliance?path=README.md%3A1%3A0", {
//     method: "PATCH",
//     headers: {
//         'Content-Type': 'Application'
//     },
//     body: JSON.stringify({title})
// })