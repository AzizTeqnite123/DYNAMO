var swiper = new Swiper(".proSlider", {
    slidesPerView: "auto",      // Automatically adjust the number of slides shown based on content
    spaceBetween: 60,           // Space between slides
    centeredSlides: true,       // Center the active slide
    loop: true,                // Disable looping
    pagination: {
        el: ".swiper-pagination",    // Pagination element
        clickable: true,             // Make the pagination clickable
        dynamicBullets: true,        // Show dynamic bullets
    },
});


var swiper = new Swiper(".feaProdSlider", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});


var swiper = new Swiper(".testiSlider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

var swiper = new Swiper(".instaSlider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});


// Get all play buttons and videos
const playButtons = document.querySelectorAll('.playhldrpr');
const videos = document.querySelectorAll('video');

// Function to pause all videos and show their play buttons
function pauseAllVideos() {
    videos.forEach((video, index) => {
        video.pause(); // Pause the video
        playButtons[index].style.display = 'flex'; // Show the play button for this video
    });
}

// Iterate over all play buttons and videos
playButtons.forEach((playButton, index) => {
    const video = videos[index];

    // Function to start playing the video when the play button is clicked
    playButton.addEventListener('click', function () {
        // Pause all other videos before playing the current one
        pauseAllVideos();

        video.play();  // Play the current video
        playButton.style.display = 'none';  // Hide the play button for the current video
    });

    // Function to pause/play the video when the video itself is clicked
    video.addEventListener('click', function () {
        if (video.paused) {
            // Pause all other videos and play the current one
            pauseAllVideos();
            video.play();  // Play the video
            playButton.style.display = 'none';  // Hide the play button when playing
        } else {
            video.pause();  // If the video is playing, pause it
            playButton.style.display = 'flex';  // Show the play button when paused
        }
    });
});


