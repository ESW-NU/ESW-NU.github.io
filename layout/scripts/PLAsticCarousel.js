// The following .js file holds the function for switching between images for PLAstic

const images = [
    "../images/PLAstic images/Working on Hopper.jpg",
    "../images/PLAstic images/Yuna cutting Hopper.webp",
    "../images/PLAstic images/Group Blender Testing.jpg",
    "../images/PLAstic images/Alex on Bandsaw.webp",
    "../images/PLAstic images/PLAstic in Shop.webp"
];

let currentIndex = 0;

function changeImage(direction) {
    currentIndex =
        (currentIndex + direction + images.length) % images.length;

    document.getElementById("carousel-image").src =
        images[currentIndex];
}
