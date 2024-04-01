let menu = document.querySelector(".navigations");
let burger = document.querySelector(".burger");
let x = document.querySelector(".cross");

function burgerMenu(){

    menu.classList.toggle("active");
    burger.classList.toggle("active");
    x.classList.toggle("active");
    
}




// our doctors slider code

let slideCont = document.querySelector(".doctors-cont");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
    slideCont.style.scrollBehavior = "smooth";
    slideCont.scrollLeft += 1146;
})
prevBtn.addEventListener("click", () => {
    slideCont.scrollLeft -= 1146;
})


// client review section

let view = document.querySelector(".view-more");
let client = document.querySelector(".client-more");
let count = 1;
view.addEventListener("click", () => {



    // client.classList.toggle("active");
    
    count++
    console.log(count);
    client.classList.toggle("active");
    view.innerHTML.toggle = "View Less";

})