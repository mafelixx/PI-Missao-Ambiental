document.addEventListener('DOMContentLoaded', function() {
    const saibaMaisButtons = document.querySelectorAll('.saiba_mais');
    const modals = document.querySelectorAll('.modal');

    saibaMaisButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });

    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'none'
        })
    })
})