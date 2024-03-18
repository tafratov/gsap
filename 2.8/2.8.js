console.log(document);

const heading = document.querySelector(".h1")
const bodyText = document.querySelector(".text")
const box = document.querySelector(".box")


heading.addEventListener('click', () => {
    console.log("cliced h1");
    heading.classList.toggle('is--active')
})

bodyText.addEventListener('click', () => {
    console.log("cliced text");
    bodyText.classList.toggle('is--active_text')
})

box.addEventListener('mouseenter', () => {
    box.classList.add('on--hover')
})

box.addEventListener('mouseleave', () => {
    box.classList.remove('on--hover');
});