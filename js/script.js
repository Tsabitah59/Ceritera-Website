const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    cards.forEach((box, idx) => {
        const cardTop = box.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}