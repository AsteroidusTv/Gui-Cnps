// Buttons
const homeButton = document.getElementById("homeButton") as HTMLButtonElement;
const configButton = document.getElementById("configButton") as HTMLButtonElement;

// Divs
const createSection = document.getElementById("createSection") as HTMLDivElement;
const configSection = document.getElementById("configSection") as HTMLDivElement;

// Set default state
createSection.style.display = "block";
configSection.style.display = "none";
homeButton.classList.add("active");
configButton.classList.remove("active");

// Home
homeButton.addEventListener("click", () => {
    createSection.style.display = "block";
    configSection.style.display = "none";
    homeButton.classList.add("active");
    configButton.classList.remove("active");
});

// Configuration
configButton.addEventListener("click", () => {
    createSection.style.display = "none";
    configSection.style.display = "block";
    homeButton.classList.remove("active");
    configButton.classList.add("active");
});
