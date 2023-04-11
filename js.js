const test = document.querySelector('.nav__list:nth-child(2)');

test.addEventListener('click', event => {
    event.preventDefault();

    window.scrollTo({
        top: document.querySelector('.second').getBoundingClientRect().y,
        behavior: "smooth"
    });
});