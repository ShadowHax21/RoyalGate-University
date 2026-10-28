const hamburger = document.getElementById("hamburger");
const Navlinks = document.getElementById("Navlinks");

hamburger.addEventListener("click", () => {
    Navlinks.classList.toggle("active");
});