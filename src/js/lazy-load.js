const images = document.querySelectorAll("[data-src]")

const imgOptions = {
    rootMargin: "0px 0px 100px 0px"
};

const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) return

    img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => imgObserver.observe(image));