var img_tracker = "1";
var pic = document.getElementById("image");

function changeImg() {
    if (img_tracker === "1") {
        pic.src = "1.jpg";
        img_tracker = "2";
    } else {
        pic.src = "2.jpg";
        img_tracker = "1";
    }
}

function fadeIn() {
    pic.classList.remove("fade-out");
    pic.classList.add("fade-in");
}

function fadeOut() {
    pic.classList.remove("fade-in");
    pic.classList.add("fade-out");

    // Add listener to the "transitionend" event.

    pic.addEventListener("transitionend", function x() {
        // Remove the previously added listener, change
        // the image and fade-in the new image.

        pic.removeEventListener("transitionend", x);
        changeImg();
        fadeIn();
    });
}