const sections = document.querySelector('[section]');

const options = {
    root: null, //it is the viewport
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries,
observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry);
        entry.target.classList.toggle("inverse");
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});