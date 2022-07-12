
const hobbies = ["Aspiring Web Developer", "Enthusiastic Student", "Football Lover"];

let count = 0;
let index = 0;
let currentHobby = "";
let letter = "";

const typing = () => {
    if (count === hobbies.length) {
        count = 0;
    }

    currentHobby = hobbies[count];
    letter = currentHobby.slice(0, ++index);

    document.querySelector(".hero__text__dynamic").textContent = letter;

    if (letter.length === currentHobby.length) {
        count++;
        index = 0;
    }

    setTimeout(typing, 150);
};

typing();

//button click
//name click
document.querySelector(".header_name").addEventListener("click", () => {
    document.querySelector(".hero_details").scrollIntoView();
});

//about click
document.querySelector(".header_about").addEventListener("click", () => {
    console.log(document.querySelector(".about_section"))
    document.querySelector(".about_section").scrollIntoView();
});

//contact click
document.querySelector(".header_contact").addEventListener("click", () => {
    document.querySelector(".contact_details").scrollIntoView();
});

//download click
document.querySelector(".header_download").addEventListener("click", () => {
    window.open("./JinishShresthaCV.pdf", "_blank");
});