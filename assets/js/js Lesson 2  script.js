/*
// strp 1
function hello () {
document.querySelevtor ("h1").innerHTML ="welcome to obhasaCollage! 2024";

}

*/

/* 
// step 2 
function hello () {
if(document.querySelector("h1").innerHTML = "Hello, ygn"){
document.querySelector("h1").innerHTML= "wecome to obhasaCollage! 2024";
}else {
     document.querySelector("h1").innerHTML= "Hello, ygn";
}

}
*/ 


// step 3
// shorthand
let heading = document.querySelector("h1");
function hello () {
    if (heading.innerHTML === "Hello, ygn") {
        heading.innerHTML = "welcome to obhasa Collage! 2024";
    }else {
        heading.innerHTML = "Hello, ygn";
    }
};

