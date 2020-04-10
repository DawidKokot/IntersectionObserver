const header = document.querySelector('header');
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
    root: null, // null - vieport
    treshold: 0, // 0-1 - ile procent ma byc widoczne aby odpalic zmiane
    // kevin mowi ze dla obrazkow ustawiac 1?
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    //tutaj sie robi for each bo jeden observer moze obserwowac wiecej elementow DOMu
    // , tutaj oznaczone jako entries. w tym przypadku to zawsze bedzie jedno-elementowa lista
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled")
        } else {
            header.classList.remove("nav-scrolled")
        }
    })

}, sectionOneOptions)

sectionOneObserver.observe(sectionOne)


const aboutCols = document.querySelectorAll(".home-about .col")
const slideIns = document.querySelectorAll(".slide-in")

const appearOnScrollOptions = {
    rootMargin: "0px 0px -100px 0px",
    threshold: 1
}

const appearOnScroll = new IntersectionObserver(function(entries, aboutObserver) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            aboutObserver.unobserve(entry.target);
        }
    })
}, appearOnScrollOptions)

aboutCols.forEach(col => appearOnScroll.observe(col));
slideIns.forEach(col => appearOnScroll.observe(col));