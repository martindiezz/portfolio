// Select all video elements
const videos = document.querySelectorAll('.autoplay-video');

// Intersection Observer to play videos when they come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();  // Play video when in view
        } else {
            entry.target.pause(); // Pause video when out of view
        }
    });
}, { threshold: 0.5 }); // Play video when 50% visible

// Attach observer to each video
videos.forEach(video => {
    observer.observe(video);
});
